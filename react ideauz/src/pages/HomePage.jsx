import React from "react";
import Corusel from "../corusel/Corusel";
import rasm from "../assets/imgs/image (2).webp";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Recamencadr from "../cotalog/Recamencadr";
import Madal from "../context/Madal";
import Smartfon from "../cotalog/Smartfon";
import Texnik from "../cotalog/Texnik";
import TexnikDom from "../cotalog/TexnikDom";
import Aksiya from "../cotalog/Aksiya";
import Recamen from "../cotalog/Recamen";
import Katolog from "../cotalog/Kadolog";
import "../pages/HomePage.css";
import Foreveryone from "../components/Foreveryone";
import "../pages/Home.css";
const HomePage = () => {
  return (
    <Box className="home">
      <Container maxW={"90%"} w={"100%"}>
        <Corusel />
        <Recamencadr />
        <Madal />
        <Smartfon />
        <Texnik />
        <TexnikDom />
        <Aksiya />
        <Recamen />
        <Katolog />
      </Container>
      <Foreveryone />
    </Box>
  );
};

export default HomePage;
