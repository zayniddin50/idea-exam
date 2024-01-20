import { Box, Container, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Atver = () => {
  return (
    <Box mb={"10px"} pt={"80px"}>
      <Container maxW={"80%"} w={"100%"}>
        <Link to={"/"}>Главная</Link>
        <Box
          boxShadow={" 0px 0px 37px 0px rgba(210, 220, 230, 1)"}
          w={"100%"}
          pt={"10px"}
        >
          <Box p={"10px"}>
            <Heading
              borderRadius={"5px"}
              p={"10px"}
              pl={"10px"}
              border={"1px solid gray"}
              size={"30px"}
            >
              Могу ли я получить рассрочку
            </Heading>
          </Box>
          <Box p={"10px"}>
            <Heading
              borderRadius={"5px"}
              p={"10px"}
              pl={"10px"}
              border={"1px solid gray"}
              size={"30px"}
            >
              Выдаете ли Вы товары в рассрочку в регионы? В Ташкентскую область?
            </Heading>
          </Box>
          <Box p={"10px"}>
            <Heading
              borderRadius={"5px"}
              p={"10px"}
              pl={"10px"}
              border={"1px solid gray"}
              size={"30px"}
            >
              Какие документы необходимы для оформления рассрочки
            </Heading>
          </Box>
          <Box p={"10px"}>
            <Heading
              borderRadius={"5px"}
              p={"10px"}
              pl={"10px"}
              border={"1px solid gray"}
              size={"30px"}
            >
              Что такое “скоринг”
            </Heading>
          </Box>
          <Box p={"10px"}>
            <Heading
              borderRadius={"5px"}
              p={"10px"}
              pl={"10px"}
              border={"1px solid gray"}
              size={"30px"}
            >
              Как работает система?
            </Heading>
          </Box>
          <Box p={"10px"}>
            <Heading
              borderRadius={"5px"}
              p={"10px"}
              pl={"10px"}
              border={"1px solid gray"}
              size={"30px"}
            >
              Какие критерии влияют на результат скоринга?
            </Heading>
          </Box>
          <Box p={"10px"}>
            <Heading
              borderRadius={"5px"}
              p={"10px"}
              pl={"10px"}
              border={"1px solid gray"}
              size={"30px"}
            >
              На сколько конфиденциальна передача данных?
            </Heading>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Atver;
