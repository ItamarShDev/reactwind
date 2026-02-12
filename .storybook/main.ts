import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-docs",
        "@storybook/addon-vitest"
    ],


    framework: {
        name: "@storybook/react-vite",
        options: {},
    },

    viteFinal: async (config) => {
        const { mergeConfig } = await import("vite");
        const path = await import("path");
        const cwd = process.cwd();
        const { default: tailwindcss } = await import("@tailwindcss/vite");

        return mergeConfig(config, {
            base: process.env.STORYBOOK_BASE_PATH || config.base,
            plugins: [tailwindcss()],
            esbuild: {
                jsxImportSource: "reactwind",
            },
            resolve: {
                alias: {
                    "reactwind/jsx-dev-runtime": path.join(cwd, "src/jsx-dev-runtime.ts"),
                    "reactwind/jsx-runtime": path.join(cwd, "src/jsx-runtime.ts"),
                    "reactwind": path.join(cwd, "src/index.ts"),
                },
            },
        });
    }
};
export default config;

