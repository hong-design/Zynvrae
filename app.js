(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (navToggle && nav) {
    const setMenuState = function (isOpen) {
      nav.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.textContent = isOpen ? '\u2715' : '\u2630';
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
