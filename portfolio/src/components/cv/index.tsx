import cv from "/fernandoCabezas.pdf";
import { AiOutlineHome } from "react-icons/ai";
import { Box, Button, Text, IconButton, Flex } from "@chakra-ui/react";
import { Link as Link2 } from "react-router-dom";
const Cv = () => {
  return (
    <>
      <Box display={["none", "none", "block", "block", "block"]}>
        <object
          data={cv}
          type="application/pdf"
          width="100%"
          height="900vh"
        ></object>
      </Box>
      <Box
        display={["flex", "flex", "none", "none", "none"]}
        mt="20"
        textAlign={"center"}
        flexDir="column"
      >
        <Text fontWeight={"bold"} textAlign="center" color="gray">
          Your device cannot view the PDFs, click here to download it
        </Text>
        <Flex justifyContent={"center"}>
          {" "}
          <Link2 to="/">
            <IconButton
              bg="#FFDE59"
              m="5"
              aria-label="Home"
              icon={<AiOutlineHome />}
            />
          </Link2>
          <a
            href={"/fernandoCabezas.pdf"}
            id="enlaceDescargarPdf"
            download={cv}
          >
            <Button w="50vw" mt="5" bg="#FFDE59">
              Download cv
            </Button>
          </a>
        </Flex>
      </Box>
    </>
  );
};
export default Cv;
