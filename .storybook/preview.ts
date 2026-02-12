import type { Preview } from "@storybook/react-vite";
import "../src/stories/index.css";

const preview: Preview = {
    parameters: {
        docs: {
            codePanel: true,
            source: {
                type: "code",
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

