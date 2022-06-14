import { PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "theme";

export function ThemeLayout({ children }: PropsWithChildren<{}>) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
