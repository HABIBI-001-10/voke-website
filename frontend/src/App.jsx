import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

/**
 * Per-route page title and meta description.
 * Keeps SEO metadata tightly coupled to routes.
 */
const ROUTE_META = {
  '/': {
    title: 'Voke — Advertising & Digital Growth',
    description:
      'Voke helps ambitious businesses grow through advertising, digital marketing, business consultancy, and website development.',
  },
  '/services': {
    title: 'Services — Advertising, Digital Marketing & More | Voke',
    description:
      'Advertising, digital marketing, business consultancy, and website & software development. Full-service growth partner for ambitious businesses.',
  },
  '/work': {
    title: 'Our Work — Case Studies & Portfolio | Voke',
    description:
      'Selected campaigns, digital projects, and brand work from Voke — an advertising and digital growth company.',
  },
  '/about': {
    title: 'About Voke — Our Mission, Team & Story',
    description:
      'Learn about Voke: our mission, values, team, and the story behind our full-service advertising and growth company.',
  },
  '/contact': {
    title: 'Contact — Book a Consultation | Voke',
    description:
      'Get in touch with Voke. Book a consultation or send us a message about your advertising, digital marketing, or development project.',
  },
  '/privacy': {
    title: 'Privacy Policy | Voke',
    description: 'Privacy Policy for Voke.',
  },
  '/terms': {
    title: 'Terms of Use | Voke',
    description: 'Terms of Use for Voke.',
  },
}

function MetaUpdater() {
  const location = useLocation()

  useEffect(() => {
    const meta = ROUTE_META[location.pathname] || ROUTE_META['/']
    document.title = meta.title

    const descEl = document.querySelector('meta[name="description"]')
    if (descEl) descEl.setAttribute('content', meta.description)

    // Scroll to top on navigation (unless hash is present)
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [location])

  return null
}

export default function App() {
  return (
    <>
      <MetaUpdater />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/work"
          element={
            <Layout>
              <Work />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/privacy"
          element={
            <Layout>
              <Privacy />
            </Layout>
          }
        />
        <Route
          path="/terms"
          element={
            <Layout>
              <Terms />
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
