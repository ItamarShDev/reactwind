# ReactWind

[![Version](https://img.shields.io/npm/v/@itamarshdev/reactwind)](https://www.npmjs.com/package/@itamarshdev/reactwind)
[![License](https://img.shields.io/npm/l/@itamarshdev/reactwind)](https://github.com/ItamarShDev/reactwind/blob/main/LICENSE)
[![Demo](https://img.shields.io/badge/storybook-demo-FF4785?logo=storybook)](https://ItamarShDev.github.io/reactwind/storybook/)
[![semantic-release](https://img.shields.io/badge/semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


[DeepWiki Docs](https://deepwiki.com/ItamarShDev/reactwind)

**ReactWind** is a JSX runtime wrapper that brings the power of Tailwind CSS shorthands and array-based classNames directly to your React components. No more template literal spaghetti or complex utility merges.

---

## Installation

```bash
npm install @itamarshdev/reactwind
# or
bun add @itamarshdev/reactwind
# or
yarn add @itamarshdev/reactwind
```


## Features

- **Prop-based Styling**: Use Tailwind utilities as props: `<div flex bg="blue-500" p={4} />`.
- **Conditional ClassNames**: Compose strings, nested arrays, and conditional object maps without another dependency.
- **Lightweight Runtime**: Shorthands are converted to class strings at runtime; this is not a compile-time CSS extractor.
- **Tailwind 4.3 Utilities**: Logical spacing, text shadows, masks, 3D transforms, scrollbars, and zoom.
- **TypeScript First**: Automatic types for nearly all Tailwind utilities.
- **Framework Agnostic**: Works with Vite, Next.js, and any stack supporting custom JSX runtimes.

---


## Setup

Configure your build tool to use `@itamarshdev/reactwind` as your JSX import source.

### Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  oxc: { jsx: { importSource: '@itamarshdev/reactwind' } },
});
```

This uses Vite 8. For Vite 7 and earlier, use `esbuild: { jsxImportSource: '@itamarshdev/reactwind' }` instead of `oxc`.

### TypeScript

```json
// tsconfig.json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@itamarshdev/reactwind"
  }
}
```

### Next.js

Next.js uses SWC which reads from your `tsconfig.json`:

```json
// tsconfig.json
{
  "compilerOptions": {
    "jsx": "preserve",
    "jsxImportSource": "@itamarshdev/reactwind"
  }
}
```

### TanStack Start

Current TanStack Start uses Vite. Configure `vite.config.ts`:

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), tanstackStart(), react({ jsxImportSource: "@itamarshdev/reactwind" })],
});
```

### React Router (v7)

React Router v7 uses Vite. Add to your `vite.config.ts`:

```typescript
// vite.config.ts
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter()],
  oxc: { jsx: { importSource: "@itamarshdev/reactwind" } },
});
```

---

## Usage Examples

### 1. Shorthand Props & Booleans

```tsx
// Instead of <div className="flex items-center justify-between p-4">
<div flex items-center justify-between p={4}>
  <span>Header</span>
  <button bg="blue-600" text="white" px={3} py={1} rounded="md">Click Me</button>
</div>
```

### 2. Array-based ClassNames

```tsx
<div 
  classNames={[
    'transition-all duration-300',
    isHovered ? 'scale-105 shadow-lg' : 'scale-100 shadow-sm',
    customClass && customClass,
    ['rounded-lg', { 'font-bold': isActive, 'opacity-50': isDisabled }],
  ]}
>
  Card Content
</div>
```

### 3. Modifier Props (Hover, Focus, Responsive, etc.)

```tsx
// Hyphenated syntax
<button hover-bg="blue-700" hover-scale="105" focus-ring="2">
  Hover Me
</button>

// Object syntax for multiple props per modifier
<button hover={{ bg: "blue-700", scale: "105", shadow: "lg" }}>
  Hover Me
</button>

// Stacked modifiers via nesting
<div dark={{ hover: { bg: "slate-800", text: "white" } }}>
  Dark mode hover styles
</div>

// Responsive breakpoints
<div md={{ flex: true, gap: "4" }} lg={{ gap: "8" }}>
  Responsive layout
</div>
```

### 4. Position & Layout Props

```tsx
<div absolute top="0" right="0" inset-x="4">
  Positioned element
</div>

<div grid grid-cols="3" gap-x="4" gap-y="2">
  Grid with different gaps
</div>
```

### 5. Gradient & Background Props

Use `bg-linear` for Tailwind 4. The older `bg-gradient` shorthand still passes through to Tailwind 4.3's supported `bg-gradient-*` compatibility utilities; existing gradients do not require translation.

```tsx
<div bg-linear="to-r" from="blue-500" via="purple-500" to="pink-500">
  Gradient background
</div>
```

---

## Tailwind CSS source detection

ReactWind generates class strings at runtime; Tailwind generates CSS at build time. Tailwind cannot infer `bg-blue-500` from `bg="blue-500"`, including inside `sx` and modifier objects.

Install Tailwind and its integration separately. In your CSS, import Tailwind and explicitly include the complete class names used by shorthand props:

```css
@import "tailwindcss";

@source inline("flex items-center justify-between p-4 bg-blue-500 hover:bg-blue-700");
```

Use `@source inline()` brace expansion for a bounded set of dynamic values, not the entire Tailwind palette:

```css
@source inline("{hover:,focus:,}bg-{blue,sky}-{500,700}");
```

Literal complete class names in `className`/`classNames` are detected normally. `@source` paths can include external component files with literal classes, but cannot extract shorthand prop values. See [Tailwind's source detection guide](https://tailwindcss.com/docs/detecting-classes-in-source-files).

## Tailwind 4 utilities

```tsx
<div
  ps={6} pe={4} pbs={4} pbe={4}
  text-shadow="sm"
  scrollbar="thin" scrollbar-thumb="sky-500" scrollbar-gutter="stable"
  zoom={125}
  motion-safe={{ hover: { "rotate-y": 12 } }}
  rtl={{ ps: 8 }}
>
  Logical spacing, scrollbars, text shadows, and 3D transforms
</div>

<div sx={{ "@container-size": true }}>
  <p classNames={["@sm:text-lg"]}>Container-query content</p>
</div>
```

Safelist the complete classes for these examples as described above. Named containers, arbitrary variants, and unsupported utilities can always use literal `classNames` entries.

### Native and component prop collisions

JSX preserves top-level `size`, `mask`, and `transform` as ordinary props so component variants, native input/select sizes, and SVG attributes reach their targets unchanged. Use `sx` for the corresponding Tailwind utilities:

```tsx
<Button size="sm" sx={{ size: 8 }} />
<input size={20} sx={{ size: 8 }} />
<svg mask="url(#shape)" transform="translate(2 3)" sx={{ mask: "none", transform: "3d" }} />
```

Migration: replace styling-only `<div size={8} transform="3d" />` with `<div sx={{ size: 8, transform: "3d" }} />`. Nested modifier objects and direct `withClassNames()` calls remain explicit styling contexts, so their `size`, `mask`, and `transform` keys still generate classes.

## Development

Use Bun 1.4.3 and Node 22.22.2+ (CI uses Node 24):

```bash
bun install --frozen-lockfile
bun run lint
bun run check
bun run typecheck
bun run test:types
bun run test
bun run build
bun run build-storybook
```

Optional browser-backed Storybook tests: `bunx playwright install chromium`, then `bun run test:storybook`. Regenerate utility suggestions with `bun run generate:types`, then `bun run format`.

## Potential next features

1. **Build-time extraction**: A Vite/SWC transform that emits static classes from literal shorthand props, removing manual safelists and reducing runtime work.
2. **Custom utility and variant registry**: Typed support for project theme extensions, named containers, `data-*`, and arbitrary variants.
3. **Opt-in conflict resolution**: A Tailwind-aware merge mode for reusable component overrides, while keeping the default runtime dependency-free.

## Goals

ReactWind aims to improve the developer experience of styling with Tailwind CSS by:
1. **Removing syntactic noise**: Replacing long `className` strings with structured props.
2. **Improving modifiability**: Making it easier to toggle styles based on props without complex string manipulation.
3. **Enhancing discoverability**: leveraging TypeScript to provide autocompletion for styling props.

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [ItamarShDev](https://github.com/ItamarShDev/reactwind)
