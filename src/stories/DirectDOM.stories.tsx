import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Examples/DirectDOM",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Playground: Story = {
  args: {
    children: "Playground Element",
    bg: "blue-500",
    text: "white",
    p: "4",
    rounded: "lg",
    shadow: "md",
    w: "32",
    h: "32",
    flex: true,
    "items-center": true,
    "justify-center": true,
  },
  argTypes: {
    bg: { control: "text" },
    text: { control: "text" },
    p: { control: "text" },
    rounded: { control: "select", options: ["none", "sm", "md", "lg", "full"] },
    shadow: { control: "select", options: ["none", "sm", "md", "lg", "xl"] },
    flex: { control: "boolean" },
  },
  render: (args) => <div {...args} />,
};

export const ColorsAndSpacing: Story = {
  render: () => (
    <div flex flex-col gap="4">
      {}
      <div flex gap="4" items-center>
        <div w="16" h="16" bg="blue-500" rounded="md" flex items-center justify-center text="white">
          Box
        </div>
        <div
          w="16"
          h="16"
          bg="red-500"
          rounded="full"
          flex
          items-center
          justify-center
          text="white"
        >
          Circle
        </div>
        <div
          w="16"
          h="16"
          bg="green-500"
          rounded="none"
          flex
          items-center
          justify-center
          text="white"
        >
          Square
        </div>
      </div>
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div flex flex-col gap="2">
      <h1 classNames={["text-4xl"]} font="extrabold" text="gray-900">
        Heading 1
      </h1>
      <h2 classNames={["text-3xl"]} font="bold" text="gray-800">
        Heading 2
      </h2>
      <h3 classNames={["text-2xl"]} font="semibold" text="gray-700">
        Heading 3
      </h3>
      <p classNames={["text-base", "max-w-lg"]} text="gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor{" "}
        <span font="bold" text="indigo-600">
          incididunt
        </span>{" "}
        ut labore et dolore magna aliqua.
      </p>
      <a href="#" text="blue-500" classNames={["underline"]}>
        Linked Text
      </a>
    </div>
  ),
};
