import { DefaultTheme } from "styled-components";
import { BreakpointsVariables } from "./breakpoints";
import { ThemeFont } from "./fonts";
import { createSpacing, Spacing } from "./spacing";

/*
 * Simple theme provider implementation
 * Included small palette
 */
export type Theme = ThemeVariables & ThemeUtils;

export type ThemeVariables = {
  palette: {
    primary: {
      main: string;
      accent: string;
    };
    grey: {
      light: string;
      main: string;
      dark: string;
    };
    typography: {
      main: string;
    };
  };
  baseSpacing: number;
  breakpoints: BreakpointsVariables;
  fonts: ThemeFont;
};

export type ThemeUtils = {
  spacing: Spacing;
  mediaQuery: (breakpoint: keyof BreakpointsVariables) => string;
};

export const defaultTheme: ThemeVariables = {
  palette: {
    primary: {
      main: "rgb(0,85,255)",
      accent: "rgb(0,72,217)",
    },
    grey: {
      light: "rgb(250,250,250)",
      main: "rgb(232,232,232)",
      dark: "rgb(40,40,40)",
    },
    typography: {
      main: "rgb(26,26,26)",
    },
  },
  baseSpacing: 8,
  breakpoints: {
    desktop: 1280,
    mobileLarge: 480,
    tablet: 768,
    tabletLarge: 960,
  },
  fonts: {
    primary: "Helvetica",
  },
};

export function createTheme(
  providedTheme: Partial<ThemeVariables> = {}
): DefaultTheme {
  const theme = { ...defaultTheme, ...providedTheme };
  const mediaQuery = (breakpoint: keyof BreakpointsVariables): string =>
    `@media (min-width: ${theme.breakpoints[breakpoint]}px)`;

  const spacing = createSpacing(theme.baseSpacing);

  return {
    ...theme,
    spacing,
    mediaQuery,
  };
}
