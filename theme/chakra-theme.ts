import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
// Components
import { Button } from "./button";

export const theme = extendTheme({
  // Global Styles
  styles: {
    global: {},
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
