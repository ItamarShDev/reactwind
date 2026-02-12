import { describe, expect, it } from "vitest";
import { withClassNames } from "../src/runtime";

describe("Tailwind Coverage - New Value Props", () => {
  describe("Layout & Position", () => {
    it("handles position props (top, right, bottom, left)", () => {
      const result = withClassNames({
        top: "0",
        right: "4",
        bottom: "auto",
        left: "1/2",
      });
      expect(result.className).toBe("top-0 right-4 bottom-auto left-1/2");
    });

    it("handles inset props", () => {
      const result = withClassNames({
        inset: "0",
        "inset-x": "4",
        "inset-y": "auto",
      });
      expect(result.className).toBe("inset-0 inset-x-4 inset-y-auto");
    });

    it("handles aspect, columns, float, clear", () => {
      const result = withClassNames({
        aspect: "video",
        columns: "3",
        float: "right",
        clear: "both",
      });
      expect(result.className).toBe("aspect-video columns-3 float-right clear-both");
    });
  });

  describe("Flexbox & Grid", () => {
    it("handles basis and gap variants", () => {
      const result = withClassNames({
        basis: "1/2",
        "gap-x": "4",
        "gap-y": "2",
      });
      expect(result.className).toBe("basis-1/2 gap-x-4 gap-y-2");
    });

    it("handles grid flow and auto columns/rows", () => {
      const result = withClassNames({
        "grid-flow": "row",
        "auto-cols": "fr",
        "auto-rows": "min",
      });
      expect(result.className).toContain("grid-flow-row");
      expect(result.className).toContain("auto-cols-fr");
      expect(result.className).toContain("auto-rows-min");
    });

    it("handles space and justify variants", () => {
      const result = withClassNames({
        "space-x": "4",
        "space-y": "2",
        "justify-items": "center",
        "justify-self": "end",
      });
      expect(result.className).toBe("space-x-4 space-y-2 justify-items-center justify-self-end");
    });
  });

  describe("Sizing", () => {
    it("handles size prop", () => {
      const result = withClassNames({
        size: "10",
      });
      expect(result.className).toBe("size-10");
    });
  });

  describe("Borders", () => {
    it("handles directional border widths", () => {
      const result = withClassNames({
        "border-t": "2",
        "border-r": "4",
        "border-b": "0",
        "border-l": "8",
      });
      expect(result.className).toBe("border-t-2 border-r-4 border-b-0 border-l-8");
    });

    it("handles border-x and border-y", () => {
      const result = withClassNames({
        "border-x": "2",
        "border-y": "4",
      });
      expect(result.className).toBe("border-x-2 border-y-4");
    });

    it("handles directional rounded corners", () => {
      const result = withClassNames({
        "rounded-t": "lg",
        "rounded-br": "full",
        "rounded-bl": "none",
      });
      expect(result.className).toContain("rounded-t-lg");
      expect(result.className).toContain("rounded-br-full");
      expect(result.className).toContain("rounded-bl-none");
    });

    it("handles border-style", () => {
      const result = withClassNames({
        "border-style": "dashed",
      });
      expect(result.className).toBe("border-dashed");
    });
  });

  describe("Typography", () => {
    it("handles text-align", () => {
      const result = withClassNames({
        "text-align": "center",
      });
      expect(result.className).toBe("text-center");
    });

    it("handles line-clamp, list, indent", () => {
      const result = withClassNames({
        "line-clamp": "3",
        list: "disc",
        indent: "4",
      });
      expect(result.className).toBe("line-clamp-3 list-disc indent-4");
    });
  });

  describe("Backgrounds & Gradients", () => {
    it("handles gradient props", () => {
      const result = withClassNames({
        "bg-gradient": "to-r",
        from: "blue-500",
        via: "purple-500",
        to: "pink-500",
      });
      expect(result.className).toBe("bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500");
    });

    it("handles bg-size, bg-position, bg-repeat", () => {
      const result = withClassNames({
        "bg-size": "cover",
        "bg-position": "center",
        "bg-repeat": "no-repeat",
      });
      expect(result.className).toBe("bg-cover bg-center bg-no-repeat");
    });
  });

  describe("Interactivity", () => {
    it("handles scroll, snap, touch", () => {
      const result = withClassNames({
        scroll: "smooth",
        snap: "start",
        touch: "manipulation",
      });
      expect(result.className).toBe("scroll-smooth snap-start touch-manipulation");
    });

    it("handles will-change, caret, accent", () => {
      const result = withClassNames({
        "will-change": "transform",
        caret: "blue-500",
        accent: "pink-500",
      });
      expect(result.className).toBe("will-change-transform caret-blue-500 accent-pink-500");
    });
  });

  describe("SVG", () => {
    it("handles stroke-width", () => {
      const result = withClassNames({
        "stroke-width": "2",
      });
      expect(result.className).toBe("stroke-2");
    });
  });
});

