import Mobile from "./mobile";
import Desktop from "./desktop";
import { Box } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Box display={["none", "none", "block", "block", "block"]} >
        <Desktop />
      </Box>
      <Box display={["block", "block", "none", "none", "none"]}>
        <Mobile />
      </Box>
    </>
  );
};
export default About;