import { createTheme, defaultTheme, ThemeVariables } from "../theme";

describe("createTheme", () => {
  it("creates a theme with helpers and the provided variables", () => {
    const providedTheme: ThemeVariables = {
      palette: {
        primary: {
          main: "rgb(0, 0, 0)",
          accent: "rgb(0,72,217)",
        },
        grey: {
          light: "rgb(55, 55, 55)",
          main: "rgb(232,232,232)",
          dark: "rgb(40,40,40)",
        },
        typography: {
          main: "rgb(22, 22, 22)",
        },
      },
      baseSpacing: 4,
      breakpoints: {
        ...defaultTheme.breakpoints,
        desktop: 500,
      },
      fonts: {
        primary: "Arial",
      },
    };

    const theme = createTheme(providedTheme);

    // Check that variables have been injected
    expect(theme.baseSpacing).toBe(providedTheme.baseSpacing);
    expect(theme.fonts).toBe(providedTheme.fonts);
    expect(theme.breakpoints).toBe(providedTheme.breakpoints);
    expect(theme.palette).toBe(providedTheme.palette);

    // Test utils
    expect(theme.spacing()).toBe(`${providedTheme.baseSpacing}px`);
    expect(theme.mediaQuery("desktop")).toBe(
      `@media (min-width: ${providedTheme.breakpoints?.desktop}px)`
    );
  });
});
