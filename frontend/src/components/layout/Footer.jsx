import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import { SITE_CONFIG } from '../../data/content'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="Voke Home">
              Voke
            </Link>
            <p className="footer__tagline">
              Advertising &amp; Digital Growth
            </p>
            <p className="footer__description">
              Helping ambitious businesses grow across India through advertising,
              digital marketing, consultancy, and software development.
            </p>
            <div className="footer__social">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voke on Instagram"
                className="footer__social-link"
              >
                <Icon name="instagram" size={18} />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voke on LinkedIn"
                className="footer__social-link"
              >
                <Icon name="linkedin" size={18} />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voke on X / Twitter"
                className="footer__social-link"
              >
                <Icon name="twitter" size={18} />
              </a>
            </div>
          </div>

          <div className="footer__nav-group">
            <h3 className="footer__nav-title">Services</h3>
            <nav aria-label="Services navigation">
              <Link to="/services#advertising" className="footer__nav-link">Advertising</Link>
              <Link to="/services#digital_marketing" className="footer__nav-link">Digital Marketing</Link>
              <Link to="/services#consultancy" className="footer__nav-link">Business Consultancy</Link>
              <Link to="/services#web_dev" className="footer__nav-link">Website &amp; Software Dev</Link>
            </nav>
          </div>

          <div className="footer__nav-group">
            <h3 className="footer__nav-title">Company</h3>
            <nav aria-label="Company navigation">
              <Link to="/about" className="footer__nav-link">About Voke</Link>
              <Link to="/work" className="footer__nav-link">Our Work</Link>
              <Link to="/contact" className="footer__nav-link">Contact</Link>
              <Link to="/privacy" className="footer__nav-link">Privacy Policy</Link>
              <Link to="/terms" className="footer__nav-link">Terms of Use</Link>
            </nav>
          </div>

          <div className="footer__nav-group">
            <h3 className="footer__nav-title">Get in Touch</h3>
            <div className="footer__contact">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="footer__contact-link"
              >
                <Icon name="mail" size={15} />
                {SITE_CONFIG.email}
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="footer__contact-link"
              >
                <Icon name="phone" size={15} />
                {SITE_CONFIG.phone}
              </a>
              <span className="footer__contact-link">
                <Icon name="map-pin" size={15} />
                {SITE_CONFIG.address}
              </span>
            </div>
            <Link to="/contact" className="btn btn--primary footer__cta">
              Free Consultation
            </Link>
          </div>
        </div>

        <hr className="divider" />

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {year} Voke. All rights reserved.
          </p>
          <p className="footer__serving">Serving businesses across India</p>
        </div>
      </div>
    </footer>
  )
}
