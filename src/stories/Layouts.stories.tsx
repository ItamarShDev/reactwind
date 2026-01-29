import type { Meta, StoryObj } from "@storybook/react-vite";

const Dashboard = () => (
  <div flex flex-col h="screen" bg="gray-50">
    {}
    <div flex grow flex-row>
      {}
      <aside w="64" bg="white" border="r" classNames={["hidden", "md:block"]}>
        <div p="6" border="b">
          <h1 classNames={["text-2xl"]} font="bold" text="blue-600">
            Reactwind
          </h1>
        </div>
        <nav p="4">
          <ul flex flex-col gap="2">
            {["Home", "Table", "Forms", "Settings"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  block
                  p="3"
                  rounded="md"
                  text="gray-700"
                  classNames={["hover:bg-blue-50", "hover:text-blue-600"]}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {}
      <main grow flex flex-col>
        {}
        <header bg="white" border="b" p="4" flex justify-between items-center shadow="sm">
          <div classNames={["text-lg", "font-semibold"]}>Dashboard Overview</div>
          <div flex gap="4">
            <button
              bg="blue-600"
              text="white"
              px="4"
              py="2"
              rounded="full"
              classNames={["text-sm"]}
            >
              New Project
            </button>
          </div>
        </header>

        {}
        <div p="6" grow>
          <div grid classNames={["grid-cols-1", "md:grid-cols-3"]} gap="6">
            {}
            {["Users", "Revenue", "Active Sessions"].map((stat) => (
              <div key={stat} bg="white" p="6" rounded="lg" shadow="sm" border="gray-100">
                <div classNames={["text-sm"]} text="gray-500" font="medium">
                  {stat}
                </div>
                <div classNames={["text-3xl"]} font="bold" text="gray-900" mt="2">
                  1,234
                </div>
                <div classNames={["text-sm"]} text="green-600" mt="2">
                  ↑ 12% from last month
                </div>
              </div>
            ))}
          </div>

          <div mt="6" bg="white" rounded="lg" shadow="sm" p="6">
            <h2 text="lg" font-bold mb="4">
              Recent Activity
            </h2>
            <div h="64" bg="gray-50" rounded flex items-center justify-center text="gray-400">
              Chart Placeholder
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

const meta = {
  title: "Examples/Layouts",
  component: Dashboard,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DashboardLayout: Story = {};
