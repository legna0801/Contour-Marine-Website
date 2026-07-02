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
    }, { threshold: 0, rootMargin: '0px 0px 100px 0px' });
    revealEls.forEach(el => {
      // Immediately visible if already on screen
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
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
    }, { threshold: 0.1, rootMargin: '0px 0px 0px 0px' });
    counters.forEach(el => {
      // If already visible on load, fire immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        setTimeout(() => animateCounter(el, target, 1800, suffix), 400);
      } else {
        counterObserver.observe(el);
      }
    });
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

  // ── Parallax on hero bg — removed (was sliding over featured section on scroll) ──

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
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.btn-submit');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> &nbsp; Sending...';
      btn.disabled = true;

      const formData = new FormData(contactForm);

      try {
        const response = await fetch('https://formsubmit.co/ajax/tom@contourmarine.com', {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          contactForm.style.display = 'none';
          const success = document.querySelector('.form-success');
          if (success) success.style.display = 'block';
        } else {
          const data = await response.json();
          const msg = (data.errors || []).map(err => err.message).join(', ') || 'Something went wrong. Please try again or call us directly.';
          alert(msg);
          btn.innerHTML = originalText;
          btn.disabled = false;
        }
      } catch (err) {
        alert('Unable to send your request. Please call us at (954) 968-0500 or email tom@contourmarine.com directly.');
        btn.innerHTML = originalText;
        btn.disabled = false;
      }
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

  // ── Sitewide Image Lightbox ────────────────
  // Works on all pages — picks up images inside showcase/gallery cards
  (function () {
    // Only run if gallery.html hasn't already set up its own lightbox
    if (document.getElementById('lb')) return;

    // Inject lightbox HTML
    const lbHTML = `
      <div id="sw-lb" role="dialog" aria-modal="true" aria-label="Image viewer" style="
        position:fixed;inset:0;z-index:9000;
        background:rgba(4,14,26,0.96);
        display:flex;align-items:center;justify-content:center;
        opacity:0;pointer-events:none;transition:opacity 0.3s ease;">
        <button id="sw-lb-close" aria-label="Close" style="
          position:absolute;top:1.4rem;right:1.6rem;
          width:44px;height:44px;border-radius:50%;
          border:1.5px solid rgba(255,255,255,0.22);
          background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.85);
          font-size:1.1rem;cursor:pointer;display:flex;align-items:center;
          justify-content:center;z-index:9010;transition:background 0.2s;">
          <i class="fas fa-times"></i></button>
        <button id="sw-lb-prev" aria-label="Previous" style="
          position:absolute;top:50%;left:1.4rem;transform:translateY(-50%);
          width:48px;height:48px;border-radius:50%;
          border:1.5px solid rgba(255,255,255,0.18);
          background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.78);
          font-size:1.05rem;cursor:pointer;display:flex;align-items:center;
          justify-content:center;z-index:9010;transition:background 0.2s;visibility:hidden;">
          <i class="fas fa-chevron-left"></i></button>
        <button id="sw-lb-next" aria-label="Next" style="
          position:absolute;top:50%;right:1.4rem;transform:translateY(-50%);
          width:48px;height:48px;border-radius:50%;
          border:1.5px solid rgba(255,255,255,0.18);
          background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.78);
          font-size:1.05rem;cursor:pointer;display:flex;align-items:center;
          justify-content:center;z-index:9010;transition:background 0.2s;visibility:hidden;">
          <i class="fas fa-chevron-right"></i></button>
        <div style="max-width:min(90vw,1100px);max-height:88vh;position:relative;display:flex;align-items:center;justify-content:center;">
          <img id="sw-lb-img" src="" alt="" style="
            max-width:100%;max-height:88vh;
            object-fit:contain;border-radius:10px;display:block;
            box-shadow:0 24px 80px rgba(0,0,0,0.6);transition:opacity 0.2s ease;" />
          <div id="sw-lb-caption" style="
            position:absolute;bottom:-2.4rem;left:0;right:0;text-align:center;
            font-family:'Barlow Condensed',sans-serif;font-size:0.72rem;font-weight:700;
            letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.38);"></div>
        </div>
        <div id="sw-lb-counter" style="
          position:absolute;bottom:1.4rem;left:50%;transform:translateX(-50%);
          font-family:'Barlow Condensed',sans-serif;font-size:0.7rem;
          letter-spacing:0.18em;color:rgba(255,255,255,0.28);"></div>
      </div>`;
    document.body.insertAdjacentHTML('beforeend', lbHTML);

    const overlay  = document.getElementById('sw-lb');
    const lbImg    = document.getElementById('sw-lb-img');
    const lbCaption= document.getElementById('sw-lb-caption');
    const lbCounter= document.getElementById('sw-lb-counter');
    const lbClose  = document.getElementById('sw-lb-close');
    const lbPrev   = document.getElementById('sw-lb-prev');
    const lbNext   = document.getElementById('sw-lb-next');

    // Collect all clickable image containers on the page
    // Target: any div that directly wraps an <img> and has position:relative or border-radius
    // Strategy: find all imgs inside .dock-showcase-inner, .deck-light-grid parent,
    //           .dock-montage-inner, .ipe-walkway-inner, .lighting-dark-inner,
    //           .service-detail-img, and any div with border-radius:14px style
    const selectors = [
      '.dock-showcase-inner div[style*="border-radius"]',
      '.dock-montage-inner div[style*="border-radius"]',
      '.lighting-dark-inner div[style*="border-radius"]',
      '.ipe-walkway-inner div[style*="border-radius"]',
      '.dk-transform-img-wrap',
      '.showcase-compare-img',
      '.showcase-photo',
      '.client-photo-row div[style*="border-radius"]',
    ];

    let images = [];

    function collectImages() {
      images = [];
      document.querySelectorAll(selectors.join(',')).forEach(card => {
        const img = card.querySelector('img');
        if (img && img.src) {
          images.push({ src: img.src, alt: img.alt || '', caption: img.alt || '' });
        }
      });
    }

    function open(idx) {
      collectImages();
      if (!images[idx]) return;
      show(idx);
      overlay.style.opacity = '1';
      overlay.style.pointerEvents = 'all';
      document.body.style.overflow = 'hidden';
    }

    function close() {
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
      document.body.style.overflow = '';
    }

    let currentIdx = 0;
    function show(idx) {
      currentIdx = idx;
      const item = images[idx];
      lbImg.style.opacity = '0';
      setTimeout(() => {
        lbImg.src = item.src;
        lbImg.alt = item.alt;
        lbImg.style.opacity = '1';
      }, 160);
      // Extract clean caption from alt text (strip URL-looking suffixes)
      const cap = item.alt.replace(/\s*[—-]\s*Contour Marine.*$/i, '').replace(/\s*—\s*South Florida.*$/i, '');
      lbCaption.textContent = cap;
      lbCounter.textContent = images.length > 1 ? (idx + 1) + ' / ' + images.length : '';
      lbPrev.style.visibility = idx === 0 ? 'hidden' : 'visible';
      lbNext.style.visibility = idx === images.length - 1 ? 'hidden' : 'visible';
    }

    // Wire up click handlers on card containers
    function wireCards() {
      collectImages();
      document.querySelectorAll(selectors.join(',')).forEach((card, i) => {
        const img = card.querySelector('img');
        if (!img || !img.src) return;
        // Find index in images array
        const idx = images.findIndex(im => im.src === img.src);
        if (idx === -1) return;
        // Make it look clickable
        card.style.cursor = 'pointer';
        // Add expand icon if not already there
        if (!card.querySelector('.sw-expand-icon')) {
          const icon = document.createElement('div');
          icon.className = 'sw-expand-icon';
          icon.innerHTML = '<i class="fas fa-expand-alt"></i>';
          icon.style.cssText = `
            position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
            background:rgba(7,27,46,0.28);opacity:0;transition:opacity 0.3s ease;
            pointer-events:none;border-radius:inherit;`;
          icon.querySelector('i').style.cssText = `
            color:rgba(255,255,255,0.88);font-size:1.5rem;
            filter:drop-shadow(0 2px 8px rgba(0,0,0,0.5));`;
          card.style.position = 'relative';
          card.appendChild(icon);
          card.addEventListener('mouseenter', () => icon.style.opacity = '1');
          card.addEventListener('mouseleave', () => icon.style.opacity = '0');
        }
        card.addEventListener('click', () => open(idx));
      });
    }

    wireCards();

    lbClose.addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    lbPrev.addEventListener('click', e => { e.stopPropagation(); if (currentIdx > 0) show(currentIdx - 1); });
    lbNext.addEventListener('click', e => { e.stopPropagation(); if (currentIdx < images.length - 1) show(currentIdx + 1); });

    document.addEventListener('keydown', e => {
      if (overlay.style.pointerEvents !== 'all') return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft' && currentIdx > 0) show(currentIdx - 1);
      if (e.key === 'ArrowRight' && currentIdx < images.length - 1) show(currentIdx + 1);
    });

    // Touch swipe
    let touchX = 0;
    overlay.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
    overlay.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) {
        if (dx < 0 && currentIdx < images.length - 1) show(currentIdx + 1);
        else if (dx > 0 && currentIdx > 0) show(currentIdx - 1);
      }
    });

  })();

});
