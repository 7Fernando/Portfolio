import MobileNavBar from "./mobile";
import DesktopNavBar from "./desktop";
import { Box } from "@chakra-ui/react";

const Skills = () => {
  return (
    <>
      <Box
        display={["none", "none", "block", "block", "block"]}
        
      >
        <DesktopNavBar />
      </Box>
      <Box
        display={["flex", "flex", "none", "none", "none"]}
        
      >
        <MobileNavBar />
      </Box>
    </>
  );
};

export default Skills;
