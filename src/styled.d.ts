// styled.d.ts
import "styled-components";
import { Theme } from "./services/styling";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
