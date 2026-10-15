import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import { PROJECTS, PROJECT_FILTERS } from '../data/content'
import './Work.css'

function ProjectCard({ project }) {
  return (
    <Reveal>
      <article
        className="work-card"
        style={{ '--cover-bg': project.coverGradient }}
        aria-label={project.title}
      >
        {project.isPlaceholder && (
          <span className="placeholder-badge work-card__badge">
            Placeholder — replace with real case study
          </span>
        )}

        {/* Cover */}
        <div className="work-card__cover" aria-hidden="true" />

        {/* Body */}
        <div className="work-card__body">
          <div className="work-card__meta">
            <span className="tag">{project.serviceLabel}</span>
            <span className="work-card__year">{project.year}</span>
          </div>
          <h2 className="work-card__title">{project.title}</h2>
          <p className="work-card__client">
            {project.client} · {project.industry}
          </p>
        </div>

        {/* Detail drawer */}
        <div className="work-card__detail">
          <dl className="work-card__dl">
            <div>
              <dt>Challenge</dt>
              <dd>{project.challenge}</dd>
            </div>
            <div>
              <dt>Insight</dt>
              <dd>{project.insight}</dd>
            </div>
            <div>
              <dt>Services</dt>
              <dd>{project.services.join(', ')}</dd>
            </div>
          </dl>
        </div>
      </article>
    </Reveal>
  )
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.service === activeFilter)

  return (
    <div className="work-page">
      {/* Hero */}
      <section className="work-hero section--alt" aria-label="Work hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow--light">Our Work</p>
            <h1 className="work-hero__heading">
              Work that moves<br />
              <em>people and business.</em>
            </h1>
            <p className="work-hero__sub">
              Below are placeholder case studies. Real campaign work, brand
              projects, and client results will appear here as they are approved
              for publication. Do not present placeholder content as real Voke
              work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section work-grid-section" aria-labelledby="work-grid-heading">
        <div className="container">
          <div className="work-filter-row">
            <h2 id="work-grid-heading" className="sr-only">Case Studies</h2>
            <div className="filter-tabs" role="group" aria-label="Filter by service">
              {PROJECT_FILTERS.map((f) => (
                <button
                  key={f.value}
                  className={`filter-tab ${activeFilter === f.value ? 'active' : ''}`}
                  onClick={() => setActiveFilter(f.value)}
                  aria-pressed={activeFilter === f.value}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <p className="work-count">
              Showing {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="work-empty">
              <p>No projects match this filter yet.</p>
            </div>
          ) : (
            <div className="work-grid">
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}

          {/* Add your work CTA */}
          <Reveal>
            <div className="work-placeholder-notice">
              <div className="placeholder-badge" style={{ fontSize: '0.8rem', padding: '0.3rem 0.9rem' }}>
                Content note
              </div>
              <p>
                All case studies above are labeled placeholders. Replace each
                one with a real client project, approved for publication, before
                the site goes live. Fill in client, industry, challenge, insight,
                execution, and verified outcomes for each case study.
              </p>
              <Link to="/contact" className="btn btn--primary">
                Work with Voke
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
