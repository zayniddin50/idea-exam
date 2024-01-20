import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import rasm from "../assets/imgs/image.webp";
import { useState } from "react";
import { Link } from "react-router-dom";
const Aksiyapage = () => {
  let time = new Date().toLocaleTimeString();
  const [times, setTimes] = useState(time);
  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    setTimes(time);
  };
  setInterval(UpdateTime, 1000);
  return (
    <Box>
      <Container maxW={"80%"} w={"100%"}>
        <Flex
          flexWrap={{ base: "wrap", xl: "" }}
          justify={{ base: "center", xl: "space-between" }}
          align={"center"}
        >
          <Box pt={"80px"}>
            <Link to={"/"}>
              <Image
                borderRadius={"8px"}
                w={"500px"}
                h={"300px"}
                objectFit={"cover"}
                alt="rasm"
                src={rasm}
              />
            </Link>
          </Box>
          <Box
            borderRadius={"8px"}
            w={"500px"}
            mt={"70px"}
            h={"300px"}
            objectFit={"cover"}
            alt="rasm"
            _hover={{
              boxShadow: " 0px 0px 100px 100px rgba(193, 206, 216, 0.2);",
            }}
            transition={"all 1s"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            gap={"10px"}
          >
            <Heading
              textAlign={"center"}
              fontSize={{ base: "20px", lg: "30px" }}
            >
              Техника по 99 000 сум в месяц
            </Heading>
            <Text textAlign={"center"} fontSize={{ base: "20px", lg: "35px" }}>
              Hours, Minutes, Seconds:
            </Text>

            <Heading textAlign={"center"}>{times}</Heading>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Aksiyapage;
