import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Connect = () => {
  const [idea, setIdea] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.idea.uz/api/v2/video-reviews?quantity=6")
      .then(res => setIdea(res.data.data));
  }, []);

  return (
    <Box>
      <Container maxW={"80%"} w={"100%"}>
        <Box mb={"20px"} pt={"5px"}>
          <Text fontSize={"28px"}>idea Connect</Text>
        </Box>

        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            "2xl": "repeat(3,1fr)",
          }}
          gap={"10px"}
        >
          {idea.map(item => {
            return (
              <GridItem key={item.id}>
                <Box
                  borderRadius={"10px"}
                  boxShadow={" 0px 0px 37px 0px rgba(210, 220, 230, 1)"}
                  w={"100%"}
                >
                  <Flex justify={"center"}>
                    <Image w={"291px"} h={"174px"} src={item.image} />
                  </Flex>
                  <Heading textAlign={"center"} size={"18px"}>
                    {item.name}
                  </Heading>
                  <Text textAlign={"center"} fontSize={"14px"}>
                    {item.description}
                  </Text>
                </Box>
              </GridItem>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Connect;
