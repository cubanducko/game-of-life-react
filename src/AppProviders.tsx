import { useMemo } from "react";
import { useBrand } from "services/brands";
import { createTheme, GlobalStyles } from "services/styling";
import { ThemeProvider } from "styled-components";
import { WithChildren } from "utils";

type AppProvidersProps = WithChildren;

export function AppProviders({ children }: AppProvidersProps): JSX.Element {
  const { theme: themeVariables } = useBrand();
  const theme = useMemo(() => createTheme(themeVariables), [themeVariables]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
