

import { describe, expect, it } from "vitest";

describe("JSX usage", () => {
  it("merges classNames when using JSX", () => {
    const element = (
      <div className="btn" classNames={["primary", "large"]} id="cta" />
    );

    expect(element.props).toEqual({
      className: "btn primary large",
      id: "cta",
    });
  });

  it("applies sx prop via JSX", () => {
    const element = (
      <div sx={{ flex: true, bg: "blue-500", p: 4, hover: { bg: "blue-700" } }} />
    );

    expect(element.props.className).toContain("flex");
    expect(element.props.className).toContain("bg-blue-500");
    expect(element.props.className).toContain("p-4");
    expect(element.props.className).toContain("hover:bg-blue-700");
    expect(element.props).not.toHaveProperty("sx");
  });

  it("merges sx with className and classNames via JSX", () => {
    const element = (
      <div className="base" classNames={["extra"]} sx={{ rounded: "lg", shadow: "md" }} />
    );

    expect(element.props.className).toContain("base");
    expect(element.props.className).toContain("extra");
    expect(element.props.className).toContain("rounded-lg");
    expect(element.props.className).toContain("shadow-md");
  });
});
