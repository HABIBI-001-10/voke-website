import Reveal from '../components/ui/Reveal'
import './Legal.css'

export default function Terms() {
  return (
    <div className="legal-page">
      <section className="legal-hero section--alt" aria-label="Terms of Use">
        <div className="container">
          <Reveal>
            <p className="eyebrow eyebrow--light">Legal</p>
            <h1 className="legal-hero__heading">Terms of Use</h1>
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
              These Terms of Use are a placeholder only. They must be reviewed
              and completed by a qualified legal professional before the site is
              published. Replace all bracketed text with accurate, legally sound
              content appropriate to your jurisdiction and service model.
            </div>

            <div className="legal-content">
              <h2>1. Acceptance of terms</h2>
              <p>
                By accessing or using the Voke website (voke.in), you agree to
                be bound by these Terms of Use. If you do not agree, please do
                not use the site.
              </p>

              <h2>2. Use of the site</h2>
              <p>
                You may use this site for lawful purposes only. You must not use
                the site in any way that breaches applicable laws or regulations,
                is fraudulent, or causes harm to Voke or third parties.
              </p>

              <h2>3. Intellectual property</h2>
              <p>
                All content on this website — including text, design, graphics,
                and code — is owned by or licensed to Voke and is protected by
                applicable intellectual property laws. You may not reproduce,
                distribute, or create derivative works without prior written
                permission.
              </p>

              <h2>4. Disclaimer of warranties</h2>
              <p>
                [Replace with legally reviewed disclaimer appropriate to Indian
                law and your specific services. Example: The site and its
                content are provided on an "as is" basis without warranties of
                any kind.]
              </p>

              <h2>5. Limitation of liability</h2>
              <p>
                [Replace with a legally reviewed limitation of liability clause
                appropriate to Indian consumer protection law and your service
                model.]
              </p>

              <h2>6. Third-party links</h2>
              <p>
                This site may contain links to third-party websites. Voke is
                not responsible for the content or practices of those sites.
              </p>

              <h2>7. Governing law</h2>
              <p>
                These terms are governed by the laws of India. [Replace with
                specific jurisdiction / courts as advised by your legal counsel.]
              </p>

              <h2>8. Changes to these terms</h2>
              <p>
                We may update these terms from time to time. Continued use of
                the site after changes constitutes acceptance of the updated
                terms.
              </p>

              <h2>9. Contact</h2>
              <p>
                For queries regarding these terms: [email — Replace] ·{' '}
                [address — Replace]
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
