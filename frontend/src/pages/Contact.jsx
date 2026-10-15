import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import { api } from '../api/client'
import { SITE_CONFIG, SERVICE_OPTIONS } from '../data/content'
import './Contact.css'

const BUDGET_OPTIONS = [
  { value: '', label: 'Select a range (optional)' },
  { value: 'under_50k', label: 'Under ₹50,000' },
  { value: '50k_2l', label: '₹50,000 – ₹2,00,000' },
  { value: '2l_5l', label: '₹2,00,000 – ₹5,00,000' },
  { value: 'above_5l', label: 'Above ₹5,00,000' },
  { value: 'prefer_not', label: 'Prefer not to say' },
]

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  message: '',
  privacy_consent: false,
}

function validate(fields) {
  const errors = {}
  if (!fields.name.trim() || fields.name.trim().length < 2)
    errors.name = 'Please enter your name (at least 2 characters).'
  if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = 'Please enter a valid business email address.'
  if (!fields.phone.trim() || !/^\+?[0-9\s\-()]{7,20}$/.test(fields.phone))
    errors.phone = 'Please enter a valid phone number.'
  if (!fields.company.trim())
    errors.company = 'Please enter your company name.'
  if (!fields.service)
    errors.service = 'Please select a service of interest.'
  if (!fields.message.trim() || fields.message.trim().length < 10)
    errors.message = 'Please write a brief message (at least 10 characters).'
  if (!fields.privacy_consent)
    errors.privacy_consent = 'You must agree to the privacy policy to submit.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [serverMessage, setServerMessage] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => { const next = { ...prev }; delete next[name]; return next })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate(form)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      // Focus first error field
      const firstField = e.target.querySelector('[aria-invalid="true"]')
      firstField?.focus()
      return
    }

    setSubmitStatus('loading')
    setServerMessage('')

    try {
      const data = await api.contact.submit(form)
      setSubmitStatus('success')
      setServerMessage(data.message)
      setForm(INITIAL_FORM)
      setErrors({})
    } catch (err) {
      setSubmitStatus('error')
      if (err.data?.errors) {
        // Map server validation errors back to fields
        const serverErrors = {}
        Object.entries(err.data.errors).forEach(([key, msgs]) => {
          serverErrors[key] = Array.isArray(msgs) ? msgs[0] : msgs
        })
        setErrors(serverErrors)
        setServerMessage('Please correct the errors above and try again.')
      } else {
        setServerMessage(
          err.message ||
            'Something went wrong. Please try again or contact us directly.'
        )
      }
    }
  }

  const fieldProps = (name) => ({
    id: name,
    name,
    value: form[name],
    onChange: handleChange,
    'aria-invalid': !!errors[name],
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    className: `form-input${errors[name] ? ' error' : ''}`,
  })

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero section--alt" aria-label="Contact hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow--light">Get in Touch</p>
            <h1 className="contact-hero__heading">
              Tell us about<br />
              <em>your goals.</em>
            </h1>
            <p className="contact-hero__sub">
              Book a free consultation or send us a message. We'll respond
              within 1–2 business days.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section contact-section" aria-labelledby="contact-form-heading">
        <div className="container">
          <div className="contact-grid">
            {/* Left — info */}
            <aside className="contact-info">
              <Reveal>
                <h2 id="contact-form-heading" className="contact-info__heading">
                  Contact information
                </h2>

                <div className="contact-info__items">
                  <a href={`mailto:${SITE_CONFIG.email}`} className="contact-info__item">
                    <Icon name="mail" size={18} />
                    <div>
                      <p className="contact-info__label">Email</p>
                      <p className="contact-info__value">{SITE_CONFIG.email}</p>
                    </div>
                  </a>

                  <a href={`tel:${SITE_CONFIG.phone}`} className="contact-info__item">
                    <Icon name="phone" size={18} />
                    <div>
                      <p className="contact-info__label">Phone</p>
                      <p className="contact-info__value">{SITE_CONFIG.phone}</p>
                    </div>
                  </a>

                  <div className="contact-info__item">
                    <Icon name="map-pin" size={18} />
                    <div>
                      <p className="contact-info__label">Address</p>
                      <p className="contact-info__value">{SITE_CONFIG.address}</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info__whatsapp">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent('Hi Voke! I would like to know more about your services.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary contact-info__wa-btn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="contact-info__social">
                  {Object.entries(SITE_CONFIG.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Voke on ${platform}`}
                      className="contact-info__social-link"
                    >
                      <Icon name={platform} size={16} />
                    </a>
                  ))}
                </div>
              </Reveal>
            </aside>

            {/* Right — form */}
            <div className="contact-form-wrap">
              <Reveal delay={80}>
                {submitStatus === 'success' ? (
                  <div className="contact-success">
                    <div className="contact-success__icon" aria-hidden="true">✓</div>
                    <h2 className="contact-success__heading">Message received.</h2>
                    <p className="contact-success__msg">{serverMessage}</p>
                    <button
                      className="btn btn--outline"
                      onClick={() => {
                        setSubmitStatus(null)
                        setServerMessage('')
                      }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="contact-form"
                    noValidate
                    aria-label="Contact form"
                  >
                    <div className="contact-form__row">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">
                          Full name <span className="required" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="text"
                          autoComplete="name"
                          placeholder="Your full name"
                          {...fieldProps('name')}
                        />
                        {errors.name && (
                          <p id="name-error" className="form-error" role="alert">{errors.name}</p>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Business email <span className="required" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="email"
                          autoComplete="email"
                          placeholder="you@company.com"
                          {...fieldProps('email')}
                        />
                        {errors.email && (
                          <p id="email-error" className="form-error" role="alert">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="contact-form__row">
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">
                          Phone number <span className="required" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="tel"
                          autoComplete="tel"
                          placeholder="+91 XXXXX XXXXX"
                          {...fieldProps('phone')}
                        />
                        {errors.phone && (
                          <p id="phone-error" className="form-error" role="alert">{errors.phone}</p>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="company" className="form-label">
                          Company name <span className="required" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="text"
                          autoComplete="organization"
                          placeholder="Your company"
                          {...fieldProps('company')}
                        />
                        {errors.company && (
                          <p id="company-error" className="form-error" role="alert">{errors.company}</p>
                        )}
                      </div>
                    </div>

                    <div className="contact-form__row">
                      <div className="form-group">
                        <label htmlFor="service" className="form-label">
                          Service of interest <span className="required" aria-hidden="true">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          aria-invalid={!!errors.service}
                          aria-describedby={errors.service ? 'service-error' : undefined}
                          className={`form-select${errors.service ? ' error' : ''}`}
                        >
                          <option value="">Select a service</option>
                          {SERVICE_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                          <option value="not_sure">Not Sure Yet</option>
                        </select>
                        {errors.service && (
                          <p id="service-error" className="form-error" role="alert">{errors.service}</p>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="budget" className="form-label">
                          Project budget <span className="form-label__optional">(optional)</span>
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="form-select"
                        >
                          {BUDGET_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Message <span className="required" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, or any questions you have."
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        className={`form-textarea${errors.message ? ' error' : ''}`}
                      />
                      {errors.message && (
                        <p id="message-error" className="form-error" role="alert">{errors.message}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="checkbox-wrapper">
                        <input
                          type="checkbox"
                          name="privacy_consent"
                          checked={form.privacy_consent}
                          onChange={handleChange}
                          aria-invalid={!!errors.privacy_consent}
                          aria-describedby={errors.privacy_consent ? 'consent-error' : undefined}
                        />
                        <span className="form-label">
                          I agree to the{' '}
                          <Link to="/privacy" target="_blank" rel="noopener noreferrer">
                            Privacy Policy
                          </Link>{' '}
                          and consent to Voke storing and using my submitted information.
                          <span className="required" aria-hidden="true"> *</span>
                        </span>
                      </label>
                      {errors.privacy_consent && (
                        <p id="consent-error" className="form-error" role="alert">{errors.privacy_consent}</p>
                      )}
                    </div>

                    {/* Server error message */}
                    {submitStatus === 'error' && serverMessage && (
                      <div className="alert alert--error" role="alert">
                        {serverMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn btn--primary contact-form__submit"
                      disabled={submitStatus === 'loading'}
                      aria-busy={submitStatus === 'loading'}
                    >
                      {submitStatus === 'loading' ? (
                        <>
                          <span className="spinner" aria-hidden="true" />
                          Sending…
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>

                    <p className="contact-form__note">
                      * Required fields. We'll respond within 1–2 business days.
                    </p>
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
