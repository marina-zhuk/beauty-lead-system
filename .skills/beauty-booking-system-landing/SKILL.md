# Beauty Booking System Landing Skill

## Purpose
Create a visually strong, clear, commercial landing page for beauty-business owners who want to stop losing leads.

## Audience
- Salon owners.
- Independent beauty masters.
- Cosmetologists.
- Brow artists.
- Lash masters.
- Massage specialists.

## Core message
Not: "Book a beauty service."

Instead:

"Receive website leads directly in Telegram."

## Visual direction
- Clean SaaS x premium beauty.
- Not overly girly.
- Not a pink salon template.
- Light background.
- Graphite text.
- Ivory / warm white / soft beige.
- One careful accent color.
- Generous whitespace.
- Strong typography.
- Clear conversion blocks.
- Visual cards with a demo lead, Telegram notification, or booking flow.

## Avoid
- A real salon website for end customers.
- Mixed audiences.
- Cheap beauty gradients.
- Random decorative elements.
- Too much pink.
- Generic AI landing.
- Too much text.
- Complex animations.
- New libraries unless necessary.

## Landing structure
1. Hero.
2. Problem.
3. Solution.
4. How it works.
5. Demo lead form.
6. What owner receives.
7. Packages / what included.
8. FAQ.
9. Final CTA.

## Copywriting rules
- Write for the business owner.
- Talk about leads, response speed, order, and convenience.
- Do not overload copy with technical terms.
- Explain Telegram as a clear business benefit.
- The form on the landing page is a demo lead, not a booking form for a real salon.

## UI rules
- The first screen must be stronger than the rest.
- The Hero visual card must show a demo Telegram notification or lead card.
- The form must feel like a demo workflow.
- Cards must be clean.
- CTA must be visible.
- Mobile-first.

## Technical constraints
- Do not break `POST /api/lead`.
- Do not change form field names unless necessary.
- Do not change `TELEGRAM_BOT_TOKEN` or `TELEGRAM_CHAT_ID`.
- Do not touch `.env.local`.
- Do not add Google Sheets now.
- Do not add payments or CRM.

## Quality checklist
- It is clear within 3 seconds what is being sold.
- There is one audience: beauty-business owner.
- It does not feel like a salon website for end customers.
- The form works.
- Telegram receives the lead.
- Mobile looks clean.
- `npm run build` passes.
- Tokens are not committed into code.
