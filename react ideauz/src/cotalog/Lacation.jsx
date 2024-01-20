import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import "./lacation.css";

const Maps = () => {
  return (
    <Box pt={"70px"}>
      <Container maxW={"80%"} w={"100%"}>
        <Box p={"0 10px"} gap={"10px"}>
          <Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23882.5071734393!2d60.54695785045625!3d41.56246138368282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc952d2ed05dd%3A0xc1663cb3dba70ba2!2z0JjQtNC10LAg0LzQsNGA0LrQtdGC!5e0!3m2!1sru!2s!4v1704531749007!5m2!1sru!2s"
              width="100%"
              height="550"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
          <Box
            boxShadow={" 0px 0px 37px 0px rgba(210, 220, 230, 1)"}
            w={"100%"}
          >
            <Heading textAlign={"center"} size={"30px"}>
              Выберите область
            </Heading>
            <Box borderRadius={"5px"} m={"10px"} className="maps">
              <select className="section">
                <option>Все области</option>
                <option>Ташкент</option>
                <option>Ташкентская область</option>
                <option>Республика Каракалпакстан</option>
                <option>Андижанская область</option>
                <option>Бухарская область</option>
                <option>Кашкадарьинская область</option>
                <option>Навоийская область</option>
                <option>Наманганская область</option>
                <option>Сурхандарьинская область</option>
                <option>Ферганская область</option>
                <option>Хорезмская область</option>
              </select>
            </Box>
            <Box p={"10px 12px"} cursor={"pointer"} fontSize={"20px"}>
              <Text _hover={{ color: "#DD1470" }} transition={"all 1s"}>
                idea Чиланзар
              </Text>
              <Text _hover={{ color: "#DD1470" }} transition={"all 1s"}>
                idea Нурафшан
              </Text>
              <Text _hover={{ color: "#DD1470" }} transition={"all 1s"}>
                idea Юнусабад
              </Text>
              <Text _hover={{ color: "#DD1470" }} transition={"all 1s"}>
                idea Буюк Ипак Йули
              </Text>
              <Text _hover={{ color: "#DD1470" }} transition={"all 1s"}>
                idea Сергели
              </Text>
              <Text _hover={{ color: "#DD1470" }} transition={"all 1s"}>
                idea Магнит
              </Text>
              <Text _hover={{ color: "#DD1470" }} transition={"all 1s"}>
                idea Шахрисабз
              </Text>
              <Text _hover={{ color: "#DD1470" }} transition={"all 1s"}>
                idea Карши
              </Text>
              <Text _hover={{ color: "#DD1470" }} transition={"all 1s"}>
                idea Зарафшан
              </Text>
              <Text _hover={{ color: "#DD1470" }} transition={"all 1s"}>
                idea Навои
              </Text>
              <Text _hover={{ color: "#DD1470" }} transition={"all 1s"}>
                idea Беруний
              </Text>
              <Text _hover={{ color: "#DD1470" }} transition={"all 1s"}>
                idea Алмалык
              </Text>
              <Text _hover={{ color: "#DD1470" }} transition={"all 1s"}>
                idea Янгиюль
              </Text>
              <Text _hover={{ color: "#DD1470" }} transition={"all 1s"}>
                idea Андижан
              </Text>
              <Text _hover={{ color: "#DD1470" }} transition={"all 1s"}>
                idea Чирокчи
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Maps;
