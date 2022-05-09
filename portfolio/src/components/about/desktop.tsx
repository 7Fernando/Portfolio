import { Box, Center, Heading } from "@chakra-ui/react";

const Desktop = () => {
  return (
    <>
      <Center w="1000px" ml="12.5vw" >
        <Box>
          <Heading>About</Heading>

          <Heading as="h4" size="lg" color="gray" fontWeight={"400"}>
            I’m a Full Stack Developer located in Argentina. I have a serious
            passion for UI effects, animations and creating intuitive, dynamic
            user experiences.
            Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and English literature. A family person and father of two fractious boys,
            Interested in the entire frontend spectrum and working on ambitious projects with positive people.
          </Heading>
        </Box>
      </Center>
    </>
  );
};

export default Desktop;
