import {
  Box,
  Input,
  Flex,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
  FormHelperText,
  IconButton,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";
import { EmailIcon } from "@chakra-ui/icons";
const Desktop = () => {
  return (
    <>
      <Box mx="20" my="20">
        <Heading>Contact</Heading>
        <Box mt="5">
          <a href="mailto:fernandocabezas_@outlook.com">
            <Button
              leftIcon={<EmailIcon />}
              bg="#FFDE59"
              variant="solid"
              w="100%"
              size="lg"
            >
              Send email
            </Button>
          </a>
        </Box>
        <Box my="10">
          {" "}
          <Flex mx="5" justifyContent={"space-between"}>
            <a target="_blank" href="https://github.com/7Fernando">
              <IconButton
                size="lg"
                bg="transparent"
                aria-label="Github"
                icon={<BsGithub size="50px" />}
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/luis-fernando-cabezas-438bb4224/"
            >
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
       
          {/* <Flex mx="5" w="full" my="10" >
            <FormControl isRequired mr="5" >
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" placeholder="Your name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" placeholder="Your email" />
            </FormControl>
          </Flex>
          <FormControl isRequired mx="5" my="10">
            <FormLabel>Message</FormLabel>

            <Textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              resize="none"
            />
          </FormControl> */}
        </Box>
      </Box>
    </>
  );
};

export default Desktop;
