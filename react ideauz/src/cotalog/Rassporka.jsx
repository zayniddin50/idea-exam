import { Box, Container, Text } from "@chakra-ui/react";

const Rassporka = () => {
  return (
    <>
      <Box pt={"70px"}>
        <Container maxW={"80%"} w={"100%"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"15px"}
            p={"15px"}
            boxShadow={" 0px 0px 37px 0px rgba(210, 220, 230, 1)"}
            w={"100%"}
          >
            <Text>
              В магазине бытовой техники и электроники idea можно оформить
              моментальную рассрочку на весь ассортимент.
            </Text>
            <Text>Забирайте - сейчас, платите - потом!</Text>
            <Text>
              Во всех филиалах сети магазинов idea, можно купить бытовую технику
              и электронику в рассрочку сроком на 6, 12, 18, 24 или 30 месяцев
              без предоплаты и с бесплатной доставкой по городу Ташкент.
            </Text>
            <Text>Условия и документы для оформления товара в рассрочку:</Text>
            <Text fontWeight={800} color={"black"}>
              1.Оформление на паспорт, условия:
            </Text>
            <Text>
              -официальное трудоустройство с заработной платой свыше 1 350 000
              сум;
            </Text>
            <Text fontWeight={800} color={"black"}>
              2.Паспорт + пластиковая карта Uzcard или Humo:
            </Text>
            <Text>
              - срок использования карты не меньше 3-х месяцев с беспрерывными
              ежемесячными поступлениями не менее 1 200 000 сум;
            </Text>
            <Text>-выдается по всему Узбекистану.</Text>
            <Text>
              Решение о выдаче рассрочки можно получить сразу после результата
              скоринга.
            </Text>
            <Text>
              Минимальная стоимость товара для покупки в рассрочку - 500 000
              сум.
            </Text>
            <Text>
              Рассрочку можно оформить в онлайн режиме, оставив заявку на сайте
              idea.uz или посетив один из наших магазинов.
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Rassporka;
