import {
  Box,
  Image,
  Center,
  Flex,
  Heading,
  Button,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { Project } from "./types";
import { BsGithub } from "react-icons/bs";
import { useState, useEffect } from "react";
import { BiLinkExternal } from "react-icons/bi";

const Desktop = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(false);
      const gettingProject = await axios.get("./projects.json");
      setProjects(gettingProject?.data?.projects);
      setLoading(false);
    };

    getData();
   
  }, [loading]);
  return (
    <>
      <Heading mx="20" my="10">
        Projects
      </Heading>
      <Flex flexWrap={"wrap"} mx="20" justifyContent={"space-between"}>
        {projects.length &&
          projects?.map((project: Project) => (
            <>
              {" "}
              <Center my={6}>
                <Box
                  maxW={"380px"}
                  h={"615px"}
                  w={"full"}
                  bg={useColorModeValue("white", "gray.900")}
                  boxShadow={"2xl"}
                  rounded={"md"}
                  p={6}
                  overflow={"hidden"}
                  mr="3"
                  transitionProperty={"transform"}
                  transitionDuration={"0.8s"}
                  _hover={{
                    transform: "translateY(-1%)",
                  }}
                >
                  <Box
                    h={"210px"}
                    bg={"gray.100"}
                    mt={-6}
                    mx={-6}
                    mb={40}
                    pos={"relative"}
                  >
                    <Image src={project?.cover} h={"340px"} />
                  </Box>
                  <Stack>
                    <Text
                      color={"black"}
                      textTransform={"uppercase"}
                      fontWeight={800}
                      fontSize={"sm"}
                      letterSpacing={1.1}
                    >
                      {project?.name}
                    </Text>

                    <Text color={"gray.500"} h="72px">
                      {project?.made}
                    </Text>
                  </Stack>
                  <a target="_blank" href={project?.page} >
                    <Box my="5" >
                      <Button
                        rightIcon={
                          <Box mt="1">
                            <BiLinkExternal />{" "}
                          </Box>
                        }
                        w="full"
                        bg="#FFDE59 "
                        variant="solid"
                      >
                       {project?.id === 3 ?"Page coming soon...":"Visit Page"} 
                      </Button>
                    </Box>
                  </a>
                  <a target="_blank" href={project?.code}>
                    <Box>
                      <Button
                        rightIcon={<BsGithub />}
                        w="full"
                        bg="#FFDE59 "
                        variant="solid"
                      >
                        See Code
                      </Button>
                    </Box>
                  </a>
                </Box>
              </Center>{" "}
            </>
          ))}
      </Flex>
    </>
  );
};
export default Desktop;