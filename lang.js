(function () {
  const STORAGE_KEY = 'lang';

  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'cs' ? 'EN' : 'CZ';

    document.querySelectorAll('[data-en]').forEach(el => {
      if (lang === 'en') {
        // Ulož původní CZ jen jednou
        if (!el.hasAttribute('data-cs')) {
          el.setAttribute('data-cs', el.textContent);
        }
        // Přepiš jen textový obsah — bezpečně přes firstChild text node nebo textContent
        // pokud element obsahuje pouze textový node, přepiš ho přímo
        const kids = Array.from(el.childNodes);
        const hasOnlyText = kids.every(n => n.nodeType === Node.TEXT_NODE);
        if (hasOnlyText) {
          el.textContent = el.getAttribute('data-en');
        } else {
          // Element má child elementy (ikony, <br> atd.) — najdi hlavní text node a přepiš ho
          // Pokud existuje atribut data-en-html, použij innerHTML
          if (el.hasAttribute('data-en-html')) {
            el.innerHTML = el.getAttribute('data-en-html');
          } else {
            // Přepiš první textový node
            for (const node of el.childNodes) {
              if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                node.textContent = el.getAttribute('data-en');
                break;
              }
            }
          }
        }
      } else {
        // Zpět na CZ
        if (el.hasAttribute('data-cs')) {
          const kids = Array.from(el.childNodes);
          const hasOnlyText = kids.every(n => n.nodeType === Node.TEXT_NODE);
          if (hasOnlyText) {
            el.textContent = el.getAttribute('data-cs');
          } else {
            if (el.hasAttribute('data-en-html')) {
              el.innerHTML = el.getAttribute('data-cs');
            } else {
              for (const node of el.childNodes) {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                  node.textContent = el.getAttribute('data-cs');
                  break;
                }
              }
            }
          }
        }
      }
    });

    // Placeholders
    document.querySelectorAll('[data-en-placeholder]').forEach(el => {
      if (lang === 'en') {
        if (!el.hasAttribute('data-cs-placeholder')) {
          el.setAttribute('data-cs-placeholder', el.placeholder);
        }
        el.placeholder = el.getAttribute('data-en-placeholder');
      } else {
        if (el.hasAttribute('data-cs-placeholder')) {
          el.placeholder = el.getAttribute('data-cs-placeholder');
        }
      }
    });

    // Kalendář — MONTH_NAMES a DAY_NAMES pokud existují
    if (typeof window.setCalendarLang === 'function') {
      window.setCalendarLang(lang);
    }
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
