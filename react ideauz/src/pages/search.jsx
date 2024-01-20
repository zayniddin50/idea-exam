import { useEffect, useState, useContext } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import axios from "axios";
import { SearchContext } from "../context/SearchContext";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Search = () => {
  const { states, setStatess } = useContext(SearchContext);
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.idea.uz/api/v2/products?is_bestseller=1&order_by=order&quantity=20&quantity=20`
      )
      .then(res =>
        setState(
          res.data.data.filter(item => {
            return (
              item.title_name.toLowerCase().includes(states.toLowerCase()) ||
              item.category_name.toLowerCase().includes(states.toLowerCase()) ||
              item.category_name.toLowerCase().includes(states.toLowerCase())
            );
          })
        )
      );
  }, []);
  return (
    <Box>
      <Container maxW={"80%"} w={"100%"}>
        <Grid
          gap={"10px"}
          pt={"80px"}
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr),",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
            xl: "repeat(5,1fr)",
            "2xl": "repeat(6,1fr)",
          }}
        >
          {state.map(product => (
            <GridItem border={"1px solid gray"} key={product.id} w={"100%"}>
              <Box display={"flex"} justifyContent={"center"}>
                <Image src={product.img} w={180} />
              </Box>{" "}
              <Flex p={"10px"} direction={"column"}>
                <Text color={"#DD1370"}>{product.current_price}:som</Text>
                <Text>{product.title_name}</Text>
                <Text>{product.category_name}</Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
        <Box _hover={{ color: "#DD1470" }} transition={"all 1s"}>
          <Link to={"/"}>
            <FaArrowLeft size={40} />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Search;
