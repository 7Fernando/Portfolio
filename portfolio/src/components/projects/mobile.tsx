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
const Mobile = () => {
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
  return <>
  
  <Heading mx="10" my="5" textAlign={"center"}>
        Projects
      </Heading>
      <Flex flexWrap={"wrap"} mx="20" flexDir={"column"} justifyContent={"center"} textAlign={"center"}>
        {projects.length &&
          projects?.map((project: Project) => (
            <>
              {" "}
              <Center my={6} >
                <Box
                  maxW={"300px"}
                  h={"350px"}
                  w={"full"}
                  bg={useColorModeValue("white", "gray.900")}
                  boxShadow={"2xl"}
                  rounded={"md"}
                  p={6}
                  overflow={"hidden"}
                
                  transitionProperty={"transform"}
                  transitionDuration={"0.8s"}
                  _hover={{
                    transform: "translateY(-1%)",
                  }}
                >
                  <Box
                    h={"150px"}
                    bg={"white"}
                    mt={-6}
                    mx={-6}
                    mb="30"
                    pos={"relative"}
                  >
                    <Image src={project?.cover} h={"170px"} />
                  </Box>
                  <Stack>
                    <Text
                      color={"black"}
                      textTransform={"uppercase"}
                      fontWeight={800}
                      fontSize={"xs"}
                      letterSpacing={1.1}
                      h="20px"
                      overflow={"hidden"}
                    >
                      {project?.name}
                    </Text>

                  
                  </Stack>
                  <a target="_blank" href={project?.page}>
                    <Box my="5">
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
  </>;
};
export default Mobile;
