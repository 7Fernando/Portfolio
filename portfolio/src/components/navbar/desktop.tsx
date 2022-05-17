import { Box, Button } from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link";

const DesktopNavBar = () => {
  return (
    <>
      <Box display="flex" mr="2">
        <Link to="#about">
          <Button
            as="a"
            variant="ghost"
            aria-label="About"
            my={5}
            w="100%"
            size="lg"
          >
            About
          </Button>
        </Link>
        <Link to="#projects" smooth>
          <Button
            as="a"
            variant="ghost"
            aria-label="About"
            my={5}
            w="100%"
            size="lg"
          >
            Projects
          </Button>
        </Link>
        <a target={"_blank"} href="/cv">
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
        </a>
        <Link to="#contact" smooth>
          <Button
            as="a"
            variant="ghost"
            aria-label="Contact"
            my={5}
            w="100%"
            size="lg"
          >
            Contact
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default DesktopNavBar;
