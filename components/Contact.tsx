'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
const EMAIL = 'info@8-holding.com';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No endpoint configured → fall back to the visitor's email client.
    if (!ENDPOINT) {
      const subject = encodeURIComponent(
        `Inquiry from ${data.get('name') || 'website'}`
      );
      const body = encodeURIComponent(
        `Name: ${data.get('name') || ''}\n` +
          `Email: ${data.get('email') || ''}\n` +
          `Phone: ${data.get('phone') || ''}\n` +
          `Company: ${data.get('company') || ''}\n\n` +
          `${data.get('message') || ''}`
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="section section--navy" id="contact">
      <div className="container">
        <div className="contact">
          <div className="contact__info">
            <p className="eyebrow eyebrow--light">Contact</p>
            <h2>Let&rsquo;s start a conversation.</h2>
            <p>
              Whether you want to grow revenue, build a sales team, or open a new
              market, we would be glad to hear about your business and how we can
              help.
            </p>

            <div className="contact__detail">
              <IconMail />
              <div>
                <div className="contact__detail-label">Email</div>
                <div className="contact__detail-value">
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
              </div>
            </div>
          </div>

          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="form__row">
              <div className="field">
                <label htmlFor="name">
                  Name <span className="req">*</span>
                </label>
                <input id="name" name="name" type="text" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="email">
                  Email <span className="req">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="form__row">
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">
                Message <span className="req">*</span>
              </label>
              <textarea id="message" name="message" required rows={5} />
            </div>

            <button
              type="submit"
              className="btn btn--primary form__submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="form__status form__status--ok" role="status">
                Thank you — your message has been received. We will be in touch
                shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="form__status form__status--err" role="alert">
                Something went wrong. Please email us directly at {EMAIL}.
              </p>
            )}

            {!ENDPOINT && (
              <p className="form__note">
                Submitting will open your email client. Configure a form endpoint
                to receive messages directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function IconMail() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