describe("Object Modifier Syntax", () => {
  it("handles single modifier with multiple props", () => {
    const result = withClassNames({
      hover: { bg: "red-500", text: "white", scale: "105" },
    });
    expect(result.className).toBe("hover:bg-red-500 hover:text-white hover:scale-105");
  });

  it("handles modifier with boolean value props", () => {
    const result = withClassNames({
      hover: { shadow: true, rounded: true },
    });
    expect(result.className).toBe("hover:shadow hover:rounded");
  });

  it("handles modifier with layout props", () => {
    const result = withClassNames({
      hover: { flex: true, hidden: true },
    });
    expect(result.className).toBe("hover:flex hover:hidden");
  });

  it("handles multiple modifiers", () => {
    const result = withClassNames({
      hover: { bg: "blue-500" },
      focus: { ring: "2" },
      active: { scale: "95" },
    });
    expect(result.className).toContain("hover:bg-blue-500");
    expect(result.className).toContain("focus:ring-2");
    expect(result.className).toContain("active:scale-95");
  });

  it("handles responsive breakpoint modifiers", () => {
    const result = withClassNames({
      sm: { flex: true, gap: "2" },
      md: { gap: "4" },
      lg: { gap: "8" },
    });
    expect(result.className).toContain("sm:flex");
    expect(result.className).toContain("sm:gap-2");
    expect(result.className).toContain("md:gap-4");
    expect(result.className).toContain("lg:gap-8");
  });

  it("handles dark mode modifier", () => {
    const result = withClassNames({
      dark: { bg: "slate-900", text: "white" },
    });
    expect(result.className).toBe("dark:bg-slate-900 dark:text-white");
  });
});

describe("Stacked Modifiers (Nested Objects)", () => {
  it("handles dark:hover stacking", () => {
    const result = withClassNames({
      dark: { hover: { bg: "slate-800", text: "white" } },
    });
    expect(result.className).toBe("dark:hover:bg-slate-800 dark:hover:text-white");
  });

  it("handles responsive:state stacking", () => {
    const result = withClassNames({
      md: { hover: { scale: "105" } },
    });
    expect(result.className).toBe("md:hover:scale-105");
  });

  it("handles triple nesting", () => {
    const result = withClassNames({
      dark: { md: { hover: { bg: "slate-700" } } },
    });
    expect(result.className).toBe("dark:md:hover:bg-slate-700");
  });

  it("combines object and hyphenated modifiers", () => {
    const result = withClassNames({
      hover: { bg: "blue-500" },
      "focus-ring": "2",
    });
    expect(result.className).toContain("hover:bg-blue-500");
    expect(result.className).toContain("focus:ring-2");
  });
});

describe("Mixed Usage", () => {
  it("combines all prop types", () => {
    const result = withClassNames({
      className: "existing-class",
      classNames: ["array-class"],
      flex: true,
      bg: "white",
      p: "4",
      hover: { bg: "gray-100" },
      "focus-ring": "2",
    });
    expect(result.className).toContain("existing-class");
    expect(result.className).toContain("array-class");
    expect(result.className).toContain("flex");
    expect(result.className).toContain("bg-white");
    expect(result.className).toContain("p-4");
    expect(result.className).toContain("hover:bg-gray-100");
    expect(result.className).toContain("focus:ring-2");
  });

  it("removes processed props from output", () => {
    const result = withClassNames({
      id: "my-id",
      hover: { bg: "red-500" },
      top: "0",
      flex: true,
    });
    expect(result.id).toBe("my-id");
    expect(result.hover).toBeUndefined();
    expect(result.top).toBeUndefined();
    expect(result.flex).toBeUndefined();
  });
});
