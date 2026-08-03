(function () {
  const STORAGE_KEY = 'lang';

  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'cs' ? 'EN' : 'CZ';

    document.querySelectorAll('[data-en]').forEach(el => {
      if (lang === 'en') {
        if (!el.dataset.cs) el.dataset.cs = el.innerHTML;
        el.innerHTML = el.dataset.en;
      } else {
        if (el.dataset.cs) el.innerHTML = el.dataset.cs;
      }
    });

    // Placeholders
    document.querySelectorAll('[data-en-placeholder]').forEach(el => {
      if (lang === 'en') {
        el.dataset.csPlaceholder = el.placeholder;
        el.placeholder = el.dataset.enPlaceholder;
      } else {
        if (el.dataset.csPlaceholder) el.placeholder = el.dataset.csPlaceholder;
      }
    });
  }

  window.toggleLang = function () {
    const current = localStorage.getItem(STORAGE_KEY) || 'cs';
    const next = current === 'cs' ? 'en' : 'cs';
    localStorage.setItem(STORAGE_KEY, next);
    applyLang(next);
  };

  function init() {
    const lang = localStorage.getItem(STORAGE_KEY) || 'cs';
    applyLang(lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
