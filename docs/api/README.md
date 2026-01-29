**reactwind**

***

# React JSX classNames

Adds a `classNames` prop to JSX elements that merges an array of class names
into the rendered `className`.

## Install

```sh
npm install react-jsx-classnames
```

## Usage

Configure your app to use this package as the JSX runtime:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react-jsx-classnames"
  }
}
```

Now you can use `classNames` alongside `className`:

```tsx
<button className="btn" classNames={["primary", "large"]}>
  Click me
</button>
```

This renders a `className` of `btn primary large`.
