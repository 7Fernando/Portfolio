import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { EmailIcon } from "@chakra-ui/icons";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";

const Mobile = () => {
  return (
    <>
      <Box mx="20" my="20">
        <Flex justify={"center"}>
        <Heading>Contact</Heading>
        </Flex>
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
          <Flex justifyContent={"space-between"}>
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
          {/* <Flex  w="full" my="10" flexDir={"column"} >
            <FormControl isRequired  w="full" >
              <FormLabel htmlFor="name" textAlign={"center"}>Name</FormLabel>
              <Input id="name" placeholder="Your name" />
            </FormControl>

            <FormControl isRequired w="full" my="5">
              <FormLabel htmlFor="email" textAlign={"center"}>Email</FormLabel>
              <Input id="email" placeholder="Your email" />
            </FormControl>

            <FormControl isRequired  >
            <FormLabel textAlign={"center"}>Message</FormLabel>

            <Textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              resize="none"
            />
          </FormControl>
          </Flex> */}
         
        </Box>
      </Box>
    </>
  );
};
export default Mobile;