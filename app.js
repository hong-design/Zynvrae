(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const siteHeader = document.querySelector('.site-header');
  const scrollProgressBar = document.querySelector('.scroll-progress-bar');

  if (siteHeader) {
    let lastY = window.scrollY;
    let ticking = false;
    const minScrollY = 80;
    const threshold = 6;
    const docEl = document.documentElement;

    const updateScrollProgress = function () {
      if (!scrollProgressBar) {
        return;
      }

      const maxScroll = docEl.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      const clamped = Math.max(0, Math.min(1, ratio));
      scrollProgressBar.style.transform = 'scaleX(' + clamped + ')';
    };

    const updateHeaderOnScroll = function () {
      const currentY = window.scrollY;
      const deltaY = currentY - lastY;
      const isMenuOpen = Boolean(nav && nav.classList.contains('open'));

      if (currentY <= minScrollY || isMenuOpen) {
        siteHeader.classList.remove('header-hidden');
      } else if (deltaY > threshold) {
        siteHeader.classList.add('header-hidden');
      } else if (deltaY < -threshold) {
        siteHeader.classList.remove('header-hidden');
      }

      lastY = currentY;
      updateScrollProgress();
      ticking = false;
    };

    updateScrollProgress();

    window.addEventListener(
      'scroll',
      function () {
        if (ticking) {
          return;
        }
        ticking = true;
        window.requestAnimationFrame(updateHeaderOnScroll);
      },
      { passive: true }
    );

    window.addEventListener('resize', updateScrollProgress);
  }

  if (navToggle && nav) {
    const setMenuState = function (isOpen) {
      nav.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.textContent = isOpen ? '\u2715' : '\u2630';
      if (isOpen && siteHeader) {
        siteHeader.classList.remove('header-hidden');
      }
    };

    navToggle.addEventListener('click', function () {
      setMenuState(!nav.classList.contains('open'));
    });

    nav.addEventListener('click', function (event) {
      if (!(event.target instanceof Element) || !event.target.closest('a')) {
        return;
      }
      if (window.matchMedia('(max-width: 720px)').matches) {
        setMenuState(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        setMenuState(false);
        navToggle.focus();
      }
    });
  }

  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) {
    return;
  }

  if (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !('IntersectionObserver' in window)
  ) {
    revealEls.forEach(function (el) {
      el.classList.add('show');
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
})();
