import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";
import profile from "../../assets/profile.png";
import { Box, IconButton, Heading, Image, Text, Flex } from "@chakra-ui/react";

const Desktop = () => {
  return (
    <>
      <Box>
        <Flex justifyContent={"space-between"} mx="20" my="20">
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
            <Flex justifyContent={"space-between"} mt="5">
              <a target="_blank" href="https://github.com/7Fernando">
                <IconButton
                  size="lg"
                  bg="transparent"
                  aria-label="Github"
                  icon={<BsGithub size="50px" />}
                />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/luis-fernando-cabezas-438bb4224/">
                <IconButton
                  size="lg"
                  bg="transparent"
                  aria-label="Github"
                  icon={<BsLinkedin size="50px" />}
                />
              </a>
              <a target="_blank" href="https://t.me/FernandoC_7">
                <IconButton
                  size="lg"
                  bg="transparent"
                  aria-label="Github"
                  icon={<BsTelegram size="50px" />}
                />
              </a>
            </Flex>
          </Box>
          <Box>
            <Image
              src={profile}
              borderRadius="full"
              boxSize="250px"
              bg="#FFDE59"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default Desktop;
