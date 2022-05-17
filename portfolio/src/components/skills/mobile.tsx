import js from "/assets/js.svg";
import ts from "/assets/ts.png";
import git from "/assets/git.png";
import css from "/assets/css.svg";
import html from "/assets/html.svg";
import sass from "/assets/sass.svg";
import canva from "/assets/canva.png";
import react from "/assets/react.svg";
import redux from "/assets/redux.svg";
import scrum from "/assets/scrum.png";
import nextjs from "/assets/nextjs.svg";
import nodejs from "/assets/nodejs.svg";
import chakra from "/assets/chakra.png";
import github from "/assets/github.png";
import prisma from "/assets/prisma.webp";
import express from "/assets/express.png";
import bootstrap from "/assets/bootstrap.svg";
import postgres from "/assets/postgresql.svg";
import sequelize from "/assets/sequelize.svg";

import {
  Box,
  Flex,
  Heading,
  Text,
  Divider,
  Image,
  Center,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
const Mobile = () => {
  return (
    <>
      <Box mx="5">
        <Heading textAlign={"center"} my="10">
          Skills
        </Heading>
        <Accordion allowToggle >
          <AccordionItem bg="#FFDE59" borderRadius={"md"} mb="1">
            <h2>
              <AccordionButton>
                <Box flex="1" fontWeight={"bold"} textAlign="center">
                  Frontend
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel w="full">
              <Flex justifyContent={"center"} w="full">
                <Flex flexWrap={"wrap"} justifyContent={"center"} w="full">
                  <Box  >
                    <Image m="5" src={react} boxSize="50px" />
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                      fontSize={"md"}
                      
                    >
                      React
                    </Text>
                  </Box>
                  <Box  >
                    <Flex justifyContent={"center"}>
                      <Image src={ts} boxSize="50px" m="5"  />
                    </Flex>
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                      
                    >
                      Typescript
                    </Text>
                  </Box>
                  <Box  >
                    <Image src={redux} boxSize="50px" m="5" />
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                    >
                      Redux
                    </Text>
                  </Box>
                  <Box  >
                    <Image src={nextjs} boxSize="50px" m="5" />
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                    >
                      Next js
                    </Text>
                  </Box>

                  <Box  >
                    <Image src={chakra} boxSize="50px" m="5" />
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                    >
                      Chakra UI
                    </Text>
                  </Box>

                  <Box  >
                    <Image src={bootstrap} boxSize="50px" m="5" />
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                    >
                      Bootstrap
                    </Text>
                  </Box>
                  <Box  >
                    <Image src={sass} boxSize="50px" m="5" />
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                    >
                      Sass
                    </Text>
                  </Box>
                  <Box >
                    <Image src={css} boxSize="50px" m="5" />
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                    >
                      CSS
                    </Text>
                  </Box>
                  <Box  >
                    <Image src={html} boxSize="50px" m="5" />
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                    >
                      HTML
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem bg="#FFDE59" borderRadius={"md"} mb="1">
            <h2>
              <AccordionButton>
                <Box flex="1" fontWeight={"bold"} textAlign="center">
                  Backend
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel w="full">
              <Flex justifyContent={"center"}>
                <Flex  flexWrap={"wrap"} justifyContent={"center"}>
                  <Box  >
                    <Image src={js} boxSize="50px" m="5" />
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                    >
                      JavaScript
                    </Text>
                  </Box>
                  <Box  >
                    <Image src={nodejs} boxSize="50px" m="5" />
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                    >
                      Node js
                    </Text>
                  </Box>
                  <Box  >
                    <Image src={express} boxSize="50px" m="5" />
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                    >
                      Express js
                    </Text>
                  </Box>
                  <Box  >
                    <Image
                      src={prisma}
                      boxSize="50px"
                      m="5"
                      borderRadius="full"
                    />
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                    >
                      Prisma
                    </Text>
                  </Box>
                  <Box  >
                    <Image src={sequelize} boxSize="50px" m="5" />
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                    >
                      Sequelize
                    </Text>
                  </Box>
                  <Box  >
                    <Image src={postgres} boxSize="50px" m="5" />
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                    >
                      PostgreSQL
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem bg="#FFDE59" borderRadius={"md"}>
            <h2>
              <AccordionButton>
                <Box flex="1" fontWeight={"bold"} textAlign="center">
                  Others
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel w="full">
              <Flex justifyContent={"center"}>
                <Flex  flexWrap={"wrap"} justifyContent={"center"}>
                  <Box  >
                    <Flex justifyContent={"center"}>
                      <Image src={git} boxSize="50px" m="5" />
                    </Flex>
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                      px="10"
                    >
                      Git
                    </Text>
                  </Box>
                  <Box  >
                    <Flex justifyContent={"center"}>
                      <Image src={github} boxSize="50px" m="5" />
                    </Flex>
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                      px="10"
                    >
                      Github
                    </Text>
                  </Box>
                  <Box  >
                    <Flex justifyContent={"center"}>
                      <Image src={scrum} boxSize="50px" m="5" />
                    </Flex>
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                      px="10"
                    >
                      Scrum
                    </Text>
                  </Box>
                  <Box  >
                    <Flex justifyContent={"center"}>
                      <Image src={canva} boxSize="50px" m="5" />
                    </Flex>
                    <Text
                      textAlign={"center"}
                      fontWeight="bold"
                      bg={"#FFDE59"}
                      borderRadius="md"
                      w="150px"
                    >
                      Canva
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};
export default Mobile;
