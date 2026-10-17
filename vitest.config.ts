import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

const srcFile = (relativePath: string) => fileURLToPath(new URL(relativePath, import.meta.url));

export default defineConfig({
  oxc: { jsx: { importSource: "reactwind" } },
  resolve: {
    alias: [
      { find: /^reactwind\/jsx-runtime$/, replacement: srcFile("./src/jsx-runtime.ts") },
      { find: /^reactwind\/jsx-dev-runtime$/, replacement: srcFile("./src/jsx-dev-runtime.ts") },
      { find: /^reactwind$/, replacement: srcFile("./src/index.ts") },
    ],
  },
  test: {
    projects: [
      {
        extends: true,
        test: {
          name: "unit",
          environment: "happy-dom",
          include: ["tests/**/*.test.ts", "tests/**/*.test.tsx"],
        },
      },
      {
        extends: true,
        plugins: [storybookTest({ configDir: srcFile("./.storybook") })],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
