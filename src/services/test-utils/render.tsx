import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import { FunctionComponent, PropsWithChildren, ReactElement } from "react";
import { createTheme, Theme } from "services/styling";
import { ThemeProvider } from "styled-components";

const wrapper = ({
  theme: themeVariables,
}: IWrapperOptions): FunctionComponent => {
  const RTLWrapper = ({
    children,
  }: PropsWithChildren<unknown>): ReactElement => {
    const theme = createTheme(themeVariables);

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };

  return RTLWrapper;
};

export interface IWrapperOptions {
  theme?: Theme;
}

const renderWithProviders = (
  element: ReactElement,
  options: IWrapperOptions = {}
): RenderResult => {
  return rtlRender(element, {
    wrapper: wrapper(options),
  } as RenderOptions);
};

export { default as userEvent } from "@testing-library/user-event";
export * from "@testing-library/react";
export { renderWithProviders as render };
