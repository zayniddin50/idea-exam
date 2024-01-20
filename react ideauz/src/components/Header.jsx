import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import idea from "../assets/imgs/idea.png";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { IoClose, IoPersonOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { BaskentContext } from "../context/BaskentContext";
import { SearchContext } from "../context/SearchContext";
import { BsFillTelephoneMinusFill } from "react-icons/bs";

import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import "./Burger.css";
import BurgerKotolog from "./BurgerKotolog";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [login, setLogin] = useState(false);
  const { state } = useContext(BaskentContext);
  const { states, setStatess } = useContext(SearchContext);
  const navigate = useNavigate();
  let onSearch = () => {
    navigate(`/search/${states}`);
  };
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      bg={"#dee2e6"}
      position={"fixed"}
      w={"100%"}
      zIndex={2}
    >
      <Container maxW={"80%"} w={"100%"}>
        <Flex
          gap={"10px"}
          justify={"space-between"}
          align={"center"}
          h={"70px"}
        >
          <Link to={"/"}>
            <Image maxW={"100%"} src={idea} objectFit={"cover"} />
          </Link>
          <Flex align={"center"}>
            <Box
              display={{ base: "none", lg: "block" }}
              borderRadius={"6px"}
              bg={"#dd1470"}
              color={"white"}
            >
              <Button
                variant={"un"}
                rightIcon={<CiMenuBurger />}
                onClick={onOpen}
              >
                Каталог товаров
              </Button>
              <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Каталог</DrawerHeader>

                  <DrawerBody>
                    <BurgerKotolog />
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
            <Box>
              <Box
                w={"30px"}
                h={"30px"}
                display={{ base: "block", lg: "none" }}
                borderRadius={"6px"}
                color={"white"}
                bg={{ base: "none", lg: "#dd1470" }}
                fontSize={"15px"}
              >
                <Button
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  variant={"un"}
                  onClick={onOpen}
                  color={{ base: "#dd1470", lg: "white" }}
                >
                  <CiMenuBurger size={15} />
                </Button>
                <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Каталог</DrawerHeader>

                    <DrawerBody>
                      <BurgerKotolog />
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </Box>
            </Box>
          </Flex>
          <Flex align={"center"}>
            <Box mt={{ base: "10px", md: "" }}>
              <Input
                onKeyDown={e => {
                  if (e.key == "Enter") {
                    onSearch();
                  }
                }}
                onChange={e => setStatess(e.target.value)}
                placeholder="Search"
                w={{
                  base: "160px",
                  "2xl": "500px",
                  xl: "400px",
                  lg: "300px",
                  md: "250px",
                }}
                fontSize={{ base: "10px", sm: "16px" }}
              />
            </Box>
            <Box
              ml={"-30px"}
              mt={{ base: "10px", md: "" }}
              size={{ base: "15px", sm: "30px" }}
            >
              <CiSearch />
            </Box>
          </Flex>
          <Box
            display={{ base: "none", "2xl": "flex" }}
            align={"center"}
            gap={"10px"}
          >
            <Box
              textAlign={"center"}
              alignItems={"center"}
              display={"flex"}
              flexDirection={"column"}
            >
              <CiHeart size={25} />
              <Link>Избранное</Link>
            </Box>
            <Link to={"/Korzinka"}>
              <Box
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Text
                  // bg={"#FFBF3C"}
                  color={"#FFBF3C"}
                  borderRadius={"10px"}
                  mt={"-44px"}
                  pl={"38px"}
                  position={"absolute"}
                >
                  {state.length}
                </Text>
                <SlBasket size={25} />
                <Text>Корзина</Text>
              </Box>
            </Link>

            <Box
              textAlign={"center"}
              alignItems={"center"}
              display={"flex"}
              flexDirection={"column"}
            >
              {!login ? <IoPersonOutline size={25} /> : <UserButton />}

              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <SignOutButton afterSignOutUrl="/" />
              </SignedIn>
            </Box>
          </Box>
          <Flex
            display={{ base: "flex", "2xl": "none" }}
            align={"center"}
            gap={"10px"}
          >
            <Box display={{ base: "none", md: "block" }}>
              <BsFillTelephoneMinusFill />
            </Box>
            <Box display={{ base: "none", md: "block" }}>
              <Image
                w={"30px"}
                borderRadius={"10px"}
                src={
                  "https://w7.pngwing.com/pngs/722/781/png-transparent-flag-of-russia-russia-glass-blue-flag-thumbnail.png"
                }
              />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
