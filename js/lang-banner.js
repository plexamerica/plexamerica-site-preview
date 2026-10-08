/* PlexAmerica — banner cortês "English version available" (vanilla, sem deps)
   Mostra só em páginas PT, para navegadores cujo idioma NÃO é português
   (en, zh, es, …) — público da Canton Fair. Não redireciona (preserva SEO).
   Dispensado via localStorage 'banner-en-dismissed'.
   ES: quando /es/ existir, mandar 'es' para lá (backlog). */
(function () {
  'use strict';

  var path = location.pathname;
  if (path.indexOf('/en/') === 0 || path.indexOf('/jcabral') === 0) return;

  var lang = (navigator.language || navigator.userLanguage || 'pt').slice(0, 2).toLowerCase();
  if (lang === 'pt') return;

  try { if (localStorage.getItem('banner-en-dismissed')) return; } catch (e) {}

  // Página com par EN vai direto pra ela; demais vão pra home EN
  var pares = {
    '/para-fabricantes.html': '/en/para-fabricantes.html',
    '/contato.html': '/en/contact.html',
    '/obrigado.html': '/en/thank-you.html'
  };
  var target = pares[path] || '/en/';

  var css =
    '.lang-banner{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;' +
      'background:#253875;color:#fff;font-family:var(--plex-font, system-ui, sans-serif);font-size:14px;' +
      'line-height:1.4;padding:12px 56px 12px 16px;position:relative;z-index:101;text-align:center}' +
    '.lang-banner a{color:#F6B817;text-decoration:underline;text-underline-offset:3px;font-weight:600}' +
    '.lang-banner button{position:absolute;right:4px;top:50%;transform:translateY(-50%);width:44px;height:44px;' +
      'background:none;border:0;color:#fff;font-size:24px;line-height:1;cursor:pointer;opacity:.8}' +
    '.lang-banner button:hover,.lang-banner button:focus-visible{opacity:1}' +
    '@media (max-width:768px){.lang-banner{font-size:13px;padding:10px 52px 10px 12px;gap:8px}}';

  function show() {
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    var banner = document.createElement('div');
    banner.className = 'lang-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Language');
    banner.setAttribute('lang', 'en');
    banner.innerHTML =
      '<span>English version available</span>' +
      '<a href="' + target + '" hreflang="en">View in English</a>' +
      '<button type="button" aria-label="Dismiss">×</button>';
    document.body.insertBefore(banner, document.body.firstChild);

    banner.querySelector('button').addEventListener('click', function () {
      try { localStorage.setItem('banner-en-dismissed', '1'); } catch (e) {}
      banner.remove();
    });
  }

  if (document.body) show();
  else document.addEventListener('DOMContentLoaded', show);
})();
