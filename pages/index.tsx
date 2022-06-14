// ui
import { Button, Stack, Text, Link, Center } from "@chakra-ui/react";
// icons
import { TopRightArrow } from "components/icons";

export default function Home() {
  return (
    <Center minH="100vh">
      <Stack mx="auto" maxW="400px" px="4" align="flex-start">
        <Text fontWeight="500">
          Chakra-UI, TypeScript, Next-seo & Next.js Starter Template
        </Text>
        <Button
          as={Link}
          href="https://github.com/bymoe/chakraui-nextjs-starter"
          rightIcon={<TopRightArrow />}
          isExternal
        >
          Open
        </Button>
        <Link href="https://moej.dev" isExternal fontSize="xs" pt="4">
          by—
          <Text as="span" fontWeight="500">
            moe
          </Text>
        </Link>
      </Stack>
    </Center>
  );
}
