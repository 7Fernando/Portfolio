import { Box, Center, Flex, Heading } from "@chakra-ui/react";

const Mobile = () => {
  return (
    <>
      <Box >
        <Center>
          <Box mx="10" my="5">
            <Heading textAlign={"center"}>About</Heading>

            <Heading
              as="h4"
              size="md"
              color="gray"
              fontWeight={"400"}
              textAlign="justify"
              mt="5"
            >
              I’m a Full Stack Developer located in Argentina. Well-organised
              person, problem solver and self-taught. Fan of outdoor
              activities, rain sound and chess.
            </Heading>
            <Heading
              as="h4"
              size="md"
              color="gray"
              fontWeight={"400"}
              textAlign="justify"
            >
              I studied Full Stack web programming at the Soy Henry bootcamp
              (see certificate) where I carried out several of the projects
              found on this page and gained experience working with agile SCRUM
              methodology.
            </Heading>
            <Heading
              as="h4"
              size="md"
              color="gray"
              fontWeight={"400"}
              textAlign="justify"
            >
              I am currently looking to work in a place that allows me to
              contribute my knowledge and where I can grow professionally.
            </Heading>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default Mobile;
