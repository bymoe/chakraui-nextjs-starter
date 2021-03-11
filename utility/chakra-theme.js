import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      900: "#0A3D39",
      800: "#0F5C55",
      700: "#147A71",
      600: "#1EB8AA",
      500: "#21CCBD",
      400: "#64DBD1",
      300: "#A6EBE5",
      200: "#C8F2EF",
      100: "#E9FAF8",
      50: "#F4FCFC",
    },
  },
  fonts: {
    body: "Circular, sans-serif",
    heading: "Circular, sans-serif",
  },
});

export default customTheme;
