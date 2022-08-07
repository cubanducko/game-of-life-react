import exampleAssets from "./example-assets.json";
import exampleTheme from "./example-theme.json";

/*
 * This a mock function for the sake of showing a dynamic brand styling of this app
 * In a more real environment this should fetch data from a server
 */
export function useBrand() {
  return {
    assets: exampleAssets,
    theme: exampleTheme,
  };
}
