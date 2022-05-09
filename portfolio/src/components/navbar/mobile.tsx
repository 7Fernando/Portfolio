import { useState } from "react";
import { Box, Flex, IconButton, Button } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const MobileNavBar = () => {
  const [display, changeDisplay] = useState("none");
  return (
    <>
      <Box mr="2" mt={2}>
        <IconButton
          aria-label="Open Menu"
          size="lg"
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
        />

        <Flex
          w="100vw"
          display={display}
          bgColor="gray.50"
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          zIndex={20}
          overflowY="auto"
          flexDir="column"
        >
          <Flex justify="flex-end">
            <IconButton
              mt={2}
              mr={2}
              aria-label="Open Menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={() => changeDisplay("none")}
            />
          </Flex>

          <Flex flexDir="column" align="center">
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              About me
            </Button>

            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              Projects
            </Button>

            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default MobileNavBar;
