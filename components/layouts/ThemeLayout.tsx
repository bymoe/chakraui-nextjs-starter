import { PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "theme";

// fonts
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

export function ThemeLayout({ children }: PropsWithChildren<{}>) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
