/**
 * analytics-events.js — PlexAmerica
 * Versao: 1.0.0 — 2026-05-28
 *
 * Eventos customizados para GA4 e Meta Pixel.
 * Carregado no rodape dos HTMLs (antes de </body>), apos consent-mode.js.
 *
 * GATE DE CONSENT:
 * Todas as funcoes verificam window.plexConsent === 'granted' antes de
 * enviar qualquer dado. Se o usuario recusou ou ainda nao decidiu,
 * nenhuma chamada para gtag() ou fbq() e feita.
 *
 * EVENTOS RASTREADOS:
 * - whatsapp_click: disparado em todo botao CTA com data-sku
 *     GA4: evento 'whatsapp_click' com parametros sku_id e page_path
 *     Meta: evento 'Contact' com content_ids=[sku_id]
 *
 * USO NOS BOTOES HTML:
 *   <a href="https://wa.me/5569999814210" data-sku="REY-JAR-2L" onclick="plexTrackWhatsapp(this)">
 *
 * REMOVER CONSOLE.LOG apos validacao em 01/06/2026.
 */

/**
 * Rastreia clique em botao CTA de WhatsApp.
 * @param {HTMLElement} element - O elemento <a> clicado (passar 'this' no onclick)
 */
window.plexTrackWhatsapp = function (element) {
  var skuId = (element && element.getAttribute('data-sku')) || 'desconhecido';
  var pagePath = window.location.pathname;

  // Log de debug — REMOVER EM PRODUCAO APOS 01/06/2026
  console.log(
    '[PlexAmerica] whatsapp_click | sku:', skuId,
    '| pagina:', pagePath,
    '| consent:', window.plexConsent
  );

  // GA4 — so envia se consentimento foi concedido
  if (typeof window.gtag === 'function' && window.plexConsent === 'granted') {
    window.gtag('event', 'whatsapp_click', {
      'sku_id':    skuId,
      'page_path': pagePath
    });
  }

  // Meta Pixel — evento Contact (so envia se consentimento foi concedido)
  if (typeof window.fbq === 'function' && window.plexConsent === 'granted') {
    window.fbq('track', 'Contact', {
      'content_ids': [skuId],
      'content_type': 'product'
    });
  }
};

/**
 * Rastreia visualizacao de pagina de produto do catalogo.
 * Chamar em paginas de produto apos DOMContentLoaded se quiser hit granular
 * alem do page_view automatico do GA4.
 * @param {string} skuId - SKU do produto exibido na pagina
 */
window.plexTrackProductView = function (skuId) {
  if (!skuId) { return; }

  if (typeof window.gtag === 'function' && window.plexConsent === 'granted') {
    window.gtag('event', 'view_item', {
      'items': [{
        'item_id': skuId,
        'item_name': skuId,
        'item_brand': 'Reyplast'
      }]
    });
  }

  if (typeof window.fbq === 'function' && window.plexConsent === 'granted') {
    window.fbq('track', 'ViewContent', {
      'content_ids': [skuId],
      'content_type': 'product'
    });
  }
};
