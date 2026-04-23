// ============================================================
// CONTOUR MARINE — Shared Layout (nav + footer + head)
// ============================================================

export function head(title: string, description: string = ''): string {
  return `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description || 'Contour Marine — South Florida\'s premier marine contractor. Expert seawalls, docks, decks, boat lifts & pilings. Serving Broward & Miami-Dade since 2001.'}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
  <link rel="stylesheet" href="/static/style.css">
  `
}

export function nav(activePage: string = ''): string {
  const links = [
    { href: '/seawalls.html',  label: 'Seawalls' },
    { href: '/docks.html',     label: 'Docks' },
    { href: '/decks.html',     label: 'Decks' },
    { href: '/boatlifts.html', label: 'Boat Lifts' },
    { href: '/pilings.html',   label: 'Pilings' },
    { href: '/about.html',     label: 'About Us' },
    { href: '/gallery.html',   label: 'Gallery' },
  ]

  const navItems = links.map(l =>
    `<a href="${l.href}" class="${activePage === l.href ? 'active' : ''}">${l.label}</a>`
  ).join('')

  return `
  <nav id="site-nav" role="navigation" aria-label="Main navigation">
    <div class="nav-inner">
      <a href="/index.html" class="nav-logo" aria-label="Contour Marine Home">
        <div class="nav-logo-text">
          <span class="nav-logo-name">CONTOUR MARINE</span>
          <span class="nav-logo-tagline">Marine Contractors · South Florida</span>
        </div>
      </a>
      <div class="nav-links" id="nav-links">
        ${navItems}
        <a href="/contact.html" class="nav-cta ${activePage === '/contact.html' ? 'active' : ''}">Get a Quote</a>
      </div>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <script>
    (function(){
      var btn = document.getElementById('nav-toggle');
      var links = document.getElementById('nav-links');
      if(btn && links){
        btn.addEventListener('click', function(){
          var open = links.classList.toggle('open');
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
      }
    })();
  </script>
  `
}

export function footer(): string {
  return `
  <footer id="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;">
            <div style="line-height:1.1;">
              <div style="font-family:'Playfair Display',Georgia,serif;font-size:1.1rem;font-weight:700;color:#fff;letter-spacing:0.01em;">CONTOUR MARINE</div>
              <div style="font-size:0.65rem;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:#c9a84c;">South Florida's Premier Marine Contractor</div>
            </div>
          </div>
          <p>Expert seawalls, docks, decks, boat lifts &amp; pilings — built for South Florida's coastal demands. Serving Broward &amp; Miami-Dade since 2001.</p>
          <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.5rem;">
            <span style="font-size:0.75rem;color:rgba(255,255,255,0.4);">✓ Licensed &amp; Insured</span>
            <span style="font-size:0.75rem;color:rgba(255,255,255,0.25);">·</span>
            <span style="font-size:0.75rem;color:rgba(255,255,255,0.4);">✓ Est. 2001</span>
            <span style="font-size:0.75rem;color:rgba(255,255,255,0.25);">·</span>
            <span style="font-size:0.75rem;color:rgba(255,255,255,0.4);">✓ Permit Handling</span>
          </div>
        </div>
        <div class="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="/seawalls.html">Seawalls</a></li>
            <li><a href="/docks.html">Dock Construction</a></li>
            <li><a href="/decks.html">Deck Construction</a></li>
            <li><a href="/boatlifts.html">Boat Lifts</a></li>
            <li><a href="/pilings.html">Marine Pilings</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="/about.html">About Us</a></li>
            <li><a href="/gallery.html">Gallery</a></li>
            <li><a href="/contact.html">Get a Quote</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Service Areas</h5>
          <p><strong style="color:rgba(255,255,255,0.7);">Broward County</strong><br>Fort Lauderdale · Hollywood · Pompano Beach · Hallandale · Dania Beach</p>
          <p style="margin-top:0.75rem;"><strong style="color:rgba(255,255,255,0.7);">Miami-Dade County</strong><br>Miami Beach · Coral Gables · Aventura · Coconut Grove · Key Biscayne</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Contour Marine. All rights reserved. South Florida Marine Contractor. Licensed &amp; Insured.</p>
        <a href="/contact.html">Request a Free Quote</a>
      </div>
    </div>
  </footer>
  `
}

export function page(title: string, description: string, activePage: string, content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  ${head(title, description)}
</head>
<body>
  ${nav(activePage)}
  <main id="main-content">
    ${content}
  </main>
  ${footer()}
</body>
</html>`
}
