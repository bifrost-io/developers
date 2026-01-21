# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bifrost Developers is a documentation site for the Bifrost protocol (a crosschain staking layer). Built with Next.js 16 and Fumadocs, it provides comprehensive documentation for developers building with Bifrost's liquid staking infrastructure.

## Commands

```bash
# Install dependencies
bun install

# Development server (runs on port 3020)
bun dev

# Build for production
bun build

# Start production server
bun start

# Type checking (also regenerates MDX types)
bun types:check

# Linting
bun lint
```

## Architecture

### Framework Stack
- **Next.js 16** with App Router
- **Fumadocs** (fumadocs-core, fumadocs-ui, fumadocs-mdx) for documentation framework
- **Tailwind CSS 4** for styling
- **TypeScript** with strict mode

### Project Structure

```
app/
├── (home)/           # Landing page route group
├── docs/             # Documentation pages (catch-all [[...slug]])
├── api/search/       # Fumadocs search API endpoint
├── og/               # Open Graph image generation
└── llms-full.txt/    # LLM-friendly text export

content/docs/         # MDX documentation files
├── meta.json         # Navigation ordering
├── index.mdx         # Getting started page
└── [section]/        # Organized by topic (vtokens, integration, etc.)

lib/
├── source.ts         # Fumadocs source loader configuration
└── layout.shared.tsx # Shared layout options
```

### Key Patterns

**Content Source Configuration** (`source.config.ts`):
- MDX files live in `content/docs/`
- Uses `fumadocs-mdx` for content collection
- Generates types to `.source/` directory (gitignored, regenerated on postinstall)

**Documentation Pages** (`app/docs/[[...slug]]/page.tsx`):
- Single catch-all route renders all doc pages
- Uses `source.getPage()` to fetch content
- MDX components defined in `mdx-components.tsx`

**Navigation Order**:
- Controlled via `meta.json` files in content directories
- `defaultOpen: false` keeps sidebar sections collapsed by default

### Path Aliases
- `@/*` maps to project root
- `fumadocs-mdx:collections/*` maps to `.source/*` (generated types)
