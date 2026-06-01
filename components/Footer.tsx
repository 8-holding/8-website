const YEAR = 2026;

// Replace with the company LinkedIn URL when available.
const LINKEDIN_URL = 'https://www.linkedin.com/company/8-holding';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="/#top" className="brand" aria-label="Eight — home">
              <span className="brand__mark">8</span>
              <span>Eight</span>
            </a>
            <p>
              A strategic holding company acquiring, building, and operating
              exceptional businesses for the long term.
            </p>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#what-we-do">What We Do</a>
              </li>
              <li>
                <a href="/#approach">Approach</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="/#contact">Contact</a>
              </li>
              <li>
                <a href="mailto:info@8-holding.com">info@8-holding.com</a>
              </li>
              <li>Miami, Florida, USA</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            <span>© {YEAR} Eight. All rights reserved.</span>
            <a href="/privacy">Privacy Policy</a>
          </div>
          <div className="footer__social">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Eight on LinkedIn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
