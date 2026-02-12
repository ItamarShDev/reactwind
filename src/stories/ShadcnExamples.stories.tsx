import type { Meta, StoryObj } from "@storybook/react-vite";

const Button = ({ variant = "default", size = "default", children, ...props }: any) => {
  const variants = {
    default: { bg: "slate-900", text: "slate-50", "hover-bg": "slate-900/90" },
    destructive: { bg: "red-500", text: "slate-50", "hover-bg": "red-500/90" },
    outline: {
      border: true,
      "border-slate-200": true,
      bg: "white",
      "hover-bg": "slate-100",
      text: "slate-900",
    },
    secondary: { bg: "slate-100", text: "slate-900", "hover-bg": "slate-100/80" },
    ghost: { "hover-bg": "slate-100", "hover-text": "slate-900", text: "slate-600" },
    link: { text: "slate-900", underline: true, "underline-offset": "4" },
  } as any;

  const sizes = {
    default: { h: "10", px: "4", py: "2" },
    sm: { h: "9", px: "3", rounded: "md" },
    lg: { h: "11", px: "8", rounded: "md" },
    icon: { h: "10", w: "10" },
  } as any;

  const v = variants[variant] || variants.default;
  const s = sizes[size] || sizes.default;

  return (
    <button
      inline-flex
      items-center
      justify-center
      rounded="md"
      font="medium"
      transition="colors"
      duration="200"
      focus-visible-outline-none
      focus-visible-ring="2"
      focus-visible-ring-slate-950
      disabled-pointer-events-none
      disabled-opacity="50"
      {...v}
      {...s}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ title, description, content, footer }: any) => (
  <div
    rounded="xl"
    border
    bg="white"
    text="slate-950"
    shadow="sm"
    classNames={["border-slate-200"]}
  >
    <div flex flex-col p="6" gap="1.5">
      <h3 font="semibold" tracking="tight" classNames={["text-2xl", "leading-none"]}>
        {title}
      </h3>
      <p classNames={["text-sm"]} text="slate-500">
        {description}
      </p>
    </div>
    <div p="6" pt="0">
      {content}
    </div>
    {footer && (
      <div flex items-center p="6" pt="0">
        {footer}
      </div>
    )}
  </div>
);

const Input = (props: any) => (
  <input
    flex
    h="10"
    w="full"
    rounded="md"
    border
    bg="white"
    px="3"
    py="2"
    classNames={[
      "text-sm",
      "border-slate-200",
      "file:border-0",
      "file:bg-transparent",
      "file:text-sm",
      "file:font-medium",
      "placeholder:text-slate-500",
      "focus-visible:outline-none",
      "focus-visible:ring-2",
      "focus-visible:ring-slate-950",
      "disabled:cursor-not-allowed",
      "disabled:opacity-50",
    ]}
    {...props}
  />
);

const meta = {
  title: "Examples/Shadcn-In-ReactWind",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      source: {
        type: "code",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShadcnComponents: Story = {
  render: () => (
    <div p="8" bg="slate-50" min-h="screen" flex flex-col gap="8">
      <div flex flex-col gap="2">
        <h1 text="3xl" font="bold">
          Shadcn-style Components
        </h1>
        <p text="slate-500">
          Built entirely with ReactWind props. No CSS files, no complex utility merges.
        </p>
      </div>

      <div grid classNames={["grid-cols-1", "md:grid-cols-2"]} gap="8">
        <Card
          title="Authentication"
          description="Enter your email below to create your account"
          content={
            <div flex flex-col gap="4">
              <div flex flex-col gap="2">
                <label text="sm" font="medium">
                  Email
                </label>
                <Input type="email" placeholder="m@example.com" />
              </div>
              <div flex flex-col gap="2">
                <label text="sm" font="medium">
                  Password
                </label>
                <Input type="password" />
              </div>
            </div>
          }
          footer={<Button w="full">Create Account</Button>}
        />

        <div flex flex-col gap="6">
          <Card
            title="Buttons"
            description="Different button variants and sizes."
            content={
              <div flex flex-wrap gap="4">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            }
          />

          <Card
            title="Sizes"
            description="Button size variations."
            content={
              <div flex items="center" gap="4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <span text="lg">+</span>
                </Button>
              </div>
            }
          />
        </div>
      </div>
    </div>
  ),
};
