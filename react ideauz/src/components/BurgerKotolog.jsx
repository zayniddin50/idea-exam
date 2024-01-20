import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { FaApple } from "react-icons/fa6";
import { SiHuawei } from "react-icons/si";
import { Link } from "react-router-dom";

const BurgerKotolog = () => {
  return (
    <Box w={"100%"} display={"flex"} justifyContent={"center"}>
      <Container maxW={"80%"} w={"100%"}>
        <Box p={"40px"} display={"block"} bg={"white"}>
          <Flex gap={"10px"} justify={"space-between"}>
            <Box
              cursor={"pointer"}
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
            >
              <Link to={'/Смартфоны'} _hover={{ color: "#dd1470" }} transition={"all 1s"}>
                Смартфоны
              </Link>
              <Link to={'/Category'} _hover={{ color: "#dd1470" }} transition={"all 1s"}>
                ТВ, аудио и видео
              </Link>
              <Text _hover={{ color: "#dd1470" }} transition={"all 1s"}>
                Бытовая техника
              </Text>
              <Text
                fontSize={{ base: "13px", md: "" }}
                _hover={{ color: "#dd1470" }}
                transition={"all 1s"}
              >
                Ноутбуки и компьютеры
              </Text>
              <Text
                fontSize={{ base: "13px", md: "" }}
                _hover={{ color: "#dd1470" }}
                transition={"all 1s"}
              >
                Гаджеты и аксессуары
              </Text>
              <Text _hover={{ color: "#dd1470" }} transition={"all 1s"}>
                Автозона
              </Text>
              <Text _hover={{ color: "#dd1470" }} transition={"all 1s"}>
                Спортивные товары
              </Text>
              <Text
                fontSize={{ base: "11px", md: "" }}
                _hover={{ color: "#dd1470" }}
                transition={"all 1s"}
              >
                Инструменты для ремонта
              </Text>
              <Text _hover={{ color: "#dd1470" }} transition={"all 1s"}>
                Товары для детей
              </Text>
              <Text
                fontSize={{ base: "11px", md: "" }}
                _hover={{ color: "#dd1470" }}
                transition={"all 1s"}
              >
                Камеры видеонаблюдения
              </Text>
              <Text
                fontSize={{ base: "11px", md: "" }}
                _hover={{ color: "#dd1470" }}
                transition={"all 1s"}
              >
                Мебель для офиса и дома
              </Text>
            </Box>

            <Box
              alignItems={"center"}
              gap={"20px"}
              display={{ base: "none", md: "flex" }}
            >
              <Box
                cursor={"pointer"}
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
              >
                <FaApple size={60} />
                <SiHuawei size={60} />
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  _hover={{
                    boxShadow: "0px 0px 3px -1px rgba(91, 108, 122, 1);",
                  }}
                  transition={"all 1s"}
                  borderRadius={"10px"}
                >
                  <Text
                    w={"76px"}
                    h={"76px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    _hover={{
                      boxShadow: "0px 0px 3px -1px rgba(91, 108, 122, 1);",
                      color: "#dd1470",
                    }}
                    transition={"all 1s"}
                    cursor={"pointer"}
                  >
                    vivo
                  </Text>
                </Box>
              </Box>
              <Box>
                <Text
                  w={"80px"}
                  h={"80px"}
                  borderRadius={"10px"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  transition={"all 1s"}
                  _hover={{
                    boxShadow: "0px 0px 3px -1px rgba(91, 108, 122, 1);",
                    color: "#dd1470",
                  }}
                  cursor={"pointer"}
                >
                  SAMSUNG
                </Text>
                <Text
                  w={"80px"}
                  h={"80px"}
                  borderRadius={"10px"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  _hover={{
                    boxShadow: "0px 0px 3px -1px rgba(91, 108, 122, 1);",
                    color: "#dd1470",
                  }}
                  transition={"all 1s"}
                  cursor={"pointer"}
                >
                  Xiomi
                </Text>

                <Box
                  w={"76px"}
                  h={"76px"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  _hover={{
                    boxShadow: "0px 0px 3px -1px rgba(91, 108, 122, 1);",
                    color: "#dd1470",
                  }}
                  transition={"all 1s"}
                  cursor={"pointer"}
                >
                  <Text
                    w={"76px"}
                    h={"76px"}
                    display={"flex"}
                    borderRadius={"10px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    _hover={{
                      boxShadow: "0px 0px 3px -1px rgba(91, 108, 122, 1);",
                      color: "#dd1470",
                    }}
                    transition={"all 1s"}
                    cursor={"pointer"}
                  >
                    XONOR
                  </Text>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default BurgerKotolog;
