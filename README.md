# Destiny Braimah — Portfolio (v2)

An editorial, product-engineer portfolio. Built to feel less like a résumé and
more like a carefully curated product experience.

## Stack

- **Framework** — Next.js 15 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS
- **Animation** — Framer Motion
- **Content** — MDX (essays) + typed data (projects, journey, now)
- **Fonts** — Geist (display), Inter (body), JetBrains Mono (code)
- **Icons** — Lucide

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Where content lives

| What              | File                                   |
| ----------------- | -------------------------------------- |
| Site config & socials | `lib/site.ts`                      |
| Projects / case studies | `lib/projects.ts`                |
| Journey chapters  | `lib/journey.ts`                       |
| Now page          | `lib/now.ts`                           |
| Skills            | `lib/skills.ts`                        |
| Essays            | `content/writing/*.mdx`                |

> The projects, journey, and essays ship with drafted, on-brand placeholder
> content — swap in your real specifics (metrics, links, dates) when ready.

## Structure

```
app/            routes (home, work, journey, writing, now, contact) + SEO
components/     UI: nav, footer, hero, cards, timeline, command palette, …
content/        MDX essays
lib/            data + helpers
public/         profile photo, résumé, favicon
```

## Features

- Command palette (`⌘K`), reading progress, scroll-to-top, copy-email
- MDX writing with table of contents, reading time, syntax highlighting
- Dynamic OG images, RSS feed, sitemap, robots, structured data
- Reduced-motion support, keyboard nav, semantic HTML
