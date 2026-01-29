import { describe, expect, it } from "vitest";

import { jsx, jsxs } from "../src/jsx-runtime";

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
