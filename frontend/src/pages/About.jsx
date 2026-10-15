import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import { METRICS } from '../data/content'
import './About.css'

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero section--alt" aria-label="About hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow--light">About Voke</p>
            <h1 className="about-hero__heading">
              We exist to make<br />
              <em>ambitious businesses grow.</em>
            </h1>
            <p className="about-hero__sub">
              Voke is a full-service advertising and digital growth company
              working with businesses of every scale across India.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section about-mission" aria-labelledby="mission-heading">
        <div className="container">
          <div className="about-two-col">
            <Reveal>
              <div>
                <p className="eyebrow">Our Mission</p>
                <h2 id="mission-heading" className="about-section-heading">
                  Strategy. Creativity.<br />Results.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="about-body">
                <p>
                  We believe that great advertising and smart digital strategy
                  are among the most powerful forces available to a growing
                  business. Our mission is to make both accessible to ambitious
                  companies across India — delivered with craft, rigour, and a
                  genuine partnership mentality.
                </p>
                <p>
                  We combine strategic thinking with creative excellence and
                  technical capability. The result is work that is distinctive,
                  effective, and built to last.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section section--canvas-alt about-metrics" aria-label="Achievements">
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              By the numbers
            </p>
          </Reveal>
          <div className="about-metrics-grid">
            {METRICS.map((m, i) => (
              <Reveal key={m.label} delay={i * 80}>
                <div className="about-metric">
                  <p className="stat-number">{m.value}</p>
                  <p className="stat-label">{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values" aria-labelledby="values-heading">
        <div className="container">
          <Reveal>
            <p className="eyebrow">What We Stand For</p>
            <h2 id="values-heading" className="about-section-heading">Our values.</h2>
          </Reveal>
          <div className="values-grid">
            {[
              {
                title: 'Honesty first',
                desc: 'We tell clients what we genuinely believe, not what they want to hear. Honest counsel builds lasting relationships.',
              },
              {
                title: 'Work that works',
                desc: 'Every project is held against a clear measure: does it help the business grow? Beautiful work that fails the brief is not good work.',
              },
              {
                title: 'Craft in everything',
                desc: 'We sweat the details — in strategy, copy, design, and code — because quality at every level is what distinguishes great from good.',
              },
              {
                title: 'Long-term thinking',
                desc: 'We optimise for lasting growth, not short-term metrics. We want our clients to be thriving partners for years, not quarters.',
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="value-card">
                  <h3 className="value-card__title">{v.title}</h3>
                  <p className="value-card__desc">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Founder — editable placeholder area */}
      <section className="section section--canvas-alt about-team" aria-labelledby="team-heading">
        <div className="container">
          <Reveal>
            <p className="eyebrow">The Team</p>
            <h2 id="team-heading" className="about-section-heading">The people behind the work.</h2>
          </Reveal>

          {/* Founder placeholder */}
          <Reveal delay={100}>
            <div className="founder-card">
              <div className="founder-card__avatar" aria-hidden="true">
                <span>[ Photo ]</span>
              </div>
              <div className="founder-card__body">
                <span className="placeholder-badge">Placeholder — replace with real founder details</span>
                <h3 className="founder-card__name">[Founder Name — Replace]</h3>
                <p className="founder-card__role">[Title — Replace, e.g. Founder &amp; CEO]</p>
                <p className="founder-card__bio">
                  [Replace with a genuine 2–3 sentence biography. Describe the founder's background,
                  what drew them to advertising and growth, and why Voke exists. Do not publish
                  this placeholder.]
                </p>
              </div>
            </div>
          </Reveal>

          {/* Team placeholder grid */}
          <Reveal delay={150}>
            <div className="team-grid">
              {[1, 2, 3].map((n) => (
                <div key={n} className="team-member">
                  <div className="team-member__avatar" aria-hidden="true">[ Photo ]</div>
                  <span className="placeholder-badge" style={{ fontSize: '0.7rem' }}>Placeholder</span>
                  <p className="team-member__name">[Team Member Name — Replace]</p>
                  <p className="team-member__role">[Role — Replace]</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="team-placeholder-note">
              <strong>Content note for editors:</strong> Replace all team member placeholders with
              real names, roles, photos, and approved biographies before publishing.
            </div>
          </Reveal>
        </div>
      </section>

      {/* Company story — editable placeholder */}
      <section className="section about-story" aria-labelledby="story-heading">
        <div className="container">
          <div className="about-two-col">
            <Reveal>
              <div>
                <p className="eyebrow">Our Story</p>
                <h2 id="story-heading" className="about-section-heading">
                  Where we came from.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="about-body">
                <span className="placeholder-badge" style={{ marginBottom: 'var(--space-4)', display: 'inline-block' }}>
                  Placeholder — replace with real company story
                </span>
                <p>
                  [Replace this paragraph with the real story of how Voke was founded — when it
                  started, what the founding insight was, and how the company has evolved. 2–3
                  paragraphs work well here.]
                </p>
                <p>
                  [Add a second paragraph covering the company's growth, key moments, or
                  the philosophy that has shaped the culture and approach.]
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Office / Location placeholder */}
      <section className="section section--canvas-alt about-office" aria-labelledby="office-heading">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Find Us</p>
            <h2 id="office-heading" className="about-section-heading">Where we work from.</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="office-card">
              <span className="placeholder-badge">Placeholder — replace with real office details</span>
              <p className="office-card__address">
                [Street Address — Replace]<br />
                [City, State, PIN — Replace]<br />
                India
              </p>
              <p className="office-card__note">
                Replace the address above with the real office location. Add a
                Google Maps embed or link if appropriate.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--alt" aria-labelledby="about-cta-heading">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <p className="eyebrow eyebrow--light">Work with us</p>
            <h2
              id="about-cta-heading"
              style={{
                color: 'var(--color-canvas)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                marginTop: 'var(--space-3)',
                marginBottom: 'var(--space-5)',
              }}
            >
              Let's grow something great together.
            </h2>
            <Link to="/contact" className="btn btn--primary">
              Book a Free Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
