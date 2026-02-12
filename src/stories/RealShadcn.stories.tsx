import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../components/ui/button";

const meta = {
  title: "Composition/Real Shadcn Components",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      codePanel: true,
      source: {
        type: "code",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShadcnComposability: Story = {
  render: () => (
    <div p="12" bg="slate-50" min-h="screen" flex flex-col gap="12">
      <div>
        <h1 text="3xl" font="bold" mb="2">
          Shadcn + ReactWind
        </h1>
        <p text="slate-500" max-w="2xl">
          This story uses a "Real" Shadcn Button component. You can see how ReactWind allows you to
          tweak its styling (colors, padding, layout) using props, even though the component only
          expects a <code>className</code>.
        </p>
      </div>

      <div flex flex-col gap="8">
        {/* Example 1: Basic Usage */}
        <section flex flex-col gap="4">
          <h2 font="semibold" text="lg">
            1. Basic Shadcn Button
          </h2>
          <div flex gap="4">
            <Button>Default Shadcn</Button>
            <Button variant="outline">Outline Shadcn</Button>
          </div>
        </section>

        {/* Example 2: ReactWind Enhancements */}
        <section flex flex-col gap="4">
          <h2 font="semibold" text="lg">
            2. ReactWind Enhanced Shadcn
          </h2>
          <div flex gap="4">
            {/* Change color and padding via ReactWind props */}
            <Button
              bg="orange-500"
              text="white"
              px="8"
              rounded="full"
              classNames={["hover:bg-orange-600", "shadow-xl", "shadow-orange-500/20"]}
            >
              Custom Orange Button
            </Button>

            {/* Change layout and add border via props */}
            <Button
              variant="ghost"
              border
              classNames={["border-indigo-200", "hover:border-indigo-500"]}
              flex
              gap="2"
              items-center
            >
              <span w="2" h="2" bg="indigo-500" rounded="full"></span>
              Status: Online
            </Button>
          </div>
        </section>

        {/* Example 3: Layout Integration */}
        <section flex flex-col gap="4">
          <h2 font="semibold" text="lg">
            3. Complex Layout Tweaks
          </h2>
          <div bg="white" p="6" rounded="2xl" shadow="lg" flex flex-col gap="6" max-w="md">
            <div flex justify-between items-center>
              <h3 font="bold" text="xl">
                New Post
              </h3>
              <Button
                size="icon"
                bg="gray-100"
                text="gray-500"
                rounded="full"
                classNames={["hover:bg-gray-200"]}
              >
                ✕
              </Button>
            </div>
            <p text="gray-600">
              Draft your next masterpiece here. ReactWind props help you position these Shadcn
              buttons exactly where you want them.
            </p>
            <div flex justify="end" gap="2">
              <Button variant="ghost">Cancel</Button>
              <Button bg="blue-600" hover-bg="blue-700" px="6">
                Publish
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  ),
};
