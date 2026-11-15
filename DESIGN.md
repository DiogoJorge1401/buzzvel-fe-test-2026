# Luma landing page design contract

## 1. Product and intent

Luma is a compact learning marketplace landing page. The page helps a visitor
understand the offer, explore course categories, inspect a featured course,
understand the learning model, see social proof, contact the team and choose a
next step.

Primary action: **Explore courses**.

Information priorities:

1. Practical, expert-led learning and the Explore courses action.
2. Course categories, featured course and the three-step learning model.
3. Social proof, people, contact route and final conversion action.

Left out on purpose:

- Backend, authentication, CMS and persistent form submissions.
- Decorative animation that is not present in the reference.
- Additional badges, pricing, carousels and fabricated course data.

## 2. Reference

The exact visual contract is the Buzzvel FE Test 2026 Figma file:

`https://www.figma.com/design/G0zSf6gyynwzEusOCgm2CM/Buzzvel-FE---Test-2026`

The implementation preserves its section order, copy hierarchy, responsive
intent, image-led hero, blue featured-course band, cream process sections,
yellow final CTA and navy footer.

## 3. Tokens

### Colour roles

- `canvas`: `#ffffff`
- `soft-canvas`: `#f8f7f2`
- `ink`: `#171a2d`
- `muted-ink`: `#686b78`
- `brand`: `#3358f4`
- `brand-strong`: `#2545d8`
- `brand-quiet`: `#eef1ff`
- `sun`: `#ffeb72`
- `peach`: `#ffc99e`
- `butter`: `#fff3bd`
- `line`: `#dfe2eb`
- `footer`: `#171b30`
- `footer-muted`: `#aeb3c5`
- `success`: `#216e4e`
- `focus`: `#1d4ed8`

### Typography

- Display and body: Geist Sans.
- Display: 4rem desktop, 2.55rem mobile, weight 720, tracking -0.035em.
- H2: 3rem desktop, 2rem mobile, weight 720.
- H3: 1.25rem, weight 700.
- Body: 1rem desktop and mobile, line-height 1.65.
- Small: 0.875rem, line-height 1.55.
- Label: 0.75rem, uppercase, 0.13em tracking.

### Spacing and shape

- Base spacing unit: 4px.
- Content maximum: 74rem.
- Section vertical spacing: 6.75rem desktop, 4rem mobile.
- Card radius: 0.75rem.
- Button radius: 0.4rem.
- Image radius: 1rem.
- Surface depth: neutral one-pixel borders, no decorative shadows.

## 4. Layout

Layout: document scroll owns the single long-form landing page; no nested
vertical scrollers; desktop uses a bounded content-limiter with responsive
grids; mobile reflows to one column.

- Header is static and full width.
- Hero is a two-column split above 960px.
- Category cards use four columns above 900px, two on tablet and one on mobile.
- Featured course is a two-column band above 800px.
- Process uses three columns and proof uses two balanced areas on desktop.
- People and contact sections use two columns above 900px.
- The contact form remains one semantic form at every width.

## 5. Reusable primitives and states

- `.container-page`: bounded content width and responsive inline padding.
- `.button`: primary, secondary and inverse variants with hover, pressed and
  focus-visible states.
- `ArrowLink`: text link with arrow, hover and focus-visible styles.
- `Kicker`: uppercase contextual label used because the supplied reference
  explicitly includes it.
- `AvatarStack`: overlapping profile images with accessible labels.
- `.image-frame`: local optimized image with explicit dimensions and object fit.
- `ContactForm`: native validation and submitted success state managed in a
  small Client Component.
- `Header`: native Popover navigation with a typed React close handler.

## 6. Required content

- Wordmark `luma.`
- Navigation: Courses, For Teams, Community, About, Log in, Start learning.
- Hero copy and actions.
- Trusted by 24,000+ learners.
- Four category cards.
- Featured course copy, teacher, lesson count, duration and level.
- Three process steps.
- Alex Morgan testimonial.
- 24K+, 120+ and 92% statistics.
- International students and teachers section with collage.
- Contact email, response time and labelled form.
- Final CTA with Explore all courses and Join Luma.
- Footer columns and copyright.

## 7. Interaction and accessibility

- Every action is a native link, button or form control.
- Focus-visible uses the focus token and a two-pixel outline.
- Mobile navigation uses the native Popover API and closes on Escape.
- Contact submission is local and exposes an in-place `role="status"` result.
- Motion is limited to colour and transform feedback and is removed under
  `prefers-reduced-motion`.
- Meaningful images have descriptions; decorative marks are hidden.

## 8. Accepted debt

- The public Figma does not expose downloadable font files, so Geist is used as
  the closest available geometric grotesk through `next/font`.
- The contact form intentionally does not send data because the challenge says
  backend and CMS setup are not required.
- Links for pages outside this single-page prototype are presented as inactive
  labels instead of misleading destinations.
