(function () {
  var STORAGE_KEY = 'lang';

  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'cs' ? 'EN' : 'CZ';
    var isEN = (lang === 'en');

    // 1. Elementy s data-en (čistý textový obsah)
    var els = document.querySelectorAll('[data-en]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      try {
        var csVal = el.getAttribute('data-cs');
        // Ulož CZ jen pokud není uloženo a el.textContent není prázdný
        if (!csVal) {
          csVal = el.textContent;
          if (csVal && csVal.trim()) {
            el.setAttribute('data-cs', csVal);
          }
        }
        if (isEN) {
          el.textContent = el.getAttribute('data-en');
        } else {
          if (csVal && csVal.trim()) el.textContent = csVal;
        }
      } catch(e) {}
    }

    // 2. Elementy s data-en-html (innerHTML, H1 s <br>, span s <br>)
    var htmlEls = document.querySelectorAll('[data-en-html]');
    for (var j = 0; j < htmlEls.length; j++) {
      var el2 = htmlEls[j];
      try {
        var csHtml = el2.getAttribute('data-cs-html');
        if (!csHtml) {
          csHtml = el2.innerHTML;
          if (csHtml && csHtml.trim()) {
            el2.setAttribute('data-cs-html', csHtml);
          }
        }
        if (isEN) {
          el2.innerHTML = el2.getAttribute('data-en-html');
        } else {
          if (csHtml && csHtml.trim()) el2.innerHTML = csHtml;
        }
      } catch(e) {}
    }

    // 3. Placeholders
    var inputs = document.querySelectorAll('[data-en-placeholder]');
    for (var k = 0; k < inputs.length; k++) {
      var inp = inputs[k];
      try {
        if (!inp.getAttribute('data-cs-placeholder')) {
          var ph = inp.placeholder;
          if (ph) inp.setAttribute('data-cs-placeholder', ph);
        }
        inp.placeholder = isEN
          ? inp.getAttribute('data-en-placeholder')
          : (inp.getAttribute('data-cs-placeholder') || inp.placeholder);
      } catch(e) {}
    }

    // 4. Kalendář
    if (typeof window.setCalendarLang === 'function') {
      window.setCalendarLang(lang);
    }
  }

  window.toggleLang = function () {
    var current = localStorage.getItem(STORAGE_KEY) || 'cs';
    var next = (current === 'cs') ? 'en' : 'cs';
    localStorage.setItem(STORAGE_KEY, next);
    applyLang(next);
  };

  function init() {
    var lang = localStorage.getItem(STORAGE_KEY) || 'cs';
    applyLang(lang);
  }

  // Spusť až po načtení všech skriptů (kalendář, galerie atd.)
  window.addEventListener('load', init);
})();
