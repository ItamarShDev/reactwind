import type { Preview } from "@storybook/react-vite";
import "../src/stories/index.css";

const preview: Preview = {
    parameters: {
        docs: {
            source: {
                type: "dynamic",
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;

