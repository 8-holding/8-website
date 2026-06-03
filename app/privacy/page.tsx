import type { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Eight collects, uses, and protects the personal information of visitors to www.8-holding.com.',
  alternates: { canonical: '/privacy' },
};

const EMAIL = 'info@8-holding.com';
const LAST_UPDATED = 'June 1, 2026';

export default function PrivacyPolicy() {
  return (
    <>
      <header className="legal-header">
        <div className="container legal-header__inner">
          <a href="/" className="brand" aria-label="Eight — home">
            <span className="brand__mark">8</span>
            <span>Eight</span>
          </a>
          <a href="/" className="legal-back">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to home
          </a>
        </div>
      </header>

      <main id="main" className="legal">
        <div className="container">
          <div className="legal__head">
            <h1>Privacy Policy</h1>
            <p className="legal__updated">Last updated: {LAST_UPDATED}</p>
          </div>

          <div className="legal__body">
            <p>
              Eight (&ldquo;Eight,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard information when you visit{' '}
              <a href="https://www.8-holding.com">www.8-holding.com</a> (the
              &ldquo;Site&rdquo;) or contact us. By using the Site, you agree to the
              practices described below.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect only the information you choose to provide and a limited
              amount of technical data necessary to operate the Site.
            </p>
            <h3>Information you provide</h3>
            <p>
              When you submit our contact form, we collect the details you enter,
              which may include your name, email address, phone number, company
              name, and the contents of your message.
            </p>
            <h3>Information collected automatically</h3>
            <p>
              Our hosting provider may automatically log standard technical
              information such as your IP address, browser type, and the pages you
              visit. This data is used for security and to maintain the Site, and is
              not used to identify you personally.
            </p>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>To respond to your inquiries and communicate with you;</li>
              <li>To evaluate and pursue potential business relationships;</li>
              <li>To operate, maintain, and improve the Site; and</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>

            <h2>Cookies &amp; Tracking</h2>
            <p>
              The Site does not use advertising cookies or third-party analytics
              trackers. Essential cookies may be set by our hosting provider for
              security and basic functionality. You can control or delete cookies
              through your browser settings.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We rely on a small number of trusted service providers to operate the
              Site:
            </p>
            <ul>
              <li>
                <strong>Hosting:</strong> the Site is hosted on GitHub Pages, which
                may process technical request data as described in GitHub&rsquo;s
                privacy statement.
              </li>
              <li>
                <strong>Contact form:</strong> form submissions may be processed by
                a third-party form provider to deliver your message to us. Your
                submission is used solely to relay and respond to your inquiry.
              </li>
            </ul>
            <p>
              These providers process information on our behalf and are not
              authorized to use it for their own purposes.
            </p>

            <h2>How We Share Information</h2>
            <p>
              We do not sell, rent, or trade your personal information. We may share
              it only with the service providers described above, with professional
              advisors, or when required by law, legal process, or to protect the
              rights, property, or safety of Eight or others.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain the information you provide for as long as necessary to
              respond to your inquiry and for our legitimate business and legal
              purposes, after which it is deleted or anonymized.
            </p>

            <h2>Data Security</h2>
            <p>
              We take reasonable administrative and technical measures to protect
              your information, including serving the Site over HTTPS. However, no
              method of transmission or storage is completely secure, and we cannot
              guarantee absolute security.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct,
              or request deletion of your personal information, or to object to or
              restrict certain processing. To exercise any of these rights, contact
              us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>

            <h2>Children&rsquo;s Privacy</h2>
            <p>
              The Site is not directed to children under 16, and we do not knowingly
              collect personal information from them. If you believe a child has
              provided us information, please contact us so we can remove it.
            </p>

            <h2>International Visitors</h2>
            <p>
              If you access the Site from outside the country where our service
              providers operate, your information may be transferred to, stored, and
              processed in a jurisdiction whose data protection laws differ from
              those of your own.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be
              posted on this page with a revised &ldquo;Last updated&rdquo; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our practices,
              contact us at:
            </p>
            <p>
              <strong>Eight</strong>
              <br />
              7901 4th St N, STE 300
              <br />
              St. Petersburg, FL 33702
              <br />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>

            <p className="legal__note">
              This Privacy Policy is provided as a general template and does not
              constitute legal advice. We recommend having it reviewed by qualified
              legal counsel to ensure it accurately reflects your data practices and
              complies with applicable laws (e.g. GDPR, CCPA).
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
