(function () {
  'use strict';

  document.documentElement.classList.add('js-ready');

  var ring = document.querySelector('.ring');
  if (!ring) return;

  var segments = Array.prototype.slice.call(ring.querySelectorAll('.segment'));
  var numberEl = ring.querySelector('.ring__number');
  var labelEl = ring.querySelector('.ring__label');

  var stats = [
    { color: '#ff2ec4', num: 247,   label: 'caffè bevuti' },
    { color: '#2be8d0', num: 1842,  label: 'bug schiacciati' },
    { color: '#ffb703', num: 12400, label: 'righe di codice (circa)' },
    { color: '#8b5cf6', num: 2,     label: 'tastiere rotte' }
  ];

  var AUTO_INTERVAL = 2200;
  var autoIndex = 0;
  var lockedIndex = null;
  var autoTimer = null;
  var currentDisplayedNum = stats[0].num;

  function formatIT(n) {
    return n.toLocaleString('it-IT');
  }

  function setActive(i, animate) {
    segments.forEach(function (seg) {
      var si = Number(seg.dataset.i);
      seg.classList.toggle('active', si === i);
      seg.classList.toggle('dim', si !== i);
    });
    updateCenter(i, animate !== false);
  }

  function updateCenter(i, animate) {
    var stat = stats[i];
    labelEl.textContent = stat.label;
    if (animate) {
      animateNumber(currentDisplayedNum, stat.num, 500);
    } else {
      numberEl.textContent = formatIT(stat.num);
    }
    currentDisplayedNum = stat.num;
  }

  function animateNumber(from, to, duration) {
    var start = null;

    function tick(timestamp) {
      if (start === null) start = timestamp;
      var t = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      var value = Math.round(from + (to - from) * eased);
      numberEl.textContent = formatIT(value);
      if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  function startAutoRotate() {
    stopAutoRotate();
    autoTimer = setInterval(function () {
      autoIndex = (autoIndex + 1) % stats.length;
      setActive(autoIndex, true);
    }, AUTO_INTERVAL);
  }

  function stopAutoRotate() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function handleEnter(i) {
    stopAutoRotate();
    setActive(i, true);
  }

  function handleLeave() {
    if (lockedIndex !== null) {
      setActive(lockedIndex, true);
    } else {
      setActive(autoIndex, true);
      startAutoRotate();
    }
  }

  function handleClick(i) {
    if (lockedIndex === i) {
      lockedIndex = null;
      setActive(autoIndex, true);
      startAutoRotate();
    } else {
      lockedIndex = i;
      stopAutoRotate();
      setActive(i, true);
    }
  }

  segments.forEach(function (seg) {
    var i = Number(seg.dataset.i);

    seg.addEventListener('mouseenter', function () { handleEnter(i); });
    seg.addEventListener('mouseleave', handleLeave);
    seg.addEventListener('click', function () { handleClick(i); });
    seg.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick(i);
      }
    });
  });

  setActive(0, false);
  startAutoRotate();
})();
