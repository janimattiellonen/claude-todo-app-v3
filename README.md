# Todo App v3

A responsive and accessible todo application built with modern web technologies.

## Tech Stack

- **React 19** - Latest React with new features
- **TypeScript** - Type-safe development
- **Vite 6** - Fast build tool and dev server
- **StyleX** - Type-safe, atomic CSS-in-JS
- **React Router 7** - Client-side routing
- **React Hook Form** - Performant form library
- **Zod** - TypeScript-first schema validation
- **Radix UI** - Accessible, unstyled UI primitives
  - Colors - Professional color system
  - Select - Accessible dropdown component
  - Alert Dialog - Accessible modal dialogs

## Features

- ✅ Add, edit, and delete todos
- ✅ Sort by priority or creation date
- ✅ Filter by priority or completion status
- ✅ Form validation with user-friendly error messages
- ✅ WCAG AAA compliant design
- ✅ Full keyboard navigation support

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/` (or another port if 5173 is in use).

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── api/              # Service layer for data operations
├── components/       # Reusable UI components
├── contexts/         # React context providers
├── pages/            # Page components
├── styles/           # Design system
│   ├── tokens/       # Color scales and design tokens
│   └── components/   # Styled components
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

## Code Quality

This project uses:
- ESLint for code linting
- Prettier for code formatting
- TypeScript strict mode for type safety

All code must pass linting and type checking before commits.
