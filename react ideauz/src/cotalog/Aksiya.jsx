import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import rasm from "../assets/imgs/image.webp";
import { Link } from "react-router-dom";

const Aksiya = () => {
  return (
    <Box>
      <Container maxW={"90%"} w={"100%"}>
        <Box>
          <Text fontWeight={700} fontSize={{ base: "20px", "2xl": "30px" }}>
            Акции и видеообзоры
          </Text>
          <Link to={"/AksiyaPageIdea"}>
            <Button mb={"20px"} p={"14px 24px"} bg={"#dd1470"} color={"white"}>
              idea Connect
            </Button>
          </Link>
          <Box>
            <Link to={"aksiyapage"}>
              <Image
                borderRadius={"8px"}
                w={"500px"}
                h={"300px"}
                objectFit={"cover"}
                alt="rasm"
                src={rasm}
              />
              <Box>
                <Text>Техника по 99 000 сум в месяц</Text>
              </Box>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Aksiya;
