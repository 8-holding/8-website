# Eight — Website

The marketing website for **Eight**, a sales services company that helps
businesses build, scale, and strengthen their sales. Built with **Next.js 14**
(App Router) and exported as a fully static site for hosting on **GitHub Pages**.

- **Live domain:** [www.8-holding.com](https://www.8-holding.com)
- **Stack:** Next.js (static export) · React · TypeScript · vanilla CSS design system
- **No backend** — the contact form posts to a third-party form endpoint (Formspree) or falls back to `mailto:`.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Configure environment (optional but recommended)
cp .env.example .env.local
#   then fill in NEXT_PUBLIC_FORMSPREE_ENDPOINT

# 3. Run the dev server
npm run dev          # http://localhost:3000

# 4. Build the static site
npm run build        # outputs to ./out

# 5. Preview the production build locally
npm run serve        # serves ./out at http://localhost:3000
```

Requirements: **Node.js 18.17+** (Node 20 recommended).

---

## Project structure

```
.
├── app/
│   ├── layout.tsx        # <head>, SEO metadata, fonts, JSON-LD
│   ├── page.tsx          # composes all sections
│   ├── globals.css       # full design system (navy / charcoal / ivory)
│   ├── sitemap.ts        # generates sitemap.xml
│   └── icon.svg          # favicon
├── components/
│   ├── Nav.tsx           # sticky header + mobile menu
│   ├── Hero.tsx          # headline + CTAs
│   ├── WhatWeDo.tsx      # service cards
│   ├── Approach.tsx      # principles ("Why Eight")
│   ├── About.tsx         # mission / vision
│   ├── Contact.tsx       # form + contact details
│   ├── Footer.tsx        # links, copyright, LinkedIn
│   └── Reveal.tsx        # scroll-reveal animation helper
├── public/
│   ├── CNAME             # custom domain for GitHub Pages
│   ├── .nojekyll         # let GitHub Pages serve Next's _next/ folder
│   └── robots.txt
├── .github/workflows/deploy.yml   # CI: build + deploy to Pages
├── next.config.mjs       # output: 'export'
└── .env.example
```

---

## Editing content

All copy is plain text inside the components — no CMS. Common edits:

| Want to change…            | Edit…                                             |
| -------------------------- | ------------------------------------------------- |
| Headline / hero subheading | `components/Hero.tsx`                             |
| Service cards              | the `SERVICES` array in `components/WhatWeDo.tsx` |
| Principles ("Why Eight")   | the `PRINCIPLES` array in `components/Approach.tsx` |
| About / mission text       | `components/About.tsx`                            |
| Contact email              | `components/Contact.tsx` & `components/Footer.tsx` |
| LinkedIn URL               | `LINKEDIN_URL` in `components/Footer.tsx`         |
| Colors / typography        | the `:root` variables in `app/globals.css`        |
| SEO title / description    | `app/layout.tsx`                                  |

> **Placeholder content:** the mission text and service descriptions are
> realistic placeholders. Review them before going live.

---

## Contact form setup (Formspree)

The form is static, so it submits to [Formspree](https://formspree.io) (free tier
available). Any compatible endpoint works.

1. Create a form at <https://formspree.io> and copy its endpoint
   (e.g. `https://formspree.io/f/abcdwxyz`).
2. Add it to `.env.local` for local dev:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/abcdwxyz
   ```
3. For production, add the same value as a **GitHub Actions secret** named
   `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (see deployment below).

If no endpoint is set, the form gracefully opens the visitor's email client to
`info@8-holding.com` instead.

---

## Deploying to GitHub Pages

### One-time setup

1. **Create a repository** on GitHub and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Eight website"
   git branch -M main
   git remote add origin https://github.com/<your-org>/<your-repo>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages via Actions:**
   Repo → **Settings → Pages → Build and deployment → Source** → select
   **GitHub Actions**.

3. **(Optional) Add the form secret:**
   Repo → **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - Value: your Formspree endpoint URL

4. **Push to `main`.** The workflow in `.github/workflows/deploy.yml` builds the
   static export and publishes it automatically. Subsequent pushes redeploy.

The workflow can also be triggered manually from the **Actions** tab
("Run workflow").

---

## Custom domain setup (www.8-holding.com)

The repo already includes `public/CNAME` containing `www.8-holding.com`, which
GitHub Pages reads on deploy.

### 1. DNS records (at your domain registrar / DNS provider)

Point the domain at GitHub Pages:

**For the `www` subdomain (primary):**

| Type  | Host  | Value                    |
| ----- | ----- | ------------------------ |
| CNAME | `www` | `<your-org>.github.io.`  |

**For the apex/root domain (`8-holding.com`) — so it redirects to `www`:**

| Type | Host | Value             |
| ---- | ---- | ----------------- |
| A    | `@`  | `185.199.108.153` |
| A    | `@`  | `185.199.109.153` |
| A    | `@`  | `185.199.110.153` |
| A    | `@`  | `185.199.111.153` |

(Optionally add the matching `AAAA` records for IPv6:
`2606:50c0:8000::153`, `…8001::153`, `…8002::153`, `…8003::153`.)

### 2. In GitHub

- Repo → **Settings → Pages → Custom domain** → enter `www.8-holding.com` → **Save**.
- Wait for the DNS check to pass, then tick **Enforce HTTPS**.

DNS propagation can take from a few minutes up to 48 hours.

> **Note:** This site is configured for a custom domain (served from the root).
> If you instead deploy to `https://<user>.github.io/<repo>/` without a custom
> domain, uncomment and set `basePath` / `assetPrefix` in `next.config.mjs` and
> remove `public/CNAME`.

---

## Performance, SEO & accessibility

- **Static HTML/CSS/JS** — no server, fast cold loads, CDN-friendly.
- Self-hosted Google fonts via `next/font` (no render-blocking external requests).
- Inline SVG icons — no icon library, no extra requests.
- SEO: per-page metadata, Open Graph + Twitter cards, JSON-LD `Organization`
  schema, `sitemap.xml`, and `robots.txt`.
- Accessibility: semantic landmarks, skip link, focus styles, `aria` attributes,
  and `prefers-reduced-motion` support.
- Smooth scrolling with subtle scroll-reveal animations.

---

## License

© 2026 Eight. All rights reserved.
