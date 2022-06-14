// ui
import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export function AppLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Box h="100%" minH="100vh" w="100%" className="mesh--1">
      {children}
    </Box>
  );
}
