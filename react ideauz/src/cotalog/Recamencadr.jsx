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
import { CiShoppingBasket } from "react-icons/ci";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MadalContext } from "../context/MadalContext";
import { BaskentContext } from "../context/BaskentContext";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Recamencadr() {
  const [recamen, setRecamen] = useState([]);
  const [icons] = useState(false);
  const { SetOpen } = useContext(MadalContext);
  const { addToStorage } = useContext(BaskentContext);

  useEffect(() => {
    axios
      .get(
        "https://api.idea.uz/api/v2/products?is_bestseller=1&order_by=order&quantity=20&quantity=20"
      )
      .then(rec => setRecamen(rec.data.data));
  }, []);

  const addToBaskent = product => {
    addToStorage(product);
  };

  const navigat = useNavigate();

  return (
    <Container maxW={"90%"} w={"100%"}>
      <Box pt={"80px"} mb={"10px"}>
        <Text
          display={"flex"}
          mt={"-80px"}
          fontSize={"25px"}
          color={"black"}
          fontWeight={600}
        >
          Хиты продаж
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
              w={"90%"}
              p={"10px"}
              borderRadius={"10px"}
              key={product.id}
              _hover={{ boxShadow: " 0px 0px 37px 0px rgba(215, 226, 234, 1)" }}
              transition={"all 1s"}
              pl={"8px"}
              mb={"10px"}
            >
              <Box display={"flex"} justifyContent={"end"}>
                <CiHeart size={30} />
              </Box>
              <Flex justify={"center"}>
                <Image
                  onClick={() => navigat(`/products/${product.id}`)}
                  src={product.img}
                  w={"160px"}
                  h={"160px"}
                  objectFit={"cover"}
                  alt="rasm"
                />
              </Flex>
              <Text className="name" color={"#DD1470"} fontWeight={500}>
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
                  {icons ? <CiShoppingBasket /> : <TiShoppingCart />}
                </Button>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
      {/* // https://api.idea.uz/api/v2/products?quantity=12&category_id=6 */}
    </Container>
  );
}

export default Recamencadr;
