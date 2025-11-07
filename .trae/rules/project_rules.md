# User Coding Standards

## Layers and Roles

- Atoms: Small, reusable UI primitives. No external state; only visual concerns.
- Molecules: Compose atoms into small UI units. Minimal local state for composition only.
- Organisms: Compose molecules/atoms into feature sections. Coordinate UI state; no data fetching.
- Templates: Page layouts and structural regions. No business logic or data fetching.
- Pages: Route-bound containers. Handle data fetching, orchestration, and side effects.

## Import Boundaries

- Atoms import only React, types, and styling utilities. Never import molecules/organisms.
- Molecules import atoms (and local helpers). Do not import organisms/templates/pages.
- Organisms import molecules/atoms. Do not import templates/pages.
- Templates import organisms/molecules/atoms.
- Pages can import any lower layer (templates/organisms/molecules/atoms).

## Naming and Structure

- Component files use PascalCase: `Button.tsx`, `Card.tsx`, `Navbar.tsx`.
- Directory names are lowercase plural: `atoms/`, `molecules/`, `organisms/`, `templates/`, `pages/`.
- One component per file; export default the component. Avoid deep barrel chains.
- Use meaningful, descriptive names aligned to responsibility (no generic names).

## Props and Variants

- Prefer explicit props with clear types; avoid ambiguous `any`.
- Use a `variant` prop for stylistic variations; apply Tailwind utility classes.
- Atoms should be controlled/uncontrolled predictably; no hidden side effects.
- Avoid leaking page-level concerns (routing, services) into atoms/molecules.

## State and Data Flow

- Atoms: purely presentational; at most internal ephemeral UI state.
- Molecules: light local state for composition; no remote data.
- Organisms: coordinate child state; no data fetching.
- Pages: perform data fetching, call services, and pass data down via props.

## Styling Rules

- Use Tailwind CSS utilities; do not add global CSS by default.
- Extract repeated class patterns via small helpers when it improves clarity.
- Maintain accessible focus rings and states using utility classes.

## Do/Don’t Summary

- Do compose from lower to higher layers; do not import upwards.
- Do keep components focused; do not mix data fetching into UI layers below pages.
- Do use descriptive names; do not use generic or misleading names.

## Syntax and Formatting

- Use the "function" keyword for pure functions.
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
- Use declarative JSX.

## Design System

- Use theme tokens only; avoid hex values. Prefer bg-primary , text-primary , bg-secondary , text-secondary-foreground , text-neutral-900 , border-neutral-200 , placeholder-neutral-400 .
- Standardize radius. Prefer rounded-md , rounded-lg , rounded-xl ; avoid arbitrary values unless required by spec.
- Typography: default font-sans ; headings use font-heading . Use Tailwind size utilities ( text-sm … text-5xl ) and semantic weights ( font-medium , font-bold ).
- Spacing: use Tailwind spacing utilities ( p-_ , m-_ , gap-\* ). Avoid arbitrary pixel classes unless matching a strict spec.

## Token Lookup

- Source of tokens: src/styles/theme.css (loaded via src/index.css ).

- Utility-to-token mapping examples:
- bg-primary → var(--color-primary)
- text-secondary-foreground → var(--color-secondary-foreground)
- text-neutral-900 → var(--color-neutral-900)
- border-neutral-200 → var(--color-neutral-200)
- placeholder-neutral-400 → var(--color-neutral-400)
