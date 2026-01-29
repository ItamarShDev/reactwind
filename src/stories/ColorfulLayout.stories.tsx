
import type { Meta, StoryObj } from "@storybook/react-vite";

const ColorfulDashboard = () => (
    <div flex flex-col h="screen" bg="slate-900" text="white">
        {}
        <nav
            flex
            items-center
            justify-between
            p="6"
            bg="slate-800"
            border="b"
            classNames={["border-slate-700"]}
        >
            <div flex items-center gap="4">
                <div
                    w="10"
                    h="10"
                    bg="indigo-500"
                    rounded="lg"
                    flex
                    items-center
                    justify-center
                    font="bold"
                    shadow="lg"
                    classNames={["text-xl", "shadow-indigo-500/50"]}
                >
                    R
                </div>
                <span classNames={["text-xl"]} font="bold" tracking="tight">
                    Reactwind
                </span>
            </div>
            <div flex gap="6" text="slate-400" font="medium">
                <a href="/" classNames={["hover:text-white", "transition-colors"]}>
                    Products
                </a>
                <a href="/" classNames={["hover:text-white", "transition-colors"]}>
                    Solutions
                </a>
                <a href="/" classNames={["hover:text-white", "transition-colors"]}>
                    Docs
                </a>
            </div>
            <button
                type='button'
                bg="indigo-600"
                px="5"
                py="2"
                rounded="full"
                font="semibold"
                shadow="lg"
                classNames={["hover:bg-indigo-500", "transition-all", "hover:scale-105"]}
            >
                Get Started
            </button>
        </nav>

        {}
        <div flex grow items-center justify-center relative overflow="hidden">
            {}
            <div
                absolute
                w="96"
                h="96"
                bg="purple-500"
                rounded="full"
                classNames={["blur-3xl", "opacity-20", "-top-20", "-left-20"]}
            ></div>
            <div
                absolute
                w="96"
                h="96"
                bg="blue-500"
                rounded="full"
                classNames={["blur-3xl", "opacity-20", "-bottom-20", "-right-20"]}
            ></div>

            <div
                relative
                z="10"
                flex
                flex-col
                items-center
                max-w="4xl"
                classNames={["text-center"]}
                p="8"
            >
                <div
                    inline-flex
                    items-center
                    gap="2"
                    px="3"
                    py="1"
                    rounded="full"
                    bg="slate-800"
                    text="indigo-400"
                    classNames={["text-sm", "border-slate-700"]}
                    font="medium"
                    mb="6"
                    border="slate-700"
                >
                    <span w="2" h="2" rounded="full" bg="indigo-400"></span>
                    v2.0 is now available
                </div>

                <h1 classNames={["text-6xl"]} font="extrabold" mb="6" leading="tight">
                    Build beautiful UIs <br />
                    <span
                        text="transparent"
                        classNames={["bg-clip-text", "bg-gradient-to-r", "from-indigo-400", "to-cyan-400"]}
                    >
                        at the speed of light
                    </span>
                </h1>

                <p classNames={["text-xl"]} text="slate-400" mb="10" max-w="2xl">
                    Reactwind allows you to use Tailwind CSS utility classes directly as props on your React
                    components. Clean, type-safe, and expressively fast.
                </p>

                <div flex gap="4">
                    <button
                        type='button'
                        h="12"
                        px="8"
                        rounded="lg"
                        bg="white"
                        text="slate-900"
                        font="bold"
                        flex
                        items-center
                        gap="2"
                        classNames={["hover:bg-gray-100"]}
                    >
                        Start Building
                    </button>
                    <button
                        type='button'
                        h="12"
                        px="8"
                        rounded="lg"
                        bg="slate-800"
                        text="white"
                        font="semibold"
                        border="slate-700"
                        classNames={["hover:bg-slate-700"]}
                    >
                        Documentation
                    </button>
                </div>

                {}
                <div
                    grid
                    gap="8"
                    mt="20"
                    w="full"
                    classNames={["grid-cols-1", "md:grid-cols-3", "text-left"]}
                >
                    {[
                        { title: "Zero Config", color: "bg-emerald-500", icon: "⚡" },
                        { title: "Type Safe", color: "bg-blue-500", icon: "🛡️" },
                        { title: "Dark Mode", color: "bg-orange-500", icon: "🌙" },
                    ].map((feature) => (
                        <div
                            key={feature.title}
                            p="6"
                            rounded="2xl"
                            bg="slate-800/50"
                            border="slate-700"
                            classNames={["backdrop-blur-sm", "hover:bg-slate-800", "transition-colors"]}
                        >
                            <div
                                w="10"
                                h="10"
                                rounded="lg"
                                flex
                                items-center
                                justify-center
                                classNames={[
                                    "text-xl",
                                    feature.color,
                                    "bg-opacity-20",
                                    `text-${feature.color.split("-")[1]}-400`,
                                ]}
                                mb="4"
                            >
                                {feature.icon}
                            </div>
                            <h3 classNames={["text-lg"]} font="bold" mb="2" text="white">
                                {feature.title}
                            </h3>
                            <p text="slate-400" classNames={["text-sm"]}>
                                Extremely fast integration with your existing React workflow.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const meta = {
    title: "Examples/ColorfulLayout",
    component: ColorfulDashboard,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof ColorfulDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkModeHero: Story = {};
