import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { BiLogoTelegram } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Box className="footer-div" mt={"10px"} bg={"#282f3c"} >
      <Container maxW={"80%"} w={"100%"}>
        <Box>
          <Grid
            gap={{ base: "40px", lg: "27px" }}
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              xl: "repeat(4,1fr)",
              "2xl": "repeat(5,1fr)",
            }}
          >
            <GridItem pt={"100px"}>
              <Link to={"/"}>
                <Heading color={"#FFF"}>idea</Heading>
              </Link>
              <Flex gap={"10px"}>
                <Box
                  border={"1px solid gray"}
                  w={"40px"}
                  borderRadius={"50%"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  _hover={{ bg: "#0D6EFF" }}
                  transition={"all 1s"}
                  color={"gray"}
                >
                  <BiLogoTelegram size={25} />
                </Box>
                <Box
                  border={"1px solid gray"}
                  w={"40px"}
                  h={"40px"}
                  borderRadius={"50%"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  _hover={{ bg: "#6f42c1" }}
                  transition={"all 1s"}
                  color={"gray"}
                >
                  <FaFacebook size={25} />
                </Box>
                <Box
                  border={"1px solid gray"}
                  w={"40px"}
                  h={"40px"}
                  borderRadius={"50%"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  _hover={{ bg: "#d63384;" }}
                  transition={"all 1s"}
                  color={"gray"}
                >
                  <FaInstagram size={25} />
                </Box>
              </Flex>
            </GridItem>
            <GridItem pt={"100px"}>
              <Flex gap={"10px"}>
                <Box>
                  <Heading color={"white"}>Покупателям</Heading>
                  <Link color={"#DD1470"} to={"/Atver"}>
                    <Text color={"white"}> Вопросы и ответы</Text>
                  </Link>
                  <Link to={"/Page"}>
                    <Text color={"white"}>Как сделать заказ на сайте</Text>
                  </Link>
                </Box>
              </Flex>
            </GridItem>
            <GridItem pt={"100px"}>
              <Flex gap={"10px"}>
                <Box>
                  <Heading color={"white"}>idea.uz</Heading>
                  <Link color={"#DD1470"} to={"/Page"}>
                    <Text color={"white"}> О нас</Text>
                  </Link>
                  <Box>
                    <Link color={"#DD1470"} to={"/Maps"}>
                      <Text color={"white"}> Наши магазины</Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link color={"#DD1470"} to={"/Kontact"}>
                      <Text color={"white"}> Kontact</Text>
                    </Link>
                  </Box>
                </Box>
              </Flex>
            </GridItem>
            <GridItem pt={"100px"}>
              <Flex gap={"10px"}>
                <Box>
                  <Heading color={"white"}>Информация</Heading>
                  <Link color={"#DD1470"} to={"/Stat"}>
                    <Text color={"white"}> Статьи</Text>
                  </Link>
                  <Box>
                    <Link color={"#DD1470"} to={"/Rassporka"}>
                      <Text color={"white"}> Рассрочка</Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link color={"#DD1470"} to={"/Вакансии"}>
                      <Text color={"white"}>Вакансии</Text>
                    </Link>
                  </Box>
                </Box>
              </Flex>
            </GridItem>
            <GridItem pt={"100px"}>
              <Flex gap={"10px"}>
                <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                  <Heading size={{ base: "25px", sm: "" }} color={"white"}>
                    Обратная связь
                  </Heading>
                  <Text
                    fontSize={"13px"}
                    color={"white"}
                    border={"1px solid #fff"}
                    textAlign={"center"}
                    borderRadius={"8px"}
                    p={"6px 12px"}
                  >
                    Оставить сообщение
                  </Text>

                  <Box>
                    <Text
                      _hover={{ color: "#dd1470" }}
                      color={"white"}
                      transition={"all 1s"}
                      cursor={"pointer"}
                    >
                      71 230 77 99
                    </Text>
                  </Box>
                  <Box>
                    <Text color={"gray"} cursor={"pointer"}>
                      Ежедневно с 9:00 до 21:00
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{ color: "#dd1470" }}
                      color={"white"}
                      transition={"all 1s"}
                      size={"18px"}
                      cursor={"pointer"}
                    >
                      info@ideastore.uz
                    </Heading>
                  </Box>
                  <Box>
                    <Text color={"#7d7a8c"}>Почта</Text>
                  </Box>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
