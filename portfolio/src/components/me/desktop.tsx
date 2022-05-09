import profile from "../../assets/profile.png";
import { Box, Center, Heading, Image, Text, Flex } from "@chakra-ui/react";

const Desktop = () => {
  return (
    <>
      <Box>
        <Flex justifyContent={"space-evenly"}>
          <Box>
            <Heading as="h2" size="3xl" isTruncated>
              Hi,
            </Heading>
            <Heading as="h2" size="3xl" isTruncated>
              I'm Fernando,
            </Heading>
            <Heading as="h2" size="3xl" isTruncated>
              web developer
            </Heading>
          </Box>
          <Box>
            <Image
              src={profile}
              borderRadius="full"
              boxSize="250px"
              bg="#5271FF"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default Desktop;
