import { Box, Button } from "@chakra-ui/react";

const DesktopNavBar = () => {
  return (
    <>
      <Box display="flex" mr="2">
    
        <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
          About 
        </Button>

        <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
          Projects
        </Button>

        <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
          Contact
        </Button>
      </Box>
    </>
  );
};

export default DesktopNavBar;
