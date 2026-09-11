// Nav shadow on scroll + reveal-on-scroll. Kept deliberately small.
(function () {
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  els.forEach(function (el) { io.observe(el); });
})();

// Blog tag filter — pills with [data-filter] toggle .post-row[data-tag] visibility.
(function () {
  var pills = document.querySelectorAll('.tag-pill');
  var rows = document.querySelectorAll('.post-row');
  if (!pills.length || !rows.length) return;
  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      pills.forEach(function (p) { p.classList.remove('is-active'); });
      pill.classList.add('is-active');
      var tag = pill.getAttribute('data-filter');
      rows.forEach(function (row) {
        row.hidden = tag !== 'all' && row.getAttribute('data-tag') !== tag;
      });
    });
  });
})();
