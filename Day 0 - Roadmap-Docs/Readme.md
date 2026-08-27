# AWAIS — Optimized Power Roadmap (2026–2035+)

A single-page, fully responsive site that presents the 35-stage engineering
roadmap: **Full Stack Engineer → Backend Engineer → AI Product Engineer →
Scalable Systems Engineer → AI Systems Architect**.

Built as static HTML/CSS (no build step, no framework, no backend).

## Files

| File          | Purpose                                                   |
| ------------- | ---------------------------------------------------------- |
| `index.html`  | All page content — hero, market research, all 35 stages, project ladder, capstone, execution plan, etc. |
| `style.css`   | Design tokens + layout + components (dark "engineering blueprint" theme). |
| `README.md`   | This file. |

## Running it locally

No install or build required — it's plain HTML/CSS/JS.

**Option 1 — just open it**
Double-click `index.html`, or open it directly in a browser.

**Option 2 — local server** (recommended, avoids any `file://` quirks)
```bash
cd path/to/project
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## Structure of the page

1. **Hero** — core identity, career path, and the "core stack sentence" trace.
2. **Orientation** — Golden Rule, Executive Summary, 2026 Market Scorecard,
   Market Research evidence, CS Foundation (Layer Zero).
3. **The 35 Stages** — grouped into 8 phases along a numbered vertical spine.
   Each stage is a collapsible `<details>` card with its topic breakdown,
   build projects, and exit condition:
   - Phase 1 — Frontend Core (01–05)
   - Phase 2 — Backend & Data (06, 06B, 07–08)
   - Phase 3 — Engineering Quality & Security (09–10)
   - Phase 4 — Platform & Cloud (11–14)
   - Phase 5 — Architecture & Scale (15–22)
   - Phase 6 — AI Engineering (23–29)
   - Phase 7 — Data, Breadth & Mobile (30–32)
   - Phase 8 — Product, Architecture & Leadership (33–35)
4. **Execution** — Project Ladder, Capstone, Degree Alignment, Year-by-Year,
   Mastery Map, Anti-patterns, Learning Loop, Think-Scalable Checklist.
5. **Career** — Job Readiness, Risk & Fallback, Global Job Strategy,
   12–18 Month Plan, 3–5 Year Horizon, Final Destination, Reference Notes.

Every top-level anchor is linked from the sidebar (`#id` navigation), so any
section can be deep-linked or bookmarked directly.

## Design notes

- **Palette**: ink/graphite background, brass accent for the primary
  (Next.js → FastAPI → cloud) stack, teal accent for the AI/data track.
- **Type**: Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono
  (labels, stage badges, data).
- **Responsive**: sidebar collapses into an off-canvas drawer below 980px;
  tables scroll horizontally on narrow screens; stage grids collapse to a
  single column on mobile.
- **Accessibility**: semantic landmarks (`header`, `nav`, `main`, `footer`),
  visible focus states, native `<details>`/`<summary>` for stage
  expand/collapse (keyboard- and screen-reader-friendly), and
  `prefers-reduced-motion` respected for the smooth-scroll behavior.

## Editing content

All content lives directly in `index.html` as plain markup — there's no
templating or data file to sync. To update a stage, find its
`<details class="stage" id="stage-N">` block and edit the topic lists,
callouts, or exit condition inline. To add a new top-level section, follow
the existing `<section class="section" id="...">` pattern and add a matching
link in the `<aside class="sidebar">` navigation.

## Deployment

Since this is fully static, it can be hosted anywhere that serves plain
files: GitHub Pages, Netlify, Vercel (static), Cloudflare Pages, S3 + a CDN,
or any plain web server. Just upload `index.html` and `style.css` together.