import React, { FC } from "react";
import {
  Stack,
  Image,
  Box,
  Link as _Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";

const SocialLinks: FC = () => {
  const { colorMode } = useColorMode();
  const sectionBgColor = { light: "gray.100", dark: "gray.900" };
  const sectionColor = { light: "gray.900", dark: "gray.100" };

  const cardBgColor = { light: "white", dark: "gray.900" };
  const cardColor = { light: "gray.900", dark: "white" };

  return (
    <Box
      bg={sectionBgColor[colorMode]}
      color={sectionColor[colorMode]}
      p={4}
      as="footer"
    >
      <Box maxW="6xl" mx="auto" fontSize="xs">
        <Box d="flex" textAlign="center" justifyContent="center">
          <Stack spacing={2}>
            <Box>
              <Link href="/">
                <_Link href="/" target="_blank">
                  <Image
                    src="/images/common/favicon.png"
                    alt="Logo"
                    width={50}
                    mx="auto"
                    bg={cardColor[colorMode]}
                    color={cardBgColor[colorMode]}
                    rounded="full"
                    p={1}
                  />
                </_Link>
              </Link>
            </Box>
            <Box>
              <_Link href="https://github.com/sundarshahi">
                Source code on Github
              </_Link>
            </Box>
            <Box>
              <Text>
                Copyright &copy; {new Date().getFullYear()} Sundar Shahi Thakuri
              </Text>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialLinks;
