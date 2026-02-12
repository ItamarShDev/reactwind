import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Examples/SX Prop",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

/**
 * Basic usage — layout, spacing, colors in one clean object.
 */
export const BasicUsage: Story = {
  render: () => (
    <div
      sx={{
        flex: true,
        "items-center": true,
        "justify-center": true,
        gap: "4",
        p: 6,
        bg: "slate-100",
        rounded: "xl",
      }}
    >
      <div
        sx={{
          w: "16",
          h: "16",
          bg: "blue-500",
          rounded: "lg",
          flex: true,
          "items-center": true,
          "justify-center": true,
          text: "white",
          font: "bold",
          shadow: "md",
        }}
      >
        A
      </div>
      <div
        sx={{
          w: "16",
          h: "16",
          bg: "emerald-500",
          rounded: "full",
          flex: true,
          "items-center": true,
          "justify-center": true,
          text: "white",
          font: "bold",
          shadow: "md",
        }}
      >
        B
      </div>
      <div
        sx={{
          w: "16",
          h: "16",
          bg: "purple-500",
          rounded: "none",
          flex: true,
          "items-center": true,
          "justify-center": true,
          text: "white",
          font: "bold",
          shadow: "md",
        }}
      >
        C
      </div>
    </div>
  ),
};

/**
 * Modifiers inside sx — hover, focus, dark, and responsive.
 */
export const WithModifiers: Story = {
  render: () => (
    <div sx={{ flex: true, "flex-col": true, gap: "4", p: 4 }}>
      <button
        sx={{
          bg: "blue-600",
          text: "white",
          px: 6,
          py: 3,
          rounded: "lg",
          font: "semibold",
          transition: "all",
          duration: "200",
          cursor: "pointer",
          hover: { bg: "blue-700", shadow: "lg", scale: "105" },
          active: { scale: "95" },
        }}
      >
        Hover & press me
      </button>

      <input
        type="text"
        placeholder="Focus on me..."
        sx={{
          border: "gray-300",
          rounded: "lg",
          px: 4,
          py: 2,
          outline: "none",
          transition: "all",
          duration: "200",
          focus: { border: "blue-500", ring: "2" },
        }}
      />

      <div
        sx={{
          p: 4,
          bg: "white",
          rounded: "lg",
          shadow: "sm",
          dark: { bg: "slate-800", text: "white" },
        }}
      >
        I adapt to dark mode ☀️🌙
      </div>
    </div>
  ),
};

/**
 * Composable style objects — the killer feature of sx.
 */
export const Composable: Story = {
  render: () => {
    // Reusable style presets
    const card = {
      rounded: "xl" as const,
      shadow: "md" as const,
      p: 6,
      bg: "white",
      hover: { shadow: "xl", scale: "102" },
      transition: "all" as const,
      duration: "300",
    };

    const badge = {
      px: 3,
      py: 1,
      rounded: "full" as const,
      text: "white",
      font: "semibold",
      classNames: ["text-xs"],
    };

    return (
      <div sx={{ flex: true, gap: "6", p: 4, "flex-wrap": true }}>
        <div sx={{ ...card, "min-w": "48" }}>
          <h3 font="bold" text="gray-900" classNames={["text-lg"]}>
            Default Card
          </h3>
          <p text="gray-500" mt="2" classNames={["text-sm"]}>
            Spread the base style
          </p>
          <span sx={{ ...badge, bg: "blue-500" }} classNames={["text-xs", "mt-3", "inline-block"]}>
            Blue
          </span>
        </div>

        <div sx={{ ...card, "min-w": "48", bg: "slate-50" }}>
          <h3 font="bold" text="gray-900" classNames={["text-lg"]}>
            Custom BG Card
          </h3>
          <p text="gray-500" mt="2" classNames={["text-sm"]}>
            Override just one property
          </p>
          <span
            sx={{ ...badge, bg: "emerald-500" }}
            classNames={["text-xs", "mt-3", "inline-block"]}
          >
            Green
          </span>
        </div>

        <div
          sx={{
            ...card,
            "min-w": "48",
            "bg-gradient": "to-br",
            from: "purple-500",
            to: "pink-500",
            text: "white",
          }}
        >
          <h3 font="bold" classNames={["text-lg"]}>
            Gradient Card
          </h3>
          <p classNames={["text-sm", "opacity-80"]} mt="2">
            Extend with gradients
          </p>
          <span
            sx={{ ...badge, bg: "white", text: "purple-600" }}
            classNames={["text-xs", "mt-3", "inline-block"]}
          >
            Premium
          </span>
        </div>
      </div>
    );
  },
};

/**
 * Responsive breakpoints inside sx.
 */
export const Responsive: Story = {
  render: () => (
    <div
      sx={{
        grid: true,
        "grid-cols": "1",
        gap: "4",
        p: 4,
        md: { "grid-cols": "2", gap: "6" },
        lg: { "grid-cols": "3", gap: "8" },
      }}
    >
      {["Rose", "Teal", "Amber"].map((color, i) => (
        <div
          key={i}
          sx={{
            p: 6,
            rounded: "xl",
            bg: `${color.toLowerCase()}-100`,
            text: `${color.toLowerCase()}-800`,
            font: "semibold",
          }}
        >
          {color} card — resize the viewport!
        </div>
      ))}
    </div>
  ),
};

/**
 * Mixing sx with top-level props — they compose together.
 */
export const MixedWithProps: Story = {
  render: () => (
    <div flex gap="4" p={4}>
      <div
        className="custom-class"
        classNames={["text-sm"]}
        sx={{
          bg: "indigo-500",
          text: "white",
          p: 4,
          rounded: "lg",
          hover: { bg: "indigo-600" },
        }}
        shadow="md"
      >
        sx + props + classNames + className all merged
      </div>
    </div>
  ),
};
