import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { MadalContext } from "./MadalContext";

const Madal = () => {
  const [state, setState] = useState("");

  const { open, CloseOpen, product } = useContext(MadalContext);
  const toast = useToast();
  const products = () => {
    toast({
      title: "Xaridingiz qabul qilindi",
      description: "Tanlov uchun rahmat",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    CloseOpen();
  };
  return (
    <>
      <Modal isOpen={open} onClose={CloseOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Flex justify={"center"}>
                <Image
                  src={product.img}
                  w={"180px"}
                  h={"180px"}
                  objectFit={"cover"}
                  alt="rasm"
                />
              </Flex>
              <Text color={"#DD1470"}>{product.category_name}</Text>
              <Text
                cursor={"pointer"}
                _hover={{ color: "#DD1470" }}
                transition={"all 1s"}
              >
                {Number(product.current_price).toLocaleString("en-US")}:So'm
              </Text>
            </Box>
            <Box mb={"10px"}>
              <Input
                onChange={e => setState(e.target.value)}
                mb={"10px"}
                placeholder="Name"
              />
              <InputGroup>
                <InputLeftAddon children="+998" />
                <Input placeholder="Phone number" type="number" />
              </InputGroup>
              <Button onClick={products} colorScheme="facebook" mt={"10px"}>
                Buy
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Madal;
