import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { CgPathIntersect } from "react-icons/cg";
import { BsFillTelephoneMinusFill } from "react-icons/bs";

import { MdOutlineMailOutline } from "react-icons/md";

const Kontact = () => {
  return (
    <Box pt={"70px"}>
      <Container maxW={"container.xl"}>
        <Box
          p={"15px"}
          boxShadow={" 0px 0px 37px 0px rgba(210, 220, 230, 1)"}
          w={"100%"}
        >
          <Box>
            <Heading>Контакты</Heading>
          </Box>
          <Flex direction={"column"} gap={"10px"} pt={"20px"}>
            <Flex
              transition={"all 1s"}
              cursor={"pointer"}
              gap={"10px"}
              _hover={{ color: "#DD1470" }}
              align={"center"}
            >
              <CgPathIntersect size={27} />
              <Text>Адрес: г. Ташкент, ул Мирабад, 41/3</Text>
            </Flex>
            <Flex
              cursor={"pointer"}
              transition={"all 1s"}
              gap={"10px"}
              _hover={{ color: "#DD1470" }}
              align={"center"}
            >
              <BsFillTelephoneMinusFill size={27} />
              <Text>Телефон: 71 230 77 99</Text>
            </Flex>
            <Flex
              cursor={"pointer"}
              transition={"all 1s"}
              gap={"10px"}
              _hover={{ color: "#DD1470" }}
              align={"center"}
            >
              <MdOutlineMailOutline size={27} />
              <Text>E-mail: info@ideastore.uz</Text>
            </Flex>
          </Flex>
          <Box pt={"30px"}>
            <Heading>Напишите нам</Heading>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
            pt={"10px"}
          >
            <Box>
              <Input
                w={{ base: "250px", sm: "385px" }}
                h={"50px"}
                placeholder="Ваше имя"
              />
            </Box>
            <Box>
              <Input
                placeholder="998 (__) ___-__-__"
                name="phone"
                w={{ base: "250px", sm: "385px" }}
                h={"50px"}
              />
            </Box>
            <Box>
              <Textarea
                h={"100px"}
                pt={"15px"}
                w={{ base: "250px", sm: "385px" }}
                placeholder="Сообщение"
                name="message"
              ></Textarea>
            </Box>
            <Box>
              <Button
                _hover={{ bg: "#DD1470", color: "#FFF" }}
                transition={"all 1s"}
                w={{ base: "250px", sm: "385px" }}
                type="submit"
                disabled
              >
                Отправить
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Kontact;
