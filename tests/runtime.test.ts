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
