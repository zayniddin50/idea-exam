import { BaskentContext } from "../context/BaskentContext";
import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  Heading,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BasentLike } from "../context/BasentLike";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Foreveryone from '../components/Foreveryone'
import "../App.css";
const Korzinka = () => {
  const { state, setState } = useContext(BaskentContext);

  const { addToStorage } = useContext(BaskentContext);
  const { addTOlike } = useContext(BasentLike);

  const addToBaskent = product => {
    addToStorage(product);
  };
  const addToLike = product => {
    addTOlike(product);
  };

  //  ////////////////////////////////  ////////////////////////////////  ////////////////////////////////  ////////////////////////////////  ////////////////////////////////  //////////////////////////////

  let arr = state.map(elem => {
    return {
      ...elem,
      count: 1,
    };
  });

  let remove = id => {
    let newData = count.filter(item => item.id !== id);
    setCount(newData);
    setState(newData);
  };
  // state array
  let [count, setCount] = useState(arr);
  //  ////////////////////////////////////////////////////////////////  ////////////////////////////////  ////////////////////////////////  ////////////////////////////////  //////////////////////////////
  const decCrease = id => {
    let newCount = count.map(elem => {
      if (elem.id === id) {
        return {
          ...elem,
          count: elem.count + 1,
        };
      }
      return elem;
    });
    setCount(newCount);
  };
  //  ////////////////////////////////////////////////////////////////  ////////////////////////////////  ////////////////////////////////  ////////////////////////////////  /////////////////////////////
  const inCrease = id => {
    let newCount = count.map(elem => {
      if (elem.id === id && elem.count > 1) {
        return {
          ...elem,
          count: elem.count - 1,
        };
      }
      return elem;
    });
    setCount(newCount);
  };

  let totalPrice = 0;
  //  ////////////////////////////////////////////////////////////////  ////////////////////////////////  ////////////////////////////////  ////////////////////////////////  //////////////////////////////
  const navigat = useNavigate();
  return (
    <Box>
      <Container maxW={"80%"} w={"100%"}>
        {count?.map(products => {
          let localPrice = products.current_price * products.count;
          totalPrice += localPrice;
          return (
            <Box maxW={"380px"} key={products.id} pt={"75px"}>
              <Grid
                templateColumns={{ base: "auto", xl: "auto auto " }}
                gap={"20px"}
                key={products.id}
                alignItems={"center"}
              >
                <GridItem
                  justifyContent={"center"}
                  alignItems={"center"}
                  templateColumns={{ base: "auto", xl: "auto auto" }}
                >
                  <Box display={"flex"} justifyContent={"center"}>
                    <Image
                      src={products.img}
                      w={"160px"}
                      h={"160px"}
                      objectFit={"cover"}
                      alt="rasm"
                    />
                  </Box>
                  <Box w={"100%"}>
                    <Text
                      fontSize={"14px"}
                      borderBottom={"1px solid gray"}
                      color={"#DD1470"}
                      fontWeight={500}
                    >
                      {products.current_price}
                    </Text>
                    <Text
                      borderBottom={"1px solid gray"}
                      _hover={{ color: "#DD1470" }}
                      transition={"all 1s"}
                      fontSize={{ base: "8px", "2xl": "8.1px" }}
                      cursor={"pointer"}
                    >
                      {products.title_name}
                    </Text>
                    <Text
                      fontSize={"10px"}
                      borderBottom={"1px solid gray"}
                      _hover={{ color: "#DD1470" }}
                      transition={"all 1s"}
                      cursor={"pointer"}
                    >
                      Бренд: {products.category_name}
                    </Text>
                  </Box>
                </GridItem>

                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  align={"center"}
                  gap={"10px"}
                >
                  <Box _hover={{ color: "#DD1470" }} transition={"all 1s"}>
                    <FaRegTrashAlt
                      cursor={"pointer"}
                      size={35}
                      onClick={() => remove(products.id)}
                    />
                  </Box>
                  <Flex gap={2}>
                    <Button onClick={() => inCrease(products.id)}>-</Button>
                    <Heading>{products.count}</Heading>
                    <Button onClick={() => decCrease(products.id)}>+</Button>
                  </Flex>
                </Box>
              </Grid>
            </Box>
          );
        })}

        <Box
          mt={"10px"}
          boxShadow={" 0px 0px 37px 0px rgba(210, 220, 230, 1)"}
          w={{ base: "100%", xl: "25.2%" }}
        >
          {count.map(product => {
            return (
              <Box cursor={"pointer"} key={product.id}>
                <Text fontSize={"8px"} color={"#dd1470"}>
                  {product.title_name}
                </Text>
                <Flex mb={"10px"} cursor={"pointer"} gap={"10px"}>
                  <Box>
                    <Text>Цена</Text>
                  </Box>
                  <Box>
                    <Text>{product.current_price} sum</Text>
                  </Box>
                </Flex>
              </Box>
            );
          })}
          <Box w={"250px"}>
            <Text fontSize={"12px"} color={"black"} cursor={"pointer"}>
              Ваш платеж: : {totalPrice} сум x 1 раз
            </Text>
            <Flex justify={"center"}>
              <Heading cursor={"pointer"} pl={"100px"} size={"16px"}>
                = {totalPrice} som
              </Heading>
            </Flex>
          </Box>
        </Box>
        <Box pt={"80px"} _hover={{ color: "#DD1470" }} transition={"all 1s"}>
          <Link to={"/"}>
            <FaArrowLeft size={40} />
          </Link>
        </Box>
      </Container>
      <Foreveryone/>
    </Box>
  );
};

export default Korzinka;
