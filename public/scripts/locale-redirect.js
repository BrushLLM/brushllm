/**
 * First-visit language redirect (English/unprefixed pages only).
 *
 * Static hosting cannot negotiate Accept-Language at the HTTP level, so the
 * root English page runs this tiny script: on the very first visit (no
 * stored preference) it matches navigator.languages against the supported
 * locales and redirects to the localized URL. Visitors without JS, or whose
 * browser language is not supported, simply stay on the English page.
 * A manual choice in the language switcher stores the same key, which
 * permanently disables the automatic redirect.
 */
(function () {
  try {
    var KEY = 'brushllm-locale';
    if (localStorage.getItem(KEY)) return;

    var codes = ['de', 'en', 'es', 'fr', 'it', 'nl', 'pl', 'pt-BR', 'tr', 'id', 'vi', 'ja', 'zh-CN', 'zh-TW', 'ko'];
    var match = (navigator.languages || [navigator.language])
      .map(function (tag) { return (tag || '').toLowerCase(); })
      .map(function (tag) {
        if (codes.indexOf(tag) !== -1) return tag;
        var base = tag.split('-')[0];
        if (base === 'pt') return codes.indexOf(tag) !== -1 ? tag : null;
        if (base === 'zh') {
          if (tag.indexOf('tw') !== -1 || tag.indexOf('hk') !== -1 || tag.indexOf('hant') !== -1) return 'zh-TW';
          return 'zh-CN';
        }
        return codes.indexOf(base) !== -1 ? base : null;
      })
      .filter(Boolean)[0];

    if (!match || match === 'en') return;

    localStorage.setItem(KEY, match);
    var path = location.pathname === '/' ? '/' : location.pathname;
    location.replace(path === '/' ? '/' + match + '/' : '/' + match + path);
  } catch (e) {
    /* localStorage unavailable (private mode, embed) — stay on English */
  }
})();
