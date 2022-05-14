import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

const Desktop = () => {
  return (
    <>
      <Box mx="20" my="20">
        <Heading>About</Heading>
        <Heading
          as="h4"
          size="lg"
          color="gray"
          fontWeight={"400"}
          textAlign="justify"
          mt="5"
        >
          I’m a Full Stack Developer located in Argentina. Well-organised
          person, problem solver and self-taught. Fan of outdoor activities,
          rain sound and chess.
        </Heading>
        <Heading
          as="h4"
          size="lg"
          color="gray"
          fontWeight={"400"}
          textAlign="justify"
        >
          I studied Full Stack web programming at the Soy Henry bootcamp{" "}
          <a target="_blank" href="https://certificates.soyhenry.com/cert?id=cd44de99-5a4f-4b51-92c7-f294686f7a49">
            <Text textDecoration={"underline"} display={"inline-block"} _hover={{color:"gray.800"}}>
              (see certificate)
            </Text>
          </a>{" "}
          where I carried out several of the projects found on this page and
          gained experience working with agile SCRUM methodology.
        </Heading>
        <Heading
          as="h4"
          size="lg"
          color="gray"
          fontWeight={"400"}
          textAlign="justify"
        >
          I am currently looking to work in a place that allows me to contribute
          my knowledge and where I can grow professionally.
        </Heading>
      </Box>
    </>
  );
};

export default Desktop;
