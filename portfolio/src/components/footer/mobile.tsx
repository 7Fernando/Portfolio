import { Box, IconButton, Heading, Image, Text, Flex } from "@chakra-ui/react";
import { BsSuitHeartFill } from "react-icons/bs";


const Mobile = () => {
  return (
    <>
      {" "}
      <Flex justifyContent={"center"} pt="35px" bg="#FFDE59" h="200px" >
        <Heading
          as="h5"
          size="xs"
          h="50px"
          display={"flex"}
          justifyContent={"center"}
        >
          Made with{" "}
          <Box mt="1px" mx="2">
            <BsSuitHeartFill />
          </Box>{" "}
          by Fernando Cabezas
        </Heading>
      </Flex>{" "}
    </>
  );
};

export default Mobile;
