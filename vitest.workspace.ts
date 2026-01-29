import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
    "vitest.config.ts",
    {
        extends: "vitest.config.ts",
        plugins: [
            storybookTest({
                configDir: path.join(__dirname, ".storybook"),
            }),
        ],
        test: {
            name: "storybook",
            browser: {
                enabled: true,
                instances: [{ browser: "chromium" }],
                provider: "playwright",
            },
        },
    },
];
