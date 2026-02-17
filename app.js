(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.textContent = isOpen ? '✕' : '☰';
    });

    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (window.innerWidth <= 720) {
          nav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
          navToggle.textContent = '☰';
        }
      });
    });
  }

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('show');
    });
  }

  const form = document.getElementById('lead-form');
  const status = document.getElementById('form-status');
  if (!form || !status) return;

  function showStatus(message, isError) {
    status.textContent = message;
    status.style.color = isError ? '#b42318' : '#0b5a53';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const budget = form.budget.value.trim();
    const timeline = form.timeline.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !budget || !timeline || !message) {
      showStatus('請先完整填寫必填欄位。', true);
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      showStatus('Email 格式不正確，請重新確認。', true);
      return;
    }

    const subject = encodeURIComponent('Zynvrae 商業合作需求 - ' + name);
    const body = encodeURIComponent(
      '姓名 / 品牌名稱: ' + name + '\n' +
      '聯絡 Email: ' + email + '\n' +
      '預算範圍: ' + budget + '\n' +
      '預計啟動時間: ' + timeline + '\n\n' +
      '需求簡述:\n' + message
    );

    showStatus('已產生寄件草稿，若未自動開啟請檢查預設郵件程式。', false);
    window.location.href = 'mailto:zynvrae@gmail.com?subject=' + subject + '&body=' + body;
  });
})();
