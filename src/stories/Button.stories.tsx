import type { Meta, StoryObj } from "@storybook/react-vite";
import { withClassNames } from "../runtime";

const Button = ({ className, classNames, label, ...props }: any) => {
  const finalProps = withClassNames({ className, classNames, ...props });
  return <button {...finalProps}>{label}</button>;
};

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    flex: { control: "boolean" },
    grid: { control: "boolean" },
    "items-center": { control: "boolean" },
    "justify-center": { control: "boolean" },
    "bg-blue-500": { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
    classNames: ["bg-blue-500", "text-white", "p-4", "rounded"],
  },
};

export const LayoutProps: Story = {
  args: {
    label: "Flex Button",
    classNames: ["bg-green-500", "text-white", "p-4", "rounded"],
    flex: true,
    "items-center": true,
    "justify-center": true,
  },
};
