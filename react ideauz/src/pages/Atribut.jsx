import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Atribut = () => {
  const [stribur, setAtribut] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.idea.uz/api/v2/products/7049/attributes")
      .then(res => setAtribut(res.data.data));
  }, []);
  return (
    <div>
      <Grid>
        {stribur.map(item => (
          <GridItem key={item.id}>
            <Flex justify={"space-between"}>
              <Box>
                <Text>{item.name}</Text>
              </Box>
              <Box>
                <Text>{item.attribute_values[1]}</Text>
              </Box>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default Atribut;
