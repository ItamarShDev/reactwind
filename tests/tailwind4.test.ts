// @vitest-environment node
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { compile } from "tailwindcss";
import { withClassNames } from "../src/runtime";
import { TAILWIND4_VALUE_PROPS } from "../src/tailwind4";
import { MODIFIER_NAMES } from "../src/props";

const theme = readFileSync(
  new URL("../node_modules/tailwindcss/theme.css", import.meta.url),
  "utf8",
);
const samples: Record<keyof typeof TAILWIND4_VALUE_PROPS, string | number> = {
  ps: 4,
  pe: 4,
  pbs: 4,
  pbe: 4,
  ms: 4,
  me: 4,
  mbs: 4,
  mbe: 4,
  "inset-s": 4,
  "inset-e": 4,
  "inset-bs": 4,
  "inset-be": 4,
  "border-s": 2,
  "border-e": 2,
  "border-bs": 2,
  "border-be": 2,
  "rounded-s": "lg",
  "rounded-e": "lg",
  "rounded-ss": "lg",
  "rounded-se": "lg",
  "rounded-es": "lg",
  "rounded-ee": "lg",
  "bg-linear": "to-r",
  "bg-radial": "[at_50%_75%]",
  "bg-conic": "180",
  "inset-shadow": "sm",
  "inset-ring": 2,
  "text-shadow": "sm",
  mask: "none",
  "mask-linear": 45,
  "mask-radial": "closest-side",
  "mask-conic": "from-50%",
  "mask-type": "alpha",
  perspective: "normal",
  "perspective-origin": "center",
  "rotate-x": 45,
  "rotate-y": 45,
  "rotate-z": 45,
  "scale-z": 125,
  "translate-x": 4,
  "translate-y": 4,
  "translate-z": 4,
  backface: "hidden",
  transform: "3d",
  scrollbar: "thin",
  "scrollbar-thumb": "blue-500",
  "scrollbar-track": "slate-100",
  "scrollbar-gutter": "stable",
  zoom: 125,
  tab: 4,
};

describe("Tailwind 4 utilities", () => {
  it.each(["bg-gradient", "bg-linear"])("compiles the %s gradient shorthand", async (prop) => {
    const candidate = `${prop}-to-r`;
    expect(withClassNames({ [prop]: "to-r" })).toEqual({ className: candidate });
    const compiler = await compile(`${theme}\n@tailwind utilities;`);
    const css = compiler.build([candidate]);
    expect(css).toContain(`.${candidate} {`);
    expect(css).toContain("background-image: linear-gradient(var(--tw-gradient-stops))");
  });

  it.each(MODIFIER_NAMES)("compiles the %s modifier to CSS", async (modifier) => {
    const candidate = `${modifier}:bg-blue-500`;
    expect(withClassNames({ [`${modifier}-bg`]: "blue-500" })).toEqual({ className: candidate });
    const compiler = await compile(`${theme}\n@tailwind utilities;`);
    const css = compiler.build([candidate]);
    expect(css).toContain("\\:bg-blue-500");
    expect(css).toContain("background-color: var(--color-blue-500)");
  });

  it.each(Object.entries(samples))("compiles the %s shorthand to CSS", async (prop, value) => {
    const result = withClassNames({ [prop]: value, id: "fixture" });
    const candidate = `${TAILWIND4_VALUE_PROPS[prop as keyof typeof samples]}-${value}`;
    expect(result).toEqual({ id: "fixture", className: candidate });
    const compiler = await compile(`${theme}\n@tailwind utilities;`);
    const escaped = candidate.replace(/[^a-zA-Z0-9_-]/g, (char) => `\\${char}`);
    expect(compiler.build([candidate])).toContain(`.${escaped} {`);
  });

  it.each(["@container", "@container-size"])("compiles the %s flag", async (prop) => {
    expect(withClassNames({ [prop]: true })).toEqual({ className: prop });
    const compiler = await compile("@tailwind utilities;");
    expect(compiler.build([prop])).toContain("container-type:");
  });

  it("supports hyphenated modifier names and nested new utilities", () => {
    expect(
      withClassNames({
        "motion-safe-rotate-y": 12,
        "pointer-coarse-ps": 8,
        rtl: { ps: 4, hover: { "text-shadow": "sm" } },
      }),
    ).toEqual({
      className: "rtl:ps-4 rtl:hover:text-shadow-sm motion-safe:rotate-y-12 pointer-coarse:ps-8",
    });
  });

  it("does not leak disabled flags to the DOM", () => {
    expect(
      withClassNames({
        "@container-size": false,
        flex: false,
        rounded: false,
        "motion-safe-flex": false,
        "focus-visible-rounded": false,
        id: "test",
      }),
    ).toEqual({ id: "test" });
  });

  it("flattens conditional class maps and nested arrays without emitting falsy values", () => {
    expect(
      withClassNames({
        className: "base",
        flex: true,
        classNames: [null, false, undefined, ["text-white", { "font-bold": true, hidden: false }]],
      }),
    ).toEqual({ className: "base flex text-white font-bold" });
  });
});
