import Reveal from '../components/ui/Reveal'
import './Legal.css'

export default function Privacy() {
  return (
    <div className="legal-page">
      <section className="legal-hero section--alt" aria-label="Privacy Policy">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow--light">Legal</p>
            <h1 className="legal-hero__heading">Privacy Policy</h1>
            <p className="legal-hero__sub">
              Last updated: [Date — Replace before publication]
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section legal-body">
        <div className="container">
          <Reveal>
            <div className="legal-notice">
              <strong>⚠ Content placeholder — legal review required.</strong>{' '}
              This privacy policy is a placeholder only. It must be reviewed
              and completed by a qualified legal professional before the site is
              published. Do not publish this page as-is. Replace all bracketed
              text with accurate, jurisdiction-appropriate content.
            </div>

            <div className="legal-content">
              <h2>1. Who we are</h2>
              <p>
                Voke ([Legal entity name — Replace], [Registration number — Replace],
                registered in [State — Replace], India) operates the website voke.in
                and the services described on it.
              </p>
              <p>
                For privacy-related questions, contact us at:{' '}
                <strong>[Privacy contact email — Replace]</strong>
              </p>

              <h2>2. What information we collect</h2>
              <p>
                When you use our contact form, we collect: your name, business
                email address, phone number, company name, the service you are
                interested in, an optional budget range, your message, and your
                IP address for security purposes.
              </p>
              <p>
                We do not collect sensitive personal data as defined under the
                Digital Personal Data Protection Act, 2023 (DPDP Act).
              </p>

              <h2>3. How we use your information</h2>
              <p>
                We use your contact details to: respond to your enquiry; provide
                the services you have requested; send service-related communications.
              </p>
              <p>
                We do not sell, rent, or share your personal data with third
                parties for their marketing purposes.
              </p>

              <h2>4. Legal basis for processing</h2>
              <p>
                [Replace with appropriate legal basis under the DPDP Act 2023
                and any applicable state regulations. Typically: consent
                provided through the form's privacy checkbox.]
              </p>

              <h2>5. How long we keep your data</h2>
              <p>
                [Replace with specific retention periods. Example: Contact
                submissions are retained for up to 2 years from the date of
                submission, or until you request deletion, whichever is sooner.]
              </p>

              <h2>6. Your rights</h2>
              <p>
                Under applicable Indian data protection law, you may have the
                right to access, correct, or request deletion of your personal
                data. To exercise these rights, contact us at{' '}
                <strong>[Privacy contact email — Replace]</strong>.
              </p>

              <h2>7. Cookies</h2>
              <p>
                [Replace with accurate cookie policy. Describe which cookies
                (if any) are used, their purpose, and how users can manage them.]
              </p>

              <h2>8. Third-party services</h2>
              <p>
                [Replace with a list of any third-party services used — e.g.
                analytics providers, email services, CDNs — and their data
                handling practices.]
              </p>

              <h2>9. Security</h2>
              <p>
                We implement technical and organisational measures to protect
                your personal data. [Replace with specific measures where
                appropriate.]
              </p>

              <h2>10. Changes to this policy</h2>
              <p>
                We may update this policy from time to time. We will post the
                updated policy on this page with a revised date.
              </p>

              <h2>11. Contact</h2>
              <p>
                For privacy-related queries: [email — Replace] ·{' '}
                [address — Replace]
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
