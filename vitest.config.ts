import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const srcFile = (relativePath: string) =>
  fileURLToPath(new URL(relativePath, import.meta.url));

export default defineConfig({
  esbuild: {
    jsxImportSource: "reactwind",
  },
  plugins: [],

  resolve: {
    alias: [
      {
        find: /^react-jsx-classnames$/,
        replacement: srcFile("./src/index.ts"),
      },
      {
        find: /^react-jsx-classnames\/jsx-runtime$/,
        replacement: srcFile("./src/jsx-runtime.ts"),
      },
      {
        find: /^react-jsx-classnames\/jsx-dev-runtime$/,
        replacement: srcFile("./src/jsx-dev-runtime.ts"),
      },
      {
        find: /^reactwind$/,
        replacement: srcFile("./src/index.ts"),
      },
      {
        find: /^reactwind\/jsx-runtime$/,
        replacement: srcFile("./src/jsx-runtime.ts"),
      },
      {
        find: /^reactwind\/jsx-dev-runtime$/,
        replacement: srcFile("./src/jsx-dev-runtime.ts"),
      },
    ],
  },
  test: {
    environment: "happy-dom",
    include: ["tests/**/*.test.ts", "tests/**/*.test.tsx"],
    setupFiles: [],
  },
});
