/**
 * consent-mode.js — PlexAmerica LGPD Consent Gate
 * Versao: 1.0.0 — 2026-05-28
 *
 * GATE DE CONSENTIMENTO: nenhum script de tracking carrega
 * antes de o usuario aceitar explicitamente o banner LGPD.
 *
 * Sequencia de carregamento obrigatoria no <head> de todos os HTMLs:
 *   1. consent-mode.js  (este arquivo — PRIMEIRO)
 *   2. ga4-snippet.html  (embutido no <head> — inicializa GA4 em modo denied)
 *   3. pixel-snippet.html (embutido no <head> — inicializa Pixel em modo revoke)
 *   4. banner-lgpd.html  (embutido no <body> ou carregado por JS)
 *
 * SEM aceite, window.plexConsent permanece 'pending' ou 'denied'
 * e os callbacks de gtag/fbq update NUNCA sao chamados.
 */
(function () {
  'use strict';

  var COOKIE_NAME = 'plex_consent';
  var COOKIE_DAYS = 365;

  /* ------------------------------------------------------------------ */
  /* Utilitarios de cookie                                                */
  /* ------------------------------------------------------------------ */
  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  function setCookie(name, value, days) {
    var expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie =
      name + '=' + value +
      '; expires=' + expires +
      '; path=/' +
      '; SameSite=Lax';
  }

  /* ------------------------------------------------------------------ */
  /* Acoes de consentimento                                               */
  /* ------------------------------------------------------------------ */

  /**
   * Chamado pelo botao "Aceitar" do banner.
   * Atualiza GA4 Consent Mode v2 e Meta Pixel para 'granted'/'grant'.
   */
  window.plexGrantConsent = function () {
    setCookie(COOKIE_NAME, 'granted', COOKIE_DAYS);
    window.plexConsent = 'granted';

    // GA4 Consent Mode v2 — atualiza todos os sinais
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'ad_storage':         'granted',
        'ad_user_data':       'granted',
        'ad_personalization': 'granted',
        'analytics_storage':  'granted'
      });
    }

    // Meta Pixel — libera coleta
    if (typeof window.fbq === 'function') {
      window.fbq('consent', 'grant');
    }

    _removeBanner();
  };

  /**
   * Chamado pelo botao "Recusar" do banner.
   * GA4 e Pixel permanecem no estado padrao negado (nao ha update).
   */
  window.plexDenyConsent = function () {
    setCookie(COOKIE_NAME, 'denied', COOKIE_DAYS);
    window.plexConsent = 'denied';
    // Nenhum update para gtag/fbq — permanecem negados
    _removeBanner();
  };

  /* ------------------------------------------------------------------ */
  /* Banner                                                               */
  /* ------------------------------------------------------------------ */
  function _removeBanner() {
    var el = document.getElementById('plex-lgpd-banner');
    if (el) { el.remove(); }
  }

  /* ------------------------------------------------------------------ */
  /* Inicializacao — executa imediatamente ao carregar o script           */
  /* ------------------------------------------------------------------ */
  var saved = getCookie(COOKIE_NAME);

  if (saved === 'granted') {
    window.plexConsent = 'granted';
    // Dispara update assim que gtag/fbq estiverem disponiveis
    // (GA4 e Pixel ja foram inicializados em modo denied antes deste update)
    document.addEventListener('DOMContentLoaded', function () {
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          'ad_storage':         'granted',
          'ad_user_data':       'granted',
          'ad_personalization': 'granted',
          'analytics_storage':  'granted'
        });
      }
      if (typeof window.fbq === 'function') {
        window.fbq('consent', 'grant');
      }
    });

  } else if (saved === 'denied') {
    window.plexConsent = 'denied';
    // Nada a fazer — GA4/Pixel permanecem em modo denied (estado padrao)

  } else {
    // Primeira visita ou cookie expirado — mostrar banner
    window.plexConsent = 'pending';
    // Banner e renderizado pelo banner-lgpd.html apos DOMContentLoaded
  }

})();
