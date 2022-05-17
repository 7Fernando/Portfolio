import cv from "/assets/fernandoCabezas.pdf";
import { Box, Button, Text } from "@chakra-ui/react";
const Cv = () => {
  return (
    <>
      <Box display={["none", "none", "block", "block", "block"]}>
        <object
          data="/assets/fernandoCabezas.pdf"
          type="application/pdf"
          width="100%"
          height="900vh"
        ></object>
      </Box>
      <Box display={["flex", "flex", "none", "none", "none"]} mt="20" textAlign={"center"} flexDir="column">
        <Text fontWeight={"bold"} textAlign="center" color="gray">Your device cannot view the PDFs, click here to download it</Text>
        <a
          href={"/assets/fernandoCabezas.pdf"}
          id="enlaceDescargarPdf"
          download={cv}
        >
          <Button w="50vw" mt="5" bg="#FFDE59">Download cv</Button>
        </a>
      </Box>
    </>
  );
};
export default Cv;
