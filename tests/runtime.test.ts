import { describe, expect, it } from "vitest";

import { withClassNames } from "../src/runtime";

describe("withClassNames", () => {
  it("merges className with classNames", () => {
    const result = withClassNames({
      className: "btn",
      classNames: ["primary", "large"],
      id: "cta",
    });

    expect(result).toEqual({
      className: "btn primary large",
      id: "cta",
    });
  });

  it("drops classNames when empty", () => {
    const result = withClassNames({
      className: "btn",
      classNames: [],
    });

    expect(result).toEqual({
      className: "btn",
    });
  });

  it("handles missing className", () => {
    const result = withClassNames({
      classNames: ["primary", "large"],
    });

    expect(result).toEqual({
      className: "primary large",
    });
  });

  it("filters falsy entries", () => {
    const result = withClassNames({
      className: "btn",
      classNames: ["", "primary", undefined, "large"],
    });

    expect(result).toEqual({
      className: "btn primary large",
    });
  });

  it("returns original props when classNames is not present", () => {
    const props = { className: "btn" };
    const result = withClassNames(props);

    expect(result).toBe(props);
  });

  it("handles boolean layout props", () => {
    const result = withClassNames({
      className: "existing",
      flex: true,
      "items-center": true,
      "justify-center": true,
      hidden: false,
    });


    expect(result).not.toHaveProperty("flex");
    expect(result).not.toHaveProperty("items-center");


    expect(result.className).toContain("flex");
    expect(result.className).toContain("items-center");
    expect(result.className).toContain("justify-center");
    expect(result.className).toContain("existing");
    expect(result.className).not.toContain("hidden");
  });

  it("mixes classNames and layout props", () => {
    const result = withClassNames({
      classNames: ["text-red-500"],
      grid: true,
      "gap-4": false,
    });

    expect(result.className).toBe("grid text-red-500");
  });
});

describe("sx prop", () => {
  it("handles basic value props via sx", () => {
    const result = withClassNames({
      sx: { bg: "blue-500", text: "white", p: 4 },
    });

    expect(result.className).toContain("bg-blue-500");
    expect(result.className).toContain("text-white");
    expect(result.className).toContain("p-4");
    expect(result).not.toHaveProperty("sx");
  });

  it("handles layout boolean props via sx", () => {
    const result = withClassNames({
      sx: { flex: true, "items-center": true, "justify-between": true },
    });

    expect(result.className).toContain("flex");
    expect(result.className).toContain("items-center");
    expect(result.className).toContain("justify-between");
    expect(result).not.toHaveProperty("sx");
  });

  it("handles modifier objects inside sx", () => {
    const result = withClassNames({
      sx: {
        bg: "blue-500",
        hover: { bg: "blue-700", shadow: "lg" },
        dark: { bg: "slate-800", text: "white" },
      },
    });

    expect(result.className).toContain("bg-blue-500");
    expect(result.className).toContain("hover:bg-blue-700");
    expect(result.className).toContain("hover:shadow-lg");
    expect(result.className).toContain("dark:bg-slate-800");
    expect(result.className).toContain("dark:text-white");
  });

  it("merges sx with existing className", () => {
    const result = withClassNames({
      className: "custom-class",
      sx: { p: 4, bg: "red-500" },
    });

    expect(result.className).toContain("custom-class");
    expect(result.className).toContain("p-4");
    expect(result.className).toContain("bg-red-500");
  });

  it("merges sx with existing classNames array", () => {
    const result = withClassNames({
      classNames: ["text-sm", "leading-tight"],
      sx: { flex: true, gap: "4" },
    });

    expect(result.className).toContain("text-sm");
    expect(result.className).toContain("leading-tight");
    expect(result.className).toContain("flex");
    expect(result.className).toContain("gap-4");
  });

  it("composes sx with top-level props", () => {
    const result = withClassNames({
      shadow: "md",
      sx: { bg: "indigo-500", p: 4, rounded: "lg" },
    });

    expect(result.className).toContain("shadow-md");
    expect(result.className).toContain("bg-indigo-500");
    expect(result.className).toContain("p-4");
    expect(result.className).toContain("rounded-lg");
  });

  it("sx props override same top-level props", () => {
    const result = withClassNames({
      bg: "red-500",
      sx: { bg: "blue-500" },
    });

    // sx spreads after rest, so sx wins
    expect(result.className).toContain("bg-blue-500");
    expect(result.className).not.toContain("bg-red-500");
  });

  it("handles responsive breakpoints inside sx", () => {
    const result = withClassNames({
      sx: {
        "grid-cols": "1",
        md: { "grid-cols": "2" },
        lg: { "grid-cols": "3" },
      },
    });

    expect(result.className).toContain("grid-cols-1");
    expect(result.className).toContain("md:grid-cols-2");
    expect(result.className).toContain("lg:grid-cols-3");
  });

  it("handles nested modifiers inside sx", () => {
    const result = withClassNames({
      sx: {
        dark: { hover: { bg: "slate-800", text: "white" } },
      },
    });

    expect(result.className).toContain("dark:hover:bg-slate-800");
    expect(result.className).toContain("dark:hover:text-white");
  });

  it("returns props unchanged when sx is null or undefined", () => {
    const result1 = withClassNames({ id: "test", sx: undefined });
    expect(result1).toHaveProperty("id", "test");

    const result2 = withClassNames({ id: "test", sx: null });
    expect(result2).toHaveProperty("id", "test");
  });

  it("handles empty sx object", () => {
    const result = withClassNames({
      className: "existing",
      sx: {},
    });

    expect(result.className).toBe("existing");
  });
});
