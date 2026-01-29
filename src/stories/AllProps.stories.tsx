
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Showcase/All Props",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExpandedPropsShowcase: Story = {
  render: () => (
    <div flex flex-col gap="12" p="8" bg="slate-50">
      {}
      <section flex flex-col gap="4">
        <h2
          text="2xl"
          font="bold"
          classNames={["text-slate-800", "border-b", "border-slate-300"]}
          pb="2"
        >
          Typography Extensions
        </h2>
        <div flex flex-col gap="2">
          <p tracking="widest" text="slate-600">
            This text has widest tracking.
          </p>
          <p tracking="tighter" text="slate-600">
            This text has tighter tracking.
          </p>
          <p leading="loose" text="slate-600">
            This text has loose line height for better readability.
          </p>
          <p decoration="underline" text="blue-600" cursor="pointer">
            Underlined text with pointer cursor.
          </p>
          <p uppercase text="slate-500" font="black">
            Uppercase Text
          </p>
          <p capitalize text="slate-500">
            capitalized text example
          </p>
          <p align="right" text="slate-500" w="full" bg="slate-100" p="2">
            Right aligned text
          </p>
        </div>
      </section>

      {}
      <section flex flex-col gap="4">
        <h2
          text="2xl"
          font="bold"
          classNames={["text-slate-800", "border-b", "border-slate-300"]}
          pb="2"
        >
          Sizing & Backgrounds
        </h2>
        <div flex gap="4" items-end>
          <div
            w="32"
            h="32"
            bg="blue-500"
            rounded="lg"
            flex
            items-center
            justify-center
            text="white"
            shadow="lg"
          >
            Fixed W/H
          </div>
          <div
            min-w="48"
            h="24"
            bg="emerald-500"
            rounded="lg"
            flex
            items-center
            justify-center
            text="white"
            opacity="75"
          >
            Min-W + Opacity 75
          </div>
          <div
            w="full"
            max-w="lg"
            h="16"
            bg="purple-500"
            rounded="lg"
            flex
            items-center
            justify-center
            text="white"
          >
            Max-W Large
          </div>
        </div>
      </section>

      {}
      <section flex flex-col gap="4">
        <h2
          text="2xl"
          font="bold"
          classNames={["text-slate-800", "border-b", "border-slate-300"]}
          pb="2"
        >
          Borders & Rings
        </h2>
        <div flex gap="8" p="4">
          <button
            type="button"
            ring="4"
            classNames={["ring-blue-300"]}
            bg="blue-600"
            text="white"
            px="6"
            py="2"
            rounded="md"
          >
            Ring Button
          </button>
          <button
            type="button"
            outline="dashed"
            classNames={["outline-slate-400"]}
            text="slate-700"
            px="6"
            py="2"
            rounded="md"
          >
            Outline Button
          </button>
          <div
            divide="y"
            classNames={["divide-slate-300"]}
            border="slate-300"
            rounded="lg"
            overflow="hidden"
            w="64"
            bg="white"
          >
            <div p="3">Item 1</div>
            <div p="3">Item 2</div>
            <div p="3">Item 3</div>
          </div>
        </div>
      </section>

      {}
      <section flex flex-col gap="4">
        <h2
          text="2xl"
          font="bold"
          classNames={["text-slate-800", "border-b", "border-slate-300"]}
          pb="2"
        >
          Filters & Effects
        </h2>
        <div flex gap="4">
          <div
            w="24"
            h="24"
            bg="pink-500"
            rounded="lg"
            blur="sm"
            flex
            items-center
            justify-center
            text="white"
          >
            Blur
          </div>
          <div
            w="24"
            h="24"
            bg="orange-500"
            rounded="lg"
            brightness="150"
            flex
            items-center
            justify-center
            text="white"
          >
            Bright
          </div>
          <div
            w="24"
            h="24"
            bg="teal-500"
            rounded="lg"
            contrast="150"
            flex
            items-center
            justify-center
            text="white"
          >
            Contrast
          </div>
          <div
            w="24"
            h="24"
            bg="red-500"
            rounded="lg"
            grayscale="100"
            flex
            items-center
            justify-center
            text="white"
          >
            Grayscale
          </div>
          <div
            w="24"
            h="24"
            bg="blue-500"
            rounded="full"
            drop-shadow="xl"
            flex
            items-center
            justify-center
            text="white"
          >
            Drop Shadow
          </div>
        </div>
      </section>

      {}
      <section flex flex-col gap="4">
        <h2
          text="2xl"
          font="bold"
          classNames={["text-slate-800", "border-b", "border-slate-300"]}
          pb="2"
        >
          Transforms & Transitions (Hover me)
        </h2>
        <div flex gap="12" p="8">
          <div
            w="24"
            h="24"
            bg="indigo-600"
            rounded="lg"
            transition="all"
            duration="500"
            classNames={["hover:scale-125", "hover:rotate-12", "cursor-pointer"]}
            flex
            items-center
            justify-center
            text="white"
          >
            Hover Scale
          </div>
          <div
            w="24"
            h="24"
            bg="rose-600"
            rounded="lg"
            rotate="45"
            flex
            items-center
            justify-center
            text="white"
          >
            Static Rotate
          </div>
          <div
            w="24"
            h="24"
            bg="green-600"
            rounded="lg"
            skew="y-12"
            flex
            items-center
            justify-center
            text="white"
          >
            Static Skew
          </div>
        </div>
      </section>
    </div>
  ),
};
