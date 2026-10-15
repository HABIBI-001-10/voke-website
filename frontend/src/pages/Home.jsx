import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import {
  METRICS,
  SERVICES,
  PROCESS_STEPS,
  TESTIMONIALS,
  PROJECTS,
} from '../data/content'
import './Home.css'

function ServiceCard({ service, index }) {
  return (
    <Reveal delay={index * 80}>
      <Link to={`/services#${service.id}`} className="service-card">
        <div className="service-card__icon">
          <Icon name={service.icon} size={22} />
        </div>
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__desc">{service.shortDescription}</p>
        <span className="service-card__link">
          Learn more <Icon name="arrow-right" size={14} />
        </span>
      </Link>
    </Reveal>
  )
}

function ProjectCard({ project }) {
  return (
    <Reveal>
      <div className="project-card" style={{ '--cover-bg': project.coverGradient }}>
        {project.isPlaceholder && (
          <span className="placeholder-badge project-card__badge">
            Placeholder — replace with real work
          </span>
        )}
        <div className="project-card__cover" aria-hidden="true" />
        <div className="project-card__body">
          <span className="tag">{project.serviceLabel}</span>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__client">
            {project.client} · {project.industry}
          </p>
        </div>
      </div>
    </Reveal>
  )
}

export default function Home() {
  return (
    <div className="home">
      {/* ─── Hero ─── */}
      <section className="hero" aria-label="Voke hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <Reveal>
              <p className="eyebrow">Advertising &amp; Digital Growth · Pan-India</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="hero__headline display">
                Your most ambitious<br />
                <em>growth begins here.</em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="hero__sub">
                Voke partners with ambitious businesses across India to build
                brands people remember — through advertising, digital marketing,
                strategic consultancy, and technology.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="hero__actions">
                <Link to="/contact" className="btn btn--primary">
                  Book a Free Consultation
                </Link>
                <Link to="/work" className="btn btn--outline">
                  Explore Our Work <Icon name="arrow-right" size={15} />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Decorative geometric treatment */}
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__geo hero__geo--1" />
            <div className="hero__geo hero__geo--2" />
            <div className="hero__geo hero__geo--3" />
            <div className="hero__marquee-track">
              <div className="hero__marquee-inner">
                {['Advertising', 'Digital Marketing', 'Consultancy', 'Development', 'Growth', 'Strategy', 'Branding', 'Advertising', 'Digital Marketing', 'Consultancy', 'Development', 'Growth', 'Strategy', 'Branding'].map((w, i) => (
                  <span key={i} className="hero__marquee-word">{w}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hero__scroll-indicator" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ─── Metrics ─── */}
      <section className="section section--alt metrics-section" aria-label="Company achievements">
        <div className="container">
          <div className="metrics-grid">
            {METRICS.map((m, i) => (
              <Reveal key={m.label} delay={i * 100}>
                <div className="metric">
                  <p className="stat-number">{m.value}</p>
                  <p className="stat-label">{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About intro ─── */}
      <section className="section about-intro" aria-labelledby="about-intro-heading">
        <div className="container">
          <div className="about-intro__grid">
            <Reveal>
              <div className="about-intro__left">
                <p className="eyebrow">Who We Are</p>
                <h2 id="about-intro-heading" className="about-intro__heading">
                  A growth partner<br />built for India.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="about-intro__right">
                <p>
                  Voke is a full-service advertising and digital growth company
                  working with businesses of every scale — from ambitious
                  startups to established brands — across India.
                </p>
                <p>
                  We combine strategic thinking with creative craft and
                  technical capability to deliver work that is distinctive,
                  effective, and built to last.
                </p>
                <Link to="/about" className="btn btn--outline" style={{ marginTop: 'var(--space-6)' }}>
                  About Voke <Icon name="arrow-right" size={15} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="section section--canvas-alt services-section" aria-labelledby="services-heading">
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>What We Do</p>
            <h2 id="services-heading" className="section-title">
              Four disciplines,<br />one focused team.
            </h2>
          </Reveal>
          <div className="grid-4" style={{ marginTop: 'var(--space-12)' }}>
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
          <Reveal>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
              <Link to="/services" className="btn btn--outline">
                All Services <Icon name="arrow-right" size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Selected Work ─── */}
      <section className="section work-section" aria-labelledby="work-heading">
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Selected Work</p>
            <h2 id="work-heading" className="section-title">
              The work speaks.
            </h2>
            <p className="section-subtitle">
              Below are placeholder case studies. Real campaign work and client
              results will be displayed here as they are approved for publication.
            </p>
          </Reveal>
          <div className="project-grid" style={{ marginTop: 'var(--space-12)' }}>
            {PROJECTS.slice(0, 3).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <Reveal>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
              <Link to="/work" className="btn btn--outline">
                View All Work <Icon name="arrow-right" size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="section section--alt process-section" aria-labelledby="process-heading">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow--light" style={{ marginBottom: 'var(--space-3)' }}>How We Work</p>
            <h2 id="process-heading" className="section-title" style={{ color: 'var(--color-canvas)' }}>
              From first conversation<br />to lasting results.
            </h2>
          </Reveal>
          <div className="process-steps">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 60}>
                <div className="process-step">
                  <span className="process-step__number">{step.number}</span>
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__desc">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="section testimonials-section" aria-labelledby="testimonials-heading">
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Client Voices</p>
            <h2 id="testimonials-heading" className="section-title">
              What our clients say.
            </h2>
            <p className="section-subtitle">
              The testimonials below are placeholders. Real client feedback will
              replace these once approved for publication.
            </p>
          </Reveal>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.id} delay={i * 80}>
                <div className="testimonial">
                  {t.isPlaceholder && (
                    <span className="placeholder-badge testimonial__badge">
                      Placeholder
                    </span>
                  )}
                  <Icon name="quote" size={28} className="testimonial__icon" />
                  <blockquote className="testimonial__quote">
                    {t.quote}
                  </blockquote>
                  <cite className="testimonial__cite">
                    <strong>{t.author}</strong>
                    <span>{t.title}</span>
                    <span>{t.company}</span>
                  </cite>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="section section--alt cta-banner" aria-labelledby="cta-heading">
        <div className="container">
          <Reveal>
            <div className="cta-banner__inner">
              <p className="eyebrow eyebrow--light">Ready to grow?</p>
              <h2 id="cta-heading" className="cta-banner__heading">
                Let's build something<br />
                <em>worth talking about.</em>
              </h2>
              <p className="cta-banner__sub">
                Book a free, no-obligation consultation. We'll listen, share
                our initial thinking, and outline a clear path to your goals.
              </p>
              <div className="cta-banner__actions">
                <Link to="/contact" className="btn btn--primary">
                  Book a Free Consultation
                </Link>
                <Link to="/services" className="btn btn--outline-light">
                  Explore Services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
