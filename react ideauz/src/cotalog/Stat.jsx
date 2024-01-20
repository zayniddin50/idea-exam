import { Box, Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";
import Connect from "./Connect";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Stat = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.idea.uz/api/v2/articles?quantity=9&page=undefined")
      .then(res => setState(res.data.data));
  }, []);
  return (
    <Box pt={"70px"}>
      <Container maxW={"80%"} w={"100%"}>
        <Box fontSize={30} gap={"5px"} display={"flex"} alignItems={"center"}>
          <Link to={"/"}>
            <FaArrowLeft />
          </Link>
          <Link to={"/"}>Главная</Link>
        </Box>
        <Box>
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
              "2xl": "repeat(4,1fr)",
            }}
            gap={"10px"}
          >
            {state.map(item => (
              <GridItem key={item.id} pt={"70px"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  boxShadow={" 0px 0px 37px 0px rgba(210, 220, 230, 1)"}
                >
                  <Box
                    p={"15px"}
                    display={"flex"}
                    justifyContent={"center"}
                    w={"100%"}
                  >
                    <Image
                      w={"255px"}
                      h={"153px"}
                      objectFit={"cover"}
                      src={item.img}
                    />
                  </Box>
                  <Text mb={"15px"} textAlign={"center"}>
                    {item.name}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>

          <Connect />

          {/* https://api.idea.uz/api/v2/video-reviews?quantity=6 */}
          {/* https://api.idea.uz/api/v2/video-reviews?quantity=6 */}
          {/* https://api.idea.uz/api/v2/video-reviews?quantity=6 */}
        </Box>
      </Container>
    </Box>
  );
};

export default Stat;
