/* Portfolio MMI2 — interactivité minimale, vanilla, sans dépendance.
   1) Scrollspy : surligne le lien de section actif dans l'en-tête.
   2) Lightbox : agrandit une planche de la galerie (progressif, fermable). */

(function () {
  'use strict';

  /* 1) Scrollspy ----------------------------------------------------- */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.site-nav a');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) { link.classList.remove('is-active'); });
        var active = document.querySelector('.site-nav a[href="#' + entry.target.id + '"]');
        if (active) active.classList.add('is-active');
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(function (section) { spy.observe(section); });
  }

  /* 2) Lightbox galerie ---------------------------------------------- */
  var galleryItems = document.querySelectorAll('.gallery__item[data-lightbox]');
  if (!galleryItems.length) return;

  var box = null;

  function buildBox() {
    box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('hidden', '');
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Aperçu agrandi de la planche');
    box.innerHTML =
      '<button type="button" class="lightbox__close" aria-label="Fermer">×</button>' +
      '<img alt="" />';
    document.body.appendChild(box);

    box.addEventListener('click', function (e) {
      if (e.target === box || e.target.classList.contains('lightbox__close')) closeBox();
    });
  }

  function openBox(src, alt) {
    if (!box) buildBox();
    var img = box.querySelector('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt || '');
    box.removeAttribute('hidden');
    document.addEventListener('keydown', onKey);
  }

  function closeBox() {
    if (!box) return;
    box.setAttribute('hidden', '');
    box.querySelector('img').removeAttribute('src');
    document.removeEventListener('keydown', onKey);
  }

  function onKey(e) { if (e.key === 'Escape') closeBox(); }

  galleryItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      // Planche non encore intégrée : ne pas suivre un lien cassé.
      if (item.classList.contains('is-missing')) { e.preventDefault(); return; }
      e.preventDefault();
      var img = item.querySelector('img');
      openBox(item.getAttribute('href'), img ? img.getAttribute('alt') : '');
    });
  });
})();
