# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Start development server:**
```bash
npm run dev
# or
bun dev
```
Server runs on port 8080 with HMR enabled.

**Build:**
```bash
npm run build          # Production build
npm run build:dev      # Development build
```

**Testing:**
```bash
npm run test           # Run tests once
npm run test:watch     # Run tests in watch mode
```

**Linting:**
```bash
npm run lint           # Run ESLint
```

**Preview:**
```bash
npm run preview        # Preview production build
```

## Project Architecture

This is a React + TypeScript single-page application built with Vite, using modern tooling and libraries.

**Technology Stack:**
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state, Context API for client state
- **Routing**: React Router DOM
- **Testing**: Vitest + Testing Library + Playwright
- **Package Manager**: Both npm and bun are supported (bun.lock indicates bun preference)

**Project Structure:**
- `src/pages/` - Page components (Index.tsx, NotFound.tsx)
- `src/components/ui/` - Reusable UI components from shadcn/ui
- `src/components/sections/` - Page-specific sections (HeroSection, PainSection, etc.)
- `src/hooks/` - Custom React hooks (useLanguage for i18n)
- `src/lib/` - Utility functions and configurations
- `src/test/` - Test files and setup

**Key Features:**
- **Internationalization**: Custom useLanguage hook with Context API supporting Italian/English
- **Component System**: Uses shadcn/ui components with Radix UI primitives
- **Responsive Design**: Tailwind CSS with custom theme configuration
- **Toast Notifications**: Dual toast system (Sonner + custom toaster)
- **Dark Mode**: Configured in Tailwind (class-based)

**Import Aliases:**
- `@/*` maps to `src/*` (configured in vite.config.ts and tsconfig paths)

**Development Notes:**
- Uses React Router with catch-all route for 404 handling
- TanStack Query client is configured at app level
- ESLint configured with TypeScript, React hooks, and React refresh
- Unused variables warning is disabled in ESLint config
- Component tagging enabled in development mode via lovable-tagger

**Adding New Routes:**
Add routes above the catch-all `*` route in src/App.tsx as indicated by the comment.

**Language Support:**
The app uses a custom i18n solution via useLanguage hook. Use the `t()` function with Italian and English strings: `t("Testo italiano", "English text")`.