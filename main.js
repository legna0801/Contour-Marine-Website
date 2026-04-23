// ============================================
// CONTOUR MARINE - Global JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Sticky Nav ─────────────────────────────
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  // ── Hero BG Zoom ───────────────────────────
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    setTimeout(() => heroBg.classList.add('loaded'), 100);
  }

  // ── Hamburger / Mobile Nav ──────────────────
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Scroll Reveal ──────────────────────────
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .process-step, .reveal-up, .swbp-reveal, .swbp-caption-reveal');
  if (revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });
    revealEls.forEach(el => {
      // If already in view on load (e.g. near top of page), make visible immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      } else {
        revealObserver.observe(el);
      }
    });
  }

  // ── Floating CTA ───────────────────────────
  const floatCta = document.querySelector('.float-cta');
  if (floatCta) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        floatCta.classList.add('visible');
      } else {
        floatCta.classList.remove('visible');
      }
    });
  }

  // ── Counter Animation ──────────────────────
  function animateCounter(el, target, duration = 1800, suffix = '') {
    let start = 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const target = parseInt(e.target.dataset.count);
          const suffix = e.target.dataset.suffix || '';
          animateCounter(e.target, target, 1800, suffix);
          counterObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  }

  // ── 3D Tilt on Feature Boxes ───────────────
  const tiltCards = document.querySelectorAll('.feature-box, .service-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ── Parallax on hero bg ─────────────────────
  const heroBgEl = document.querySelector('.hero-bg');
  if (heroBgEl) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      heroBgEl.style.transform = `scale(1) translateY(${scrolled * 0.25}px)`;
    });
  }

  // ── Active Nav Link ────────────────────────
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── Contact Form Submission ────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.btn-submit');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      // Simulate submission
      setTimeout(() => {
        contactForm.style.display = 'none';
        const success = document.querySelector('.form-success');
        if (success) success.style.display = 'block';
      }, 1500);
    });
  }

  // ── Piling Annotated Diagram — SVG callout reveal ─
  const annoWrap = document.querySelector('.pl-diagram-wrap');
  if (annoWrap) {
    const annoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('pl-anno-visible');
          annoObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    annoObserver.observe(annoWrap);
  }

  // ── Smooth anchor links ────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
