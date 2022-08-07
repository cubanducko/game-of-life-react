import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 16px;
      margin: 0;
      color: ${({ theme }) => theme.palette.typography.main};
    }

    /* apply a natural box layout model to all elements, but allowing components to change */
    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
`;
