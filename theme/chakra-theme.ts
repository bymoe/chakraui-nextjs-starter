import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
// Components
import { Button } from "./button";

export const theme = extendTheme({
  // Global Styles
  styles: {
    global: {
      "#nprogress .bar": {
        background: "var(--chakra-colors-blue-300) !important",
        zIndex: "2000 !important",
        height: "3px",
      },
      "#nprogress .spinner-icon": {
        display: "none",
      },
    },
  },
  colors,
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  sizes: {},
  fontSizes: {},
  // Components
  components: {
    Button,
  },
});
