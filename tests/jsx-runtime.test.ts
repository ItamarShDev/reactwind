import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

import { jsx, jsxs } from "../src/jsx-runtime";
import { jsxDEV } from "../src/jsx-dev-runtime";
import { Button } from "../src/components/ui/button";

const factories = [
  ["jsx", jsx],
  ["jsxs", jsxs],
  [
    "jsxDEV",
    (type: Parameters<typeof jsx>[0], props: Parameters<typeof jsx>[1]) =>
      jsxDEV(type, props, undefined, false, undefined, undefined),
  ],
] as const;

describe.each(factories)("%s passthrough props", (_name, createElement) => {
  it.each(["input", "select"])(
    "preserves native %s size alongside explicit sizing utilities",
    (tag) => {
      const element = createElement(tag, { size: 20, sx: { size: 8 } });
      expect(element.props).toEqual({ size: 20, className: "size-8" });
      expect(renderToStaticMarkup(element)).toContain('size="20"');
    },
  );

  it("renders the requested Button size instead of its default", () => {
    const element = createElement(Button, { size: "sm", children: "Save" });
    expect(element.props).toEqual({ size: "sm", children: "Save" });
    const markup = renderToStaticMarkup(element);
    expect(markup).toContain("h-9 rounded-md px-3");
    expect(markup).not.toContain("size-sm");
    expect(markup).not.toContain("h-10 px-4 py-2");
  });

  it.each(["svg", "g", "path"])(
    "preserves %s attributes alongside explicit mask/transform utilities",
    (tag) => {
      const element = createElement(tag, {
        mask: "url(#shape)",
        transform: "translate(2 3)",
        sx: { mask: "none", transform: "3d" },
      });
      expect(element.props).toEqual({
        mask: "url(#shape)",
        transform: "translate(2 3)",
        className: "mask-none transform-3d",
      });
      const markup = renderToStaticMarkup(element);
      expect(markup).toContain('mask="url(#shape)"');
      expect(markup).toContain('transform="translate(2 3)"');
    },
  );

  it("keeps unambiguous shorthand props working on custom components", () => {
    const element = createElement(Button, { size: "sm", bg: "blue-500", p: 4 });
    expect(element.props).toEqual({ size: "sm", className: "bg-blue-500 p-4" });
  });
});

describe("jsx runtime wrappers", () => {
  it("applies classNames for jsx", () => {
    const element = jsx("div", {
      classNames: ["primary", "large"],
      id: "hero",
    });

    expect(element.props).toEqual({
      className: "primary large",
      id: "hero",
    });
  });

  it("merges className and classNames for jsxs", () => {
    const element = jsxs("div", {
      className: "btn",
      classNames: ["primary", "large"],
      children: ["Hello", "World"],
    });

    expect(element.props).toEqual({
      className: "btn primary large",
      children: ["Hello", "World"],
    });
  });
});
