import Mobile from "./mobile";
import Desktop from "./desktop";
import { Box } from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
      <Box
        display={["none", "none", "block", "block", "block"]}
        mt="25"
        id="contact"
      >
        <Desktop />
      </Box>
      <Box
        display={["block", "block", "none", "none", "none"]}
        mt="25"
        id="contactP"
      >
        <Mobile />
      </Box>
    </>
  );
};
export default Contact;
