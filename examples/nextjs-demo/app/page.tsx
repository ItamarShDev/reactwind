"use client";

import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(false);

  return (
    <div flex flex-col items="center" justify="center" min-h="screen" bg="gray-50" dark-bg="black" p={8} font="sans">
      <main flex flex-col items="center" gap={8} max-w="2xl" w="full">
        {/* Safelist for JIT:
            text-4xl font-bold tracking-tight text-gray-900 
            text-lg text-gray-600 text-center
            bg-gray-200 p-1 rounded font-mono
            grid grid-cols-1 md:grid-cols-2 gap-6
            bg-white p-6 rounded-xl border border-gray-200
            rounded-md border-blue-100 bg-blue-50
            hover:shadow-md transition-all cursor-pointer
            text-blue-600 text-gray-400
            text-sm font-medium
            px-6 py-3 rounded-full hover:bg-gray-800
            bg-gray-50 dark:bg-black
            text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100
        */}
        <h1 text="4xl" font="bold" tracking="tight" className="text-gray-900 dark:text-white">
          ReactWind + Next.js Demo
        </h1>

        <p text="lg" className="text-gray-600 dark:text-gray-400 text-center">
          This is a demo of <code font="mono" bg="gray-200" dark-bg="gray-800" dark-text="gray-200" p={1} rounded>reactwind</code> running in a Next.js App Router project.
          It allows you to use Tailwind utilities as props!
        </p>

        <div
          grid grid-cols="1" md-grid-cols="2" gap={6} w="full"
        >
          <Card title="Shorthand Props">
            <p mb={4}>
              Directly perform styling with props like <code bg="gray-100" p={1} rounded>bg="white"</code>, <code bg="gray-100" p={1} rounded>flex</code>, etc.
            </p>
            <div bg="blue-50" dark-bg="blue-900/20" p={4} rounded="md" className="border" border="blue-100" dark-border="blue-800" text="blue-900" dark-text="blue-100">
              I'm styled with props!
            </div>
          </Card>

          <div
            bg="white"
            p={6}
            rounded="xl"
            shadow="sm"
            className="border"
            border="gray-200"
            hover-shadow="md"
            transition-all
            cursor="pointer"
            onClick={() => setActive(!active)}
            classNames={[
              'transform duration-300',
              active ? 'scale-105 ring-2 ring-blue-500' : 'scale-100'
            ]}
          >
            <h2 text="xl" font="semibold" mb={2}>Interactivity & Arrays</h2>
            <p mb={4} text="gray-600">
              Click me to toggle state! I use array-based classNames for conditional styling.
            </p>
            <div
              text="sm"
              font="medium"
              className={active ? 'text-blue-600' : 'text-gray-400'}
            >
              State: {active ? 'Active' : 'Inactive'}
            </div>
          </div>
        </div>

        <div flex gap={4} mt={8}>
          <a
            href="https://github.com/itamarsharify/reactwind"
            target="_blank"
            rel="noopener noreferrer"
            bg="gray-900"
            text="white"
            px={6}
            py={3}
            rounded="full"
            font="medium"
            hover-bg="gray-800"
            transition
          >
            View on GitHub
          </a>
        </div>
      </main>
    </div>
  );
}

function Card({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div bg="white" dark-bg="gray-900" p={6} rounded="xl" shadow="sm" className="border" border="gray-200" dark-border="gray-800">
      <h2 className="text-xl" font="semibold" mb={4} text="gray-800" dark-text="gray-100">{title}</h2>
      {children}
    </div>
  )
}
