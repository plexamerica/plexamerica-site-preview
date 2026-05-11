/* PlexAmerica — mobile hamburger menu (vanilla JS, no deps) */
(function () {
  'use strict';

  var btn = document.getElementById('plexMenuBtn');
  var drawer = document.getElementById('plexMobileMenu');
  var backdrop = document.getElementById('plexMobileBackdrop');
  if (!btn || !drawer || !backdrop) return;

  /* Marca o link da página atual como ativo */
  var path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (path === '' || path === '/') path = 'index.html';
  var links = drawer.querySelectorAll('a[data-route]');
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute('data-route').toLowerCase() === path) {
      links[i].classList.add('active');
    }
  }

  function openMenu() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    btn.innerHTML = '×'; /* × */
    btn.setAttribute('aria-label', 'Fechar menu de navegação');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '☰'; /* ☰ */
    btn.setAttribute('aria-label', 'Abrir menu de navegação');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (drawer.classList.contains('open')) closeMenu();
    else openMenu();
  }

  btn.addEventListener('click', toggleMenu);
  backdrop.addEventListener('click', closeMenu);

  var closeBtn = drawer.querySelector('.plex-mobile-close');
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  var allLinks = drawer.querySelectorAll('a');
  for (var j = 0; j < allLinks.length; j++) {
    allLinks[j].addEventListener('click', closeMenu);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeMenu();
  });
})();
