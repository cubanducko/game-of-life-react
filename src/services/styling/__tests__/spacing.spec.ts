import { createSpacing } from "../spacing";

describe("createSpacing", () => {
  const baseUnit = 8;
  const spacing = createSpacing(baseUnit);

  it("returns correct css values for default argument", () => {
    expect(spacing()).toBe("8px");
  });

  it("returns correct css values for 1 argument", () => {
    expect(spacing(1)).toBe("8px");
  });

  it("returns correct css values for 2 arguments", () => {
    expect(spacing(1, 2)).toBe("8px 16px");
  });

  it("returns correct css values for 3 arguments", () => {
    expect(spacing(1, 2, 1)).toBe("8px 16px 8px");
  });

  it("returns correct css values for 4 arguments", () => {
    expect(spacing(1, 2, 2, 3)).toBe("8px 16px 16px 24px");
  });
});
