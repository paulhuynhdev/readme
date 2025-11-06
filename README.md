# Read Me — Child Education Web UI Kit

## Overview

Read Me is a Child Education Web UI Kit for building engaging, accessible websites for schools, learning platforms, and child development initiatives.

## Tech Stack

- React 19.2 + TypeScript + Vite
- Tailwind CSS v4

## Architecture

- Atomic Design Pattern (atoms → molecules → organisms → templates → pages)

## Requirements

- Node.js `>=22.12.0` or `^20.19.0`
- npm `>=10`

## Getting Started

1) Install dependencies

```bash
npm install
```

2) Install Tailwind v4 (if not already present)

```bash
npm install tailwindcss @tailwindcss/vite
```

3) Configure Vite plugin

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

4) Import Tailwind CSS

```css
/* src/index.css */
@import "tailwindcss";
```

5) Run the app

```bash
npm run dev
```

6) Build for production

```bash
npm run build
```

7) Preview production build

```bash
npm run preview
```

## Project Structure

```txt
src/
  assets/
  components/
    atoms/
    molecules/
    organisms/
    templates/
    pages/
  index.css
  main.tsx
  App.tsx
```

## Conventions

- No comments in source code by default
- Keep mock data separate (e.g., `src/mocks/`)
- Clean, minimal code; remove redundant code
- Use meaningful, descriptive names

## Notes

- The UI Kit aims for accessibility, responsiveness, and consistency using Tailwind’s utility classes and atomic composition.
