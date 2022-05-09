import { Box } from "@chakra-ui/react";
import MobileNavBar from "./mobile";
import DesktopNavBar from "./desktop";

const Navbar = () => {
  return (
    <>
      <Box
        display={["none", "none", "flex", "flex", "flex"]}
        justifyContent="center"
        
      >
        <DesktopNavBar />
      </Box>
      <Box
        display={["flex", "flex", "none", "none", "none"]}
        justifyContent="flex-end"

      >
        <MobileNavBar />
      </Box>
    </>
  );
};

export default Navbar;
