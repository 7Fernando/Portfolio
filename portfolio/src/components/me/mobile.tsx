import profile from "../../assets/profile.png";
import { Box, Flex, Center, Heading, Image, Text } from "@chakra-ui/react";

const Mobile = () => {
  return (
    <>
      <Box >
        <Flex justifyContent={"center"} textAlign="center">
          <Box>
            <Heading as="h2" size="xl" isTruncated>
              Hi,
            </Heading>
            <Heading as="h2" size="xl" isTruncated>
              I'm Fernando,
            </Heading>
            <Heading as="h2" size="xl" isTruncated>
              web developer
            </Heading>
          </Box>
        </Flex>
        <Flex justifyContent={"center"} textAlign="center"  mt="25">
          <Image
            src={profile}
            borderRadius="full"
            boxSize="155px"
            bg="#FFDE59"
          />
        </Flex>
      </Box>
    </>
  );
};
export default Mobile;
