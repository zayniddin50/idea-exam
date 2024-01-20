import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { TiShoppingCart } from "react-icons/ti";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MadalContext } from "../context/MadalContext";
import { BaskentContext } from "../context/BaskentContext";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import "../App.css";
const Recamen = () => {
  const [recamen, setRecamen] = useState([]);
  const { SetOpen } = useContext(MadalContext);

  const { addToStorage } = useContext(BaskentContext);
  useEffect(() => {
    axios
      .get(
        "https://api.idea.uz/api/v2/products?category_id=55&quantity=12&order_by=created_at&order_direction=desc"
      )
      .then(rec => setRecamen(rec.data.data));
  }, []);

  const addToBaskent = product => {
    addToStorage(product);
  };

  const navigat = useNavigate();
  return (
    <Container maxW={"90%"} w={"100%"}>
      <Box>
        <Text pt={"30px"} fontSize={"25px"} color={"black"} fontWeight={600}>
          Специально для вас
        </Text>
        <Grid
          w={"100%"}
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
            xl: "repeat(5,1fr)",
            "2xl": "repeat(6,1fr)",
          }}
        >
          {recamen.slice(0, 12).map(product => (
            <GridItem
              cursor={"pointer"}
              w={"92%"}
              p={"10px"}
              key={product.id}
              _hover={{ boxShadow: " 0px 0px 37px 0px rgba(215, 226, 234, 1)" }}
              transition={"all 1s"}
              pl={"8px"}
              mb={"10px"}
              borderRadius={"10px"}
            >
              <Box display={"flex"} justifyContent={"end"}>
                <CiHeart size={30} />
              </Box>
              <Flex justify={"center"}>
                <Image
                  onClick={() => navigat(`/recamen/${product.id}`)}
                  src={product.img}
                  w={"160px"}
                  h={"160px"}
                  objectFit={"cover"}
                  alt="rasm"
                />
              </Flex>
              <Text color={"#DD1470"} fontWeight={500}>
                {product.current_price.toLocaleString("en-US")}:Som
              </Text>
              <Text
                className="name"
                _hover={{ color: "#DD1470" }}
                transition={"all 1s"}
              >
                {product.title_name}
              </Text>
              <Text
                className="name"
                _hover={{ color: "#DD1470" }}
                transition={"all 1s"}
              >
                Бренд: {product.category_name}
              </Text>
              <Flex align={"center"} gap={"10px"}>
                <Button
                  onClick={() => SetOpen(product)}
                  borderRadius={"10px"}
                  _hover={{ bg: "#DD1470", color: "white" }}
                  transition={"all 1s"}
                >
                  Купить сразу
                </Button>
                <Button
                  onClick={() => addToBaskent(product)}
                  _hover={{ bg: "#DD1470", color: "white" }}
                  transition={"all 1s"}
                >
                  <TiShoppingCart />
                </Button>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Recamen;
