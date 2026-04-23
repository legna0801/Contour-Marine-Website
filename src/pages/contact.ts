import { page } from '../layout'

export function contact(): string {
  return page(
    'Get a Quote | Contour Marine | South Florida',
    'Request a free marine construction quote from Contour Marine. Seawalls, docks, decks, boat lifts & pilings in Broward & Miami-Dade.',
    '/contact.html',
    `
    <!-- ===== PAGE HEADER ===== -->
    <section class="page-header">
      <div class="container">
        <span class="section-label">Get In Touch</span>
        <h1>Start Your<br><em>Waterfront Project</em></h1>
        <p class="lead">Whether you're ready to build or just exploring your options, we're here to help. Reach out and one of our marine construction experts will get back to you promptly.</p>
      </div>
    </section>

    <!-- ===== CONTACT SECTION ===== -->
    <section class="section">
      <div class="container">
        <div class="contact-wrap">

          <!-- Left: Info -->
          <div class="contact-info">
            <h2>How Can We Help?</h2>
            <p>Fill out the form and we'll get back to you within 24 hours to schedule your free site consultation. No pressure — just honest advice from South Florida's most trusted marine contractor.</p>

            <div class="contact-detail">
              <div class="contact-detail-icon"><i class="fas fa-map-marker-alt"></i></div>
              <div class="contact-detail-body">
                <strong>Office Location</strong>
                <p>South Florida — Serving Broward &amp; Miami-Dade</p>
              </div>
            </div>

            <div class="contact-detail">
              <div class="contact-detail-icon"><i class="fas fa-clock"></i></div>
              <div class="contact-detail-body">
                <strong>Business Hours</strong>
                <p>Mon – Fri: 8:00 AM – 5:00 PM<br>Sat: 8:00 AM – 2:00 PM<br>Sun: Closed</p>
              </div>
            </div>

            <div class="contact-detail">
              <div class="contact-detail-icon"><i class="fas fa-map"></i></div>
              <div class="contact-detail-body">
                <strong>Service Areas</strong>
                <p><strong>Broward County</strong><br>Fort Lauderdale · Hollywood · Pompano Beach · Hallandale Beach · Dania Beach</p>
                <p style="margin-top:0.5rem;"><strong>Miami-Dade County</strong><br>Miami Beach · Coral Gables · Aventura · Coconut Grove · Key Biscayne</p>
              </div>
            </div>

            <!-- Why contact us -->
            <div style="margin-top:2rem;padding:1.5rem;background:var(--off-white);border-radius:var(--radius-lg);border:1px solid var(--gray-200);">
              <h4 style="margin-bottom:1rem;color:var(--navy);">What to Expect</h4>
              <ul class="feature-list">
                <li>Response within 24 hours</li>
                <li>Free on-site consultation</li>
                <li>No-obligation detailed proposal</li>
                <li>Transparent, honest pricing</li>
                <li>Direct access to decision-makers</li>
              </ul>
            </div>
          </div>

          <!-- Right: Form -->
          <div>
            <div class="contact-form" id="contact-form-wrap">
              <h3 style="margin-bottom:0.25rem;font-family:'Inter',sans-serif;font-size:1.1rem;font-weight:700;color:var(--navy);">Request a Free Quote</h3>
              <p style="font-size:0.85rem;color:var(--text-light);margin-bottom:1.5rem;">Fill out the form below and we'll get back to you within 24 hours to schedule your free site consultation.</p>

              <form id="quote-form" novalidate>
                <div class="form-row">
                  <div class="form-group">
                    <label for="first-name">First Name *</label>
                    <input type="text" id="first-name" name="first_name" placeholder="John" required>
                  </div>
                  <div class="form-group">
                    <label for="last-name">Last Name *</label>
                    <input type="text" id="last-name" name="last_name" placeholder="Smith" required>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="email">Email Address *</label>
                    <input type="email" id="email" name="email" placeholder="john@example.com" required>
                  </div>
                  <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="(954) 555-0100">
                  </div>
                </div>

                <div class="form-group">
                  <label for="service">Service Needed *</label>
                  <select id="service" name="service" required>
                    <option value="">Select a service...</option>
                    <option value="seawall-new">New Seawall Construction</option>
                    <option value="seawall-repair">Seawall Repair / Cap Replacement</option>
                    <option value="dock">Dock Construction</option>
                    <option value="deck">Deck Construction</option>
                    <option value="boat-lift">Boat Lift Installation</option>
                    <option value="pilings">Marine Pilings</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="location">Property Location</label>
                  <input type="text" id="location" name="location" placeholder="City or neighborhood (e.g., Fort Lauderdale, Aventura)">
                </div>

                <div class="form-group">
                  <label for="message">Project Details</label>
                  <textarea id="message" name="message" placeholder="Tell us about your project — what you're looking to build, repair, or upgrade. The more detail you share, the better we can prepare for your consultation."></textarea>
                </div>

                <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">
                  <i class="fas fa-paper-plane"></i> Send Request
                </button>

                <p style="font-size:0.75rem;color:var(--text-light);text-align:center;margin-top:0.75rem;">We respect your privacy. Your information will never be shared.</p>
              </form>

              <!-- Success message (hidden by default) -->
              <div class="form-success" id="form-success">
                <div class="form-success-icon">✅</div>
                <h3>Request Sent!</h3>
                <p>Thank you — a member of the Contour Marine team will reach out within 24 hours to schedule your free site visit.</p>
                <a href="/index.html" class="btn btn-outline-teal" style="margin-top:1.5rem;">Back to Home</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ===== WHY US STRIP ===== -->
    <section class="section bg-off-white">
      <div class="container">
        <div style="text-align:center;margin-bottom:2.5rem;">
          <span class="section-label">Why Contour Marine</span>
          <h2>South Florida's Most Trusted Marine Contractor</h2>
        </div>
        <div class="why-grid">
          <div class="why-card">
            <h4>Free Site Consultation</h4>
            <p>We come to you — no cost, no commitment. We assess your waterfront and present honest options.</p>
          </div>
          <div class="why-card">
            <h4>Transparent Pricing</h4>
            <p>No hidden fees, no surprise charges. You'll know exactly what you're getting and what it costs.</p>
          </div>
          <div class="why-card">
            <h4>Licensed &amp; Insured</h4>
            <p>Fully licensed and insured — giving you peace of mind from day one through project completion.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-strip">
      <div class="container">
        <span class="section-label section-label-gold">Est. 2001</span>
        <h2>Ready to Transform Your Waterfront?</h2>
        <p>Join hundreds of South Florida homeowners who trust Contour Marine for their waterfront construction needs.</p>
        <div class="btn-group">
          <a href="/gallery.html" class="btn btn-gold">View Our Work</a>
          <a href="/about.html"   class="btn btn-outline-white">Learn About Us</a>
        </div>
      </div>
    </section>

    <script>
    (function(){
      var form    = document.getElementById('quote-form');
      var success = document.getElementById('form-success');
      if(!form) return;
      form.addEventListener('submit', function(e){
        e.preventDefault();
        // Basic validation
        var ok = true;
        form.querySelectorAll('[required]').forEach(function(el){
          if(!el.value.trim()){
            el.style.borderColor = '#e53e3e';
            ok = false;
          } else {
            el.style.borderColor = '';
          }
        });
        if(!ok) return;
        // Show success
        form.style.display = 'none';
        if(success) success.style.display = 'block';
      });
    })();
    </script>
    `
  )
}
