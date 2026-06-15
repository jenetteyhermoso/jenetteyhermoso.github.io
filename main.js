/* ════════════════════════════════════════
   PORTFOLIO — main.js
   Features:
   1. Dark / light mode toggle + localStorage
   2. Sticky navbar on scroll
   3. Mobile hamburger menu
   4. Scroll reveal (Intersection Observer)
   5. Active nav link highlighting
   6. Smooth typing effect on hero name
   7. Contact form feedback
════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. DARK MODE ── */
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme  = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });


  /* ── 2. STICKY NAVBAR ── */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });


  /* ── 3. MOBILE MENU ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    }
  });


  /* ── 4. SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger children by index within their parent
        const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
        const idx      = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 0.08}s`;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => revealObserver.observe(el));


  /* ── 5. ACTIVE NAV LINK ── */
  const sections = document.querySelectorAll('main section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(a => {
          a.classList.toggle(
            'active',
            a.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, {
    threshold: 0.4
  });

  sections.forEach(s => sectionObserver.observe(s));


  /* ── 6. TYPING EFFECT on hero eyebrow (optional flair) ── */
  const eyebrow  = document.querySelector('.hero-eyebrow');
  if (eyebrow) {
    const text  = eyebrow.textContent;
    eyebrow.textContent = '';
    eyebrow.style.opacity = '1'; // override reveal momentarily

    let i = 0;
    const typeInterval = setInterval(() => {
      eyebrow.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(typeInterval);
    }, 40);
  }


  /* ── 7. CONTACT FORM FEEDBACK ── */
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const btn         = form.querySelector('button[type="submit"]');
      const originalTxt = btn.textContent;

      btn.textContent  = 'Sending…';
      btn.disabled     = true;

      try {
        const res = await fetch(form.action, {
          method:  'POST',
          body:    new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          btn.textContent = '✓ Message sent!';
          btn.style.background = '#22c55e';
          btn.style.borderColor = '#22c55e';
          form.reset();
        } else {
          throw new Error('Send failed');
        }
      } catch {
        btn.textContent  = 'Failed — try email directly';
        btn.style.background = '#ef4444';
        btn.style.borderColor = '#ef4444';
      }

      setTimeout(() => {
        btn.textContent  = originalTxt;
        btn.disabled     = false;
        btn.style.background = '';
        btn.style.borderColor = '';
      }, 4000);
    });
  }

});
