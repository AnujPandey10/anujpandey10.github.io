// Theme Toggle Functionality
(function() {
  'use strict';

  function getPreferredTheme() {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  function getStoredTheme() {
    try {
      const t = localStorage.getItem('theme');
      return t === 'dark' || t === 'light' ? t : null;
    } catch (_) {
      return null;
    }
  }

  function getActiveTheme() {
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr === 'dark' || attr === 'light') return attr;
    return getStoredTheme() || getPreferredTheme();
  }

  function applyTheme(theme, persist) {
    const next = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    document.documentElement.style.colorScheme = next;

    if (persist) {
      try {
        localStorage.setItem('theme', next);
      } catch (_) {
        // ignore
      }
    }

    updateToggleButton(next);
  }

  function updateToggleButton(theme) {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const isDark = theme === 'dark';
    toggle.textContent = isDark ? 'Light mode' : 'Dark mode';
    toggle.setAttribute(
      'aria-label',
      isDark ? 'Switch to light theme' : 'Switch to dark theme'
    );
    toggle.setAttribute('aria-pressed', String(isDark));
  }

  function toggleTheme() {
    const current = getActiveTheme();
    applyTheme(current === 'dark' ? 'light' : 'dark', true);
  }

  function ensureToggleButton() {
    if (document.getElementById('theme-toggle')) return;

    const toggle = document.createElement('button');
    toggle.id = 'theme-toggle';
    toggle.className = 'theme-toggle';
    toggle.type = 'button';
    toggle.addEventListener('click', toggleTheme);

    // Default label; will be corrected by updateToggleButton().
    toggle.textContent = 'Dark mode';
    document.body.appendChild(toggle);
  }

  function init() {
    ensureToggleButton();
    applyTheme(getActiveTheme(), false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

