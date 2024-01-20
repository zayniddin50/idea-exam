import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
const Katolog = () => {
  const [kadologs, setkadologs] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.idea.uz/api/v2/categories/main")
      .then(kadolog => setkadologs(kadolog.data.data));
  }, []);

  return (
    <Box>
      <Container maxW={"90%"} w={"100%"}>
        <Grid
          w={"100%"}
          gap={"10px"}
          templateColumns={{base:"repeat(4,1fr)",xl:"repeat(5,1fr)"}}
          justifyContent={{ base: "center", sm: "" }}
        >
          {kadologs?.slice(0, 5).map(products => (
            <GridItem key={products.id}>
              <Box
                display={{ base: "none", lg: "block" }}
                _hover={{ bg: "#dd1470", color: "white" }}
                w={{ base: "200px", '2xl': "255px" }}
                h={"250px"}
                borderRadius={"10px"}
                transition={"all 1s"}
              >
                <Text p={"15px"} color={"black"} transition={"all 1s"}>
                  {products.description}
                </Text>
                <Flex mt={"24px"} justify={"end"} p={"10px 0"}>
                  <Image
                    src={products.img}
                    w={"170px"}
                    h={"160px"}
                    objectFit={"cover"}
                    alt="rasm"
                  />
                </Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>

      {/* description img id */}
    </Box>
  );
};

export default Katolog;
