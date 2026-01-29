

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
});
