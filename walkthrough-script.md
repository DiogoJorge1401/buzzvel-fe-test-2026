# Buzzvel project demo script

Target length: 2 to 3 minutes.

## Introduction

Hi, I am Diogo Jorge, and this is my implementation of the Buzzvel Front-End
Engineer coding challenge.

I built the page with Next.js App Router, TypeScript and Tailwind CSS. The goal
was to reproduce the supplied desktop and mobile Figma designs while keeping
the implementation accessible, responsive and easy to extend.

## Visual walkthrough

The page starts with the Luma navigation and a split hero. The hero uses a
local optimized image, clear primary and secondary calls to action, course
metadata and learner proof.

Below that, the course-category cards reflow from four columns on desktop to a
single readable column on mobile.

The blue featured-course section preserves the image-led composition, course
metadata and both actions from the reference.

The next sections explain the three-step learning model, present a testimonial
with the supporting learner statistics and show the international student and
teacher collage using local WebP assets.

The contact area has visible labels, native required and email validation, and
an in-place success state. It does not send data because the challenge does not
require a backend.

The page ends with the yellow conversion section and the dark responsive
footer.

## Technical decisions

The page uses Server Components by default. The mobile menu uses the native
Popover API, so it closes with Escape and returns focus correctly. A very small
framework-independent script owns the local contact success state.

The design tokens, layout contract, component states and accepted gaps are
documented in `DESIGN.md`. Images supplied through the Figma file are stored
locally and optimized to WebP where appropriate.

The layout has one document scroll owner and no horizontal overflow at 320,
390 or 1440 pixels.

## Verification and AI disclosure

I ran strict TypeScript checking, Oxlint, Oxfmt, a production Next.js build,
source-quality guards and manual browser QA on desktop and mobile.

Lighthouse was run three times in Chrome Stable. Every mobile and desktop run
scored 100 for Performance, Accessibility, Best Practices and SEO.

I used AI to help inspect the reference, organize the implementation and check
the result. I reviewed the generated code, tested the interactions in a real
browser and verified the production build myself.

Thank you for reviewing the project.
