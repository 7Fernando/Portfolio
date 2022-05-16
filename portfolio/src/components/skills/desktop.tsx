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

import { Box, Flex, Heading, Text, Divider, Image } from "@chakra-ui/react";

const Desktop = () => {
  return (
    <>
      <Heading mx="20" my="10">
        Skills
      </Heading>

      <Flex mx="20" my="10">
        <Flex flexDir={"column"} w="full">
          <Heading
            size="lg"
            bg="#FFDE59"
            px="55"
            py="1"
            borderRadius={"md"}
            textAlign="center"
          >
            Frontend{" "}
          </Heading>
          <Flex justifyContent={"center"}>
            <Flex mt="5" flexWrap={"wrap"} justifyContent={"center"}>
              <Box m="2" mb="0">
                <Image src={react} boxSize="100px" m="5" />
                <Text
                  textAlign={"center"}
                  fontWeight="bold"
                  bg={"#FFDE59"}
                  borderRadius="md"
                >
                  React
                </Text>
              </Box>
              <Box m="2" mb="0">
                <Image src={ts} boxSize="100px" m="5" />
                <Text
                  textAlign={"center"}
                  fontWeight="bold"
                  bg={"#FFDE59"}
                  borderRadius="md"
                >
                  Typescript
                </Text>
              </Box>
              <Box m="2" mb="0">
                <Image src={redux} boxSize="100px" m="5" />
                <Text
                  textAlign={"center"}
                  fontWeight="bold"
                  bg={"#FFDE59"}
                  borderRadius="md"
                >
                  Redux
                </Text>
              </Box>
              <Box m="2" mb="0">
                <Image src={nextjs} boxSize="100px" m="5" />
                <Text
                  textAlign={"center"}
                  fontWeight="bold"
                  bg={"#FFDE59"}
                  borderRadius="md"
                >
                  Next js
                </Text>
              </Box>

              <Box m="2" mb="0">
                <Image src={chakra} boxSize="100px" m="5" />
                <Text
                  textAlign={"center"}
                  fontWeight="bold"
                  bg={"#FFDE59"}
                  borderRadius="md"
                >
                  Chakra UI
                </Text>
              </Box>

              <Box m="2" mb="0">
                <Image src={bootstrap} boxSize="100px" m="5" />
                <Text
                  textAlign={"center"}
                  fontWeight="bold"
                  bg={"#FFDE59"}
                  borderRadius="md"
                >
                  Bootstrap
                </Text>
              </Box>
              <Box m="2" mb="0">
                <Image src={sass} boxSize="100px" m="5" />
                <Text
                  textAlign={"center"}
                  fontWeight="bold"
                  bg={"#FFDE59"}
                  borderRadius="md"
                >
                  Sass
                </Text>
              </Box>
              <Box m="2">
                <Image src={css} boxSize="100px" m="5" />
                <Text
                  textAlign={"center"}
                  fontWeight="bold"
                  bg={"#FFDE59"}
                  borderRadius="md"
                >
                  CSS
                </Text>
              </Box>
              <Box m="2" mb="0">
                <Image src={html} boxSize="100px" m="5" />
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
        </Flex>
        <Box height="-moz-max-content" bg="#FFDE59" mx="5" mt="20">
          <Divider orientation="vertical" />
        </Box>
        <Flex flexDir={"column"} w="full">
          <Heading
            size="lg"
            bg="#FFDE59"
            px="55"
            py="1"
            borderRadius={"md"}
            textAlign="center"
          >
            Backend{" "}
          </Heading>
          <Flex justifyContent={"center"}>
            <Flex mt="5" flexWrap={"wrap"} justifyContent={"center"}>
              <Box m="2" mb="0">
                <Image src={js} boxSize="100px" m="5" />
                <Text
                  textAlign={"center"}
                  fontWeight="bold"
                  bg={"#FFDE59"}
                  borderRadius="md"
                >
                  JavaScript
                </Text>
              </Box>
              <Box m="2" mb="0">
                <Image src={nodejs} boxSize="100px" m="5" />
                <Text
                  textAlign={"center"}
                  fontWeight="bold"
                  bg={"#FFDE59"}
                  borderRadius="md"
                >
                  Node js
                </Text>
              </Box>
              <Box m="2" mb="0">
                <Image src={express} boxSize="100px" m="5" />
                <Text
                  textAlign={"center"}
                  fontWeight="bold"
                  bg={"#FFDE59"}
                  borderRadius="md"
                >
                  Express js
                </Text>
              </Box>
              <Box m="2" mb="0">
                <Image src={prisma} boxSize="100px" m="5" borderRadius="full" />
                <Text
                  textAlign={"center"}
                  fontWeight="bold"
                  bg={"#FFDE59"}
                  borderRadius="md"
                >
                  Prisma
                </Text>
              </Box>
              <Box m="2" mb="0">
                <Image src={sequelize} boxSize="100px" m="5" />
                <Text
                  textAlign={"center"}
                  fontWeight="bold"
                  bg={"#FFDE59"}
                  borderRadius="md"
                >
                  Sequelize
                </Text>
              </Box>
              <Box m="2" mb="0">
                <Image src={postgres} boxSize="100px" m="5" />
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
        </Flex>
        <Box height="-moz-max-content" bg="#FFDE59" mx="5" mt="20">
          <Divider orientation="vertical" />
        </Box>
        <Flex flexDir={"column"} w="full">
          <Heading
            size="lg"
            bg="#FFDE59"
            px="55"
            py="1"
            borderRadius={"md"}
            textAlign="center"
          >
            Others{" "}
          </Heading>
          <Flex justifyContent={"center"}>
            <Flex mt="5" flexWrap={"wrap"} justifyContent={"center"}>
              <Box m="2" mb="0">
                <Image src={git} boxSize="100px" m="5" />
                <Text
                  textAlign={"center"}
                  fontWeight="bold"
                  bg={"#FFDE59"}
                  borderRadius="md"
                >
                  Git
                </Text>
              </Box>
              <Box m="2" mb="0">
                <Image src={github} boxSize="100px" m="5" />
                <Text
                  textAlign={"center"}
                  fontWeight="bold"
                  bg={"#FFDE59"}
                  borderRadius="md"
                >
                  Github
                </Text>
              </Box>
              <Box m="2" mb="0">
                <Image src={scrum} boxSize="100px" m="5" />
                <Text
                  textAlign={"center"}
                  fontWeight="bold"
                  bg={"#FFDE59"}
                  borderRadius="md"
                >
                  Scrum
                </Text>
              </Box>
              <Box m="2" mb="0">
                <Image src={canva} boxSize="100px" m="5" />
                <Text
                  textAlign={"center"}
                  fontWeight="bold"
                  bg={"#FFDE59"}
                  borderRadius="md"
                >
                  Canva
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default Desktop;
