import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import { SERVICES } from '../data/content'
import './Services.css'

function ServiceSection({ service }) {
  return (
    <section
      id={service.id}
      className="service-section"
      aria-labelledby={`${service.id}-heading`}
    >
      <div className="container">
        <div className="service-section__grid">
          <Reveal>
            <div className="service-section__left">
              <div className="service-section__icon">
                <Icon name={service.icon} size={28} />
              </div>
              <p className="eyebrow">{service.title}</p>
              <h2 id={`${service.id}-heading`} className="service-section__tagline">
                {service.tagline}
              </h2>
              <p className="service-section__desc">{service.fullDescription}</p>
              <Link to="/contact" className="btn btn--primary">
                Start with a consultation
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="service-section__right">
              <div className="service-section__highlights">
                <h3 className="service-section__sub">What's included</h3>
                <ul>
                  {service.highlights.map((h) => (
                    <li key={h} className="service-section__highlight">
                      <Icon name="check" size={16} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-section__meta">
                <div className="service-section__who">
                  <h3 className="service-section__sub">Who it helps</h3>
                  <p>{service.whoItHelps}</p>
                </div>
                <div className="service-section__begin">
                  <h3 className="service-section__sub">How to begin</h3>
                  <p>{service.howToBegin}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  // Scroll to hash on load (for direct links like /services#advertising)
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
      }
    }
  }, [])

  return (
    <div className="services-page">
      {/* Page hero */}
      <section className="services-hero section--alt" aria-label="Services hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow--light">Our Services</p>
            <h1 className="services-hero__heading">
              Four disciplines.<br />
              <em>One focused team.</em>
            </h1>
            <p className="services-hero__sub">
              We offer advertising, digital marketing, business consultancy, and
              software development — each grounded in strategy and shaped for
              measurable results.
            </p>
          </Reveal>

          {/* Service nav pills */}
          <Reveal delay={100}>
            <nav className="services-nav" aria-label="Jump to service">
              {SERVICES.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="services-nav__pill">
                  <Icon name={s.icon} size={16} />
                  {s.title}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {/* Service sections */}
      {SERVICES.map((service, i) => (
        <div
          key={service.id}
          className={i % 2 === 1 ? 'services-alt-bg' : ''}
        >
          <ServiceSection service={service} />
        </div>
      ))}

      {/* Final CTA */}
      <section className="section section--alt" aria-labelledby="services-cta-heading">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <p className="eyebrow eyebrow--light">Ready to get started?</p>
            <h2
              id="services-cta-heading"
              style={{ color: 'var(--color-canvas)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: 'var(--space-3)', marginBottom: 'var(--space-5)' }}
            >
              Not sure which service fits?<br />Let's talk it through.
            </h2>
            <p style={{ color: 'rgba(245,244,240,.5)', maxWidth: '480px', margin: '0 auto var(--space-8)', lineHeight: 1.7 }}>
              A consultation is the right first step. We'll listen to your
              goals and recommend the clearest path forward.
            </p>
            <Link to="/contact" className="btn btn--primary">
              Book a Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
