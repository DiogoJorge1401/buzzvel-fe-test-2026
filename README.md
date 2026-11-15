# Buzzvel Front-End Engineer Coding Challenge

Responsive implementation of the supplied Luma education landing page using
Next.js App Router, TypeScript and Tailwind CSS v4.

## Run locally

```bash
bun install
bun run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
bun run typecheck
bun run lint
bun run format:check
bun run build
bun run start
```

`bun run check` runs the static checks and production build in sequence.

## GitHub Pages

The repository includes a GitHub Actions workflow that runs the static export
with the project base path and deploys the generated `out/` directory to
GitHub Pages.

## Key decisions

- Server Components render the full landing page. The only Client Component is
  the local contact form state.
- All visual assets are local copies of images supplied by the public Figma
  file, so the result does not depend on temporary Figma asset URLs.
- The layout follows one document scroll owner and reflows to one column on
  mobile. No section uses nested vertical scrolling.
- The contact form uses native browser validation and an in-place success state.
  It intentionally sends no data because the challenge does not require a
  backend or CMS.
- The design tokens, component rules and accepted gaps are documented in
  `DESIGN.md`.

## Known gaps

- Geist is used as the closest available geometric sans-serif because the
  public Figma file does not include a downloadable font package.
- The prototype does not expose a backend, so navigation links scroll within
  this single-page implementation.

## AI usage

AI was used to inspect the challenge specification, extract the supplied design
system, implement the responsive component structure and check accessibility,
type safety and build output. The result was reviewed through the production
build at desktop and mobile widths, with source-level checks run before
submission. Every generated change was inspected and can be explained during a
technical walkthrough.

## Time spent

Approximate focused implementation and verification time: 4 hours, including
reference inspection, implementation, responsive QA, accessibility checks and
production-build validation.

## Submission

The candidate number for the Buzzvel submission form is recorded in
`SUBMISSION.md`, not rendered in the page.
