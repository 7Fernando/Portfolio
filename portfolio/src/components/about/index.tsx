import Mobile from "./mobile";
import Desktop from "./desktop";
import { Box } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Box
        display={["none", "none", "block", "block", "block"]}
        mt="25"
        id="about"
      >
        <Desktop />
      </Box>
      <Box
        display={["block", "block", "none", "none", "none"]}
        mt="25"
        id="aboutP"
      >
        <Mobile />
      </Box>
    </>
  );
};
export default About;
