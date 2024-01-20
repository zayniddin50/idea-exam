import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Вакансии = () => {
  return (
    <Box pt={"80px"}>
      <Container maxW={"container.xl"}>
        <Flex gap={"10px"}>
          <Link to={"/"}>Главная</Link>
          <Text color={"#dd1470"} cursor={"pointer"}>
            Резюме в формате PDF или DOCX
          </Text>
        </Flex>
        <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
          <Box>
            <Heading size={"24px"}>Резюме в формате PDF или DOCX</Heading>
          </Box>
          <Box
            boxShadow={" 0px 0px 37px 0px rgba(210, 220, 230, 1)"}
            w={"100%"}
            h={"133px"}
            borderRadius={"12px"}
            p={"24px"}
          >
            <Heading size={"24px"}>
              Менеджер по оформлению документов рассрочки
            </Heading>
            <Text>
              Коммуникабельность, активность, нацеленность на результат,
              ответственность, способность к обучению- всё это потребуется на
              данную позицию!
            </Text>
            <strong>по итогам собеседования</strong>
          </Box>
          <Box
            boxShadow={" 0px 0px 37px 0px rgba(210, 220, 230, 1)"}
            w={"100%"}
            h={"133px"}
            borderRadius={"12px"}
            p={"24px"}
          >
            <Heading size={"24px"}>Продавец-консультант</Heading>
            <Text>
              Если Вы активны и любите технику, Общение для Вас как воздух, а
              помощь людям-Ваше призвание, Тогда эта вакансия для Вас!
            </Text>
            <strong>по итогам собеседования</strong>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Вакансии;
