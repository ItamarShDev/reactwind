# 🚀 ReactWind

[![Version](https://img.shields.io/npm/v/reactwind)](https://www.npmjs.com/package/reactwind)
[![License](https://img.shields.io/npm/l/reactwind)](https://github.com/reactwind/reactwind/blob/main/LICENSE)
[![Demo](https://img.shields.io/badge/storybook-demo-FF4785?logo=storybook)](https://itamarsharify.github.io/reactwind/storybook/index.html)

**ReactWind** is a JSX runtime wrapper that brings the power of Tailwind CSS shorthands and array-based classNames directly to your React components. No more template literal spaghetti or complex utility merges.

---

## ✨ Features

- 🎯 **Prop-based Styling**: Use Tailwind utilities as props: `<div flex bg="blue-500" p={4} />`.
- 🧬 **Array ClassNames**: Pass classes as clean arrays: `classNames={['text-center', isActive && 'font-bold']}`.
- 💨 **Zero Runtime (Concept)**: Designed for minimal overhead. Most transformations happen at the JSX level.
- 📘 **TypeScript First**: Automatic types for nearly all Tailwind utilities.
- 🔌 **Framework Agnostic**: Works with Vite, Next.js, and any stack supporting custom JSX runtimes.

---


## 🛠 Setup

Configure your build tool to use `reactwind` as your JSX import source.

### Vite

```typescript
// vite.config.ts
export default defineConfig({
  esbuild: {
    jsxImportSource: 'reactwind',
  },
});
```

### TypeScript

```json
// tsconfig.json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "reactwind"
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

MIT © [reactwind](https://github.com/reactwind/reactwind)
