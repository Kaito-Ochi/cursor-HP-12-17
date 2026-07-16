/* Edge Hub — motion layer: scroll parallax + benefits carousel */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============ Parallax ============ */
  if (!reduced) {
    var els = Array.prototype.slice.call(document.querySelectorAll('[data-plx]'));
    var ticking = false;

    var update = function () {
      ticking = false;
      var vh = window.innerHeight;
      for (var i = 0; i < els.length; i++) {
        var el = els[i];
        var r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        var c = r.top + r.height / 2 - vh / 2;
        var speed = parseFloat(el.getAttribute('data-plx')) || 0;
        var y = (-c * speed).toFixed(1);
        var scale = el.getAttribute('data-plx-scale');
        el.style.transform = 'translate3d(0,' + y + 'px,0)' + (scale ? ' scale(' + scale + ')' : '');
      }
    };
    var onScroll = function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }

  /* ============ Benefits carousel ============ */
  var track = document.querySelector('.sv-benefit-cards');
  var wrap = document.querySelector('.sv-benefit-carousel');
  if (track && wrap) {
    var prev = wrap.querySelector('.sv-car-btn--prev');
    var next = wrap.querySelector('.sv-car-btn--next');

    var step = function () {
      var card = track.querySelector('.sv-benefit-card');
      if (!card) return 300;
      var gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 20;
      return card.getBoundingClientRect().width + gap;
    };
    var maxScroll = function () { return track.scrollWidth - track.clientWidth - 4; };

    var updateBtns = function () {
      if (!prev || !next) return;
      prev.disabled = track.scrollLeft <= 4;
      next.disabled = track.scrollLeft >= maxScroll();
    };
    track.addEventListener('scroll', updateBtns, { passive: true });
    window.addEventListener('resize', updateBtns, { passive: true });
    updateBtns();

    var userTouched = false;
    if (prev) prev.addEventListener('click', function () { userTouched = true; track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    if (next) next.addEventListener('click', function () { userTouched = true; track.scrollBy({ left: step(), behavior: 'smooth' }); });
    track.addEventListener('pointerdown', function () { userTouched = true; }, { passive: true });

    /* gentle auto-advance while visible, until the user interacts */
    if (!reduced) {
      var visible = false;
      var hovered = false;
      var io = new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
      }, { threshold: 0.4 });
      io.observe(track);
      wrap.addEventListener('mouseenter', function () { hovered = true; });
      wrap.addEventListener('mouseleave', function () { hovered = false; });

      setInterval(function () {
        if (!visible || hovered || userTouched || document.hidden) return;
        if (track.scrollLeft >= maxScroll()) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: step(), behavior: 'smooth' });
        }
      }, 4500);
    }
  }
})();
