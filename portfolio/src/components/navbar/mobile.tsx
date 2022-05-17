import { useState } from "react";
import { Box, Flex, IconButton, Button } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { HashLink as Link } from "react-router-hash-link";
import { Link as Link2 } from "react-router-dom";
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
            <Link to="#aboutP" smooth>
              <Button
                as="a"
                variant="ghost"
                aria-label="about"
                my={5}
                w="100%"
                onClick={() => changeDisplay("none")}
              >
                About
              </Button>
            </Link>
            <Link to="#projectsP" smooth>
              <Button
                as="a"
                variant="ghost"
                aria-label="projects"
                my={5}
                w="100%"
                onClick={() => changeDisplay("none")}
              >
                Projects
              </Button>
            </Link>
            <Link2 to="/cv2" >
              <Button
                as="a"
                variant="ghost"
                aria-label="Contact"
                my={5}
                w="100%"
                size="lg"
              >
                CV
              </Button>
            </Link2>
            <Link to="#contactP" smooth>
              <Button
                as="a"
                variant="ghost"
                aria-label="contact"
                my={5}
                w="100%"
                onClick={() => changeDisplay("none")}
              >
                Contact
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default MobileNavBar;
