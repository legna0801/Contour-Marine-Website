import { page } from '../layout'

export function about(): string {
  return page(
    'About Us | Contour Marine | South Florida',
    'Contour Marine — South Florida\'s premier marine contractor since 2001. Family-owned, fully licensed & insured. Serving Broward & Miami-Dade.',
    '/about.html',
    `
    <!-- ===== PAGE HEADER ===== -->
    <section class="page-header">
      <div class="container">
        <span class="section-label">Est. 2001 · South Florida's Premier Marine Contractor</span>
        <h1>Built on <em>Trust.</em><br>Driven by Craftsmanship.</h1>
        <p class="lead">For over two decades, Contour Marine has been the waterfront contractor South Florida turns to — for seawalls, docks, decks, boat lifts, and marine pilings built to last a lifetime.</p>
        <div class="credential-badges">
          <span class="badge">Fully Licensed &amp; Insured</span>
          <span class="badge">Broward &amp; Miami-Dade</span>
          <span class="badge">Est. 2001 — 25+ Years</span>
          <span class="badge">Marine-Grade Materials</span>
          <span class="badge">Permit Handling Included</span>
        </div>
      </div>
    </section>

    <!-- ===== STATS BAR ===== -->
    <div class="stats-bar">
      <div class="stats-inner">
        <div class="stat-item">
          <strong>25+</strong>
          <span>Years in Business</span>
        </div>
        <div class="stat-item">
          <strong>500+</strong>
          <span>Projects Completed</span>
        </div>
        <div class="stat-item">
          <strong>2</strong>
          <span>Counties Served</span>
        </div>
        <div class="stat-item">
          <strong>100%</strong>
          <span>Licensed &amp; Insured</span>
        </div>
      </div>
    </div>

    <!-- ===== OUR STORY ===== -->
    <section class="section">
      <div class="container">
        <div class="split">
          <div class="split-body">
            <span class="section-label">Our Story</span>
            <h2>Built on Water, Built on Trust</h2>
            <p>Contour Marine was founded in 2001 with one mission: to build the finest marine structures in South Florida — on time, on budget, and built to outlast the elements.</p>
            <p>What started as a small, dedicated crew with big ambitions has grown into one of South Florida's most respected marine construction companies. Over more than two decades, we've driven thousands of pilings, built hundreds of custom docks, erected seawalls that have weathered major hurricanes, and installed boat lifts for vessels from center consoles to luxury sportfishers.</p>
            <p>We serve South Florida's most prestigious waterfront addresses — from the Intracoastal communities of Fort Lauderdale and Hollywood to the luxury canals of Miami Beach and Coral Gables. Every project receives the same unwavering commitment to craftsmanship and attention to detail — regardless of size.</p>
            <ul class="feature-list">
              <li>Fully licensed &amp; insured marine contractor — Florida certified</li>
              <li>Owner-operated with hands-on project management</li>
              <li>Company-owned marine heavy equipment — barge, crane &amp; more</li>
              <li>Full permit acquisition — Army Corps, FDEP, local agencies</li>
              <li>Residential, luxury estate &amp; commercial marine projects</li>
              <li>Deep roots in South Florida's waterfront communities</li>
            </ul>
            <a href="/contact.html" class="btn btn-primary" style="margin-top:1rem;">Start Your Project</a>
          </div>
          <div class="split-img">
            <img
              src="https://sspark.genspark.ai/cfimages?u1=5tvYPPGd7fdOALbLzZ8TojGAt8Okdy1CV%2BJJ2ve9QQGAUmPYkrgcy4UasCWT2J0VqdlEgBHwO1FRYkRcOOaCm7SE%2FdopSRlwCMtrU4BYCxdNbFJgNfODSJjmBAAvwIcLvmg8GydL8MKQ9evbQfM%3D&u2=8mWm9jTCWoehdglu&width=1024"
              alt="Completed seawall and dock — South Florida by Contour Marine"
              loading="lazy"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- ===== THE CONTOUR MARINE DIFFERENCE ===== -->
    <section class="section bg-off-white">
      <div class="container">
        <div style="text-align:center;margin-bottom:3rem;">
          <span class="section-label">Why Choose Us</span>
          <h2>The Contour Marine <em>Difference</em></h2>
          <p style="max-width:580px;margin:0.75rem auto 0;color:var(--text-light);">We don't just build structures — we build relationships. Every project is a reflection of our values, our expertise, and our commitment to your waterfront vision.</p>
        </div>
        <div style="max-width:680px;margin:0 auto 3rem;background:var(--white);border-radius:var(--radius-lg);padding:2rem;box-shadow:var(--shadow);border:1px solid var(--gray-200);">
          <ul class="feature-list">
            <li>Family-owned and operated since 2001 — you work directly with decision-makers</li>
            <li>Our crew has an average of 15+ years of marine construction experience</li>
            <li>We use only marine-grade materials rated for South Florida's harsh coastal environment</li>
            <li>Full-service — from design and permits to construction and final walkthrough</li>
            <li>Transparent pricing — no hidden costs, no surprises, ever</li>
          </ul>
        </div>
        <div class="why-grid">
          <div class="why-card">
            <h4>Expert Seasoned Crew</h4>
            <p>Seasoned marine construction professionals who've been working South Florida's waterways for decades. Not hired labor — our team.</p>
          </div>
          <div class="why-card">
            <h4>We Handle Permits</h4>
            <p>Army Corps of Engineers, FDEP, county and local permits — we navigate every regulatory requirement so you don't have to.</p>
          </div>
          <div class="why-card">
            <h4>Quality Guaranteed</h4>
            <p>Every structure exceeds code minimums. We use materials, methods, and quality checks that deliver decades of performance.</p>
          </div>
          <div class="why-card">
            <h4>Heavy Marine Equipment</h4>
            <p>We own our barge, crane, and marine equipment fleet — no third-party delays, no subcontractor markups, faster project delivery.</p>
          </div>
          <div class="why-card">
            <h4>Local Knowledge</h4>
            <p>We know South Florida's waterways, soil conditions, tidal ranges, and permit requirements better than anyone.</p>
          </div>
          <div class="why-card">
            <h4>Environmental Stewardship</h4>
            <p>All projects fully comply with FDEP, Army Corps, and local environmental regulations — protecting what we build beside.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CORE VALUES ===== -->
    <section class="section bg-navy">
      <div class="container">
        <div style="text-align:center;margin-bottom:3rem;">
          <span class="section-label section-label-gold">Our Foundation</span>
          <h2 style="color:var(--white);">What We Stand For</h2>
        </div>
        <div class="values-grid">
          <div class="value-card">
            <h4>Uncompromising Craftsmanship</h4>
            <p>From the first piling driven to the final coat of sealant — nothing leaves our hands unless it meets our highest standard. We take immense pride in the quality of every structure we build.</p>
          </div>
          <div class="value-card">
            <h4>Honest Relationships</h4>
            <p>We tell you the truth — about timelines, costs, and what your project actually needs. No upsells, no surprises. Just straight talk from people who genuinely care about your investment.</p>
          </div>
          <div class="value-card">
            <h4>Built to Last</h4>
            <p>South Florida's coastal environment is unforgiving. We engineer every structure to exceed code requirements — materials, methods, and details built to stand up to decades of salt, sun, and storms.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== OUR EXPERT CREW ===== -->
    <section class="section">
      <div class="container">
        <div class="split">
          <div class="split-body">
            <span class="section-label">Our Expert Crew</span>
            <h2>Marine Construction Specialists</h2>
            <p>Every member of our crew is trained, experienced, and committed to doing the job right. We invest in our people because they are the ones who build and protect our reputation every day.</p>
            <p>From our project managers who coordinate every detail to our field crews who drive pilings and pour concrete — everyone at Contour Marine is dedicated to delivering a result you'll be proud of for decades.</p>
            <h4 style="color:var(--teal);margin-top:1.5rem;margin-bottom:0.5rem;">In the Field — Quality &amp; Safety First</h4>
            <p>Quality and safety are non-negotiable on every Contour Marine job site. Our field teams follow strict protocols and use only marine-grade equipment to ensure every structure is built right — safely and on schedule.</p>
            <a href="/contact.html" class="btn btn-primary" style="margin-top:1rem;">Work With Our Team</a>
          </div>
          <div class="split-img">
            <img
              src="https://sspark.genspark.ai/cfimages?u1=u6T5u4z0kw%2BwYU%2BkFCKjwv0DEoGUBxN5CTWoWp1UNUrGLPySnV3cJ5aL5h0Fg4IfAOyW8Q6H7CynWKzo%2FrX%2BrNcKvmUr3SHmoGQ%2BXnYICkvxZnH8n%2BcB8eRuXWPFJRtbCiMzpf0qzwGambu6iWtIUwwXeg%3D%3D&u2=08rUmxaV6OMmY1Dk&width=1024"
              alt="Contour Marine crew working on a seawall installation — South Florida"
              loading="lazy"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SERVICE AREAS ===== -->
    <section class="section bg-off-white">
      <div class="container">
        <div style="text-align:center;margin-bottom:2rem;">
          <span class="section-label">Where We Work</span>
          <h2>One Company. Every Marine Service.</h2>
          <p style="max-width:580px;margin:0.75rem auto 0;color:var(--text-light);">From first consultation to final walkthrough — Contour Marine handles everything. Your complete marine construction solution in Broward and Miami-Dade.</p>
        </div>

        <!-- Services list -->
        <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:0.75rem;margin-bottom:2.5rem;">
          <span class="badge badge-teal"><i class="fas fa-water"></i> Seawall Construction</span>
          <span class="badge badge-teal"><i class="fas fa-ship"></i> Dock Construction</span>
          <span class="badge badge-teal"><i class="fas fa-home"></i> Deck Construction</span>
          <span class="badge badge-teal"><i class="fas fa-anchor"></i> Boat Lift Installation</span>
          <span class="badge badge-teal"><i class="fas fa-columns"></i> Marine Pilings</span>
        </div>

        <div class="service-areas-grid">
          <div class="service-area-card">
            <h4>Broward County</h4>
            <p>Fort Lauderdale · Hollywood · Pompano Beach · Hallandale Beach · Dania Beach · Weston &amp; more</p>
          </div>
          <div class="service-area-card">
            <h4>Miami-Dade County</h4>
            <p>Miami Beach · Coral Gables · Aventura · Coconut Grove · Key Biscayne · Doral &amp; more</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-strip">
      <div class="container">
        <span class="section-label section-label-gold">Ready to Build?</span>
        <h2>Let's Shape Your Waterfront Together</h2>
        <p>Get in touch for a free site consultation. We'll assess your property, listen to your vision, and provide a detailed no-obligation proposal — no pressure, just honest expertise.</p>
        <div class="btn-group">
          <a href="/contact.html" class="btn btn-gold">Get a Free Quote</a>
          <a href="/gallery.html" class="btn btn-outline-white">View Our Work</a>
        </div>
      </div>
    </section>
    `
  )
}
