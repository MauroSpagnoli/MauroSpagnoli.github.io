/* Portfolio · mejoras progresivas (sin dependencias).
   Si este script no se ejecuta, el sitio sigue siendo 100 % navegable:
   el tema por defecto es oscuro y el idioma por defecto, el de cada HTML. */
(function () {
  'use strict';

  var THEME_KEY = 'portfolio-theme';
  var LANG_KEY = 'portfolio-lang';
  var root = document.documentElement;

  function safeGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* modo privado */ }
  }

  /* ---------- Tema claro / oscuro ---------- */
  var storedTheme = safeGet(THEME_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    root.setAttribute('data-theme', storedTheme);
  }

  var toggle = document.querySelector('[data-theme-toggle]');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme');
      if (!current) {
        current = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      }
      var next = current === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      safeSet(THEME_KEY, next);
      toggle.setAttribute('aria-pressed', String(next === 'light'));
      toggle.setAttribute('aria-label',
        next === 'light' ? toggle.getAttribute('data-label-dark') : toggle.getAttribute('data-label-light'));
    });
  }

  /* ---------- Recordar el idioma elegido ---------- */
  document.querySelectorAll('[data-set-lang]').forEach(function (link) {
    link.addEventListener('click', function () {
      safeSet(LANG_KEY, link.getAttribute('data-set-lang'));
    });
  });

  /* ---------- Aviso de idioma recordado ----------
     Si la preferencia guardada es la del otro idioma, mostramos un aviso discreto
     con el enlace para cambiar. No redirigimos: una redirección automática puede
     desorientar y romper el botón "atrás" del navegador. */
  var hint = document.querySelector('[data-lang-hint]');
  if (hint && safeGet(LANG_KEY) === hint.getAttribute('data-lang-hint')) {
    hint.removeAttribute('hidden');
  }
})();
