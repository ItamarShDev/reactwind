import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

const meta = {
  title: "Showcase/Tailwind 4",
  parameters: { layout: "padded" },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const ModernUtilities: Story = {
  render: () => (
    <section flex flex-col gap={6} max-w="lg">
      <h2 text="2xl" font="bold" text-shadow="sm">
        Tailwind 4 utilities
      </h2>
      <div dir="rtl" bg="sky-50" ps={8} pe={4} pbs={4} pbe={4} rounded="lg" data-testid="logical">
        Logical spacing follows the reading direction.
      </div>
      <div
        overflow="auto"
        h={24}
        scrollbar="thin"
        scrollbar-thumb="sky-500"
        scrollbar-track="sky-50"
        scrollbar-gutter="stable"
      >
        <p p={4} zoom={125} data-testid="zoom">
          Native scrollbars and zoom
        </p>
        <p p={4}>Scroll to see more content.</p>
        <p p={4}>No scrollbar plugin required.</p>
      </div>
      <button
        type="button"
        bg="sky-600"
        text="white"
        px={4}
        py={2}
        rounded="lg"
        motion-safe={{ hover: { "text-shadow": "sm" } }}
        classNames={[["font-medium"], { "cursor-pointer": true }]}
      >
        Motion-aware hover
      </button>
    </section>
  ),
  play: async ({ canvas }) => {
    const logical = canvas.getByTestId("logical");
    await expect(logical).toHaveStyle({ paddingInlineStart: "32px", paddingBlockStart: "16px" });
    await expect(canvas.getByTestId("zoom")).toHaveStyle({ zoom: "1.25" });
    await expect(canvas.getByRole("heading").className).toContain("text-shadow-sm");
    await expect(canvas.getByRole("button").className).toContain(
      "motion-safe:hover:text-shadow-sm",
    );
  },
};
