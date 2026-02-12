# 🚀 ReactWind

[![Version](https://img.shields.io/npm/v/@itamarshdev/reactwind)](https://www.npmjs.com/package/@itamarshdev/reactwind)
[![License](https://img.shields.io/npm/l/@itamarshdev/reactwind)](https://github.com/ItamarShDev/reactwind/blob/main/LICENSE)
[![Demo](https://img.shields.io/badge/storybook-demo-FF4785?logo=storybook)](https://ItamarShDev.github.io/reactwind/storybook/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

**ReactWind** is a JSX runtime wrapper that brings the power of Tailwind CSS shorthands and array-based classNames directly to your React components. No more template literal spaghetti or complex utility merges.

---

## 📦 Installation

```bash
npm install @itamarshdev/reactwind
# or
bun add @itamarshdev/reactwind
# or
yarn add @itamarshdev/reactwind
```


## ✨ Features

- 🎯 **Prop-based Styling**: Use Tailwind utilities as props: `<div flex bg="blue-500" p={4} />`.
- 🧬 **Array ClassNames**: Pass classes as clean arrays: `classNames={['text-center', isActive && 'font-bold']}`.
- 💨 **Zero Runtime (Concept)**: Designed for minimal overhead. Most transformations happen at the JSX level.
- 📘 **TypeScript First**: Automatic types for nearly all Tailwind utilities.
- 🔌 **Framework Agnostic**: Works with Vite, Next.js, and any stack supporting custom JSX runtimes.

---


## 🛠 Setup

Configure your build tool to use `@itamarshdev/reactwind` as your JSX import source.

### Vite

```typescript
// vite.config.ts
export default defineConfig({
  esbuild: {
    jsxImportSource: '@itamarshdev/reactwind',
  },
});
```

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

---

## 📖 Usage Examples

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
    customClass && customClass
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

```tsx
<div bg-gradient="to-r" from="blue-500" via="purple-500" to="pink-500">
  Gradient background
</div>
```

---

## 🎯 Goals

ReactWind aims to improve the developer experience of styling with Tailwind CSS by:
1. **Removing syntactic noise**: Replacing long `className` strings with structured props.
2. **Improving modifiability**: Making it easier to toggle styles based on props without complex string manipulation.
3. **Enhancing discoverability**: leveraging TypeScript to provide autocompletion for styling props.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © [ItamarShDev](https://github.com/ItamarShDev/reactwind)
