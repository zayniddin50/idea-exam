import { Box, Container, Flex, Text } from "@chakra-ui/react";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import { useContext, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { BaskentContext } from "../context/BaskentContext";

const Foreveryone = () => {
  const [login, setLogin] = useState(false);
  const { state } = useContext(BaskentContext);

  return (
    <Box w={"100%"} maxW={"100%"} position={"fixed"} bottom={0} bg={"#fff"}>
      <Container maxW={"80%"} w={"100%"}>
        <Flex
          display={{ base: "flex", lg: "none" }}
          p={{ base: "35px", sm: "24px" }}
          borderTopRadius={"10px"}
          justify={"space-between"}
          align={"center"}
          gap={"10px"}
        >
          <Box
            display={{ base: "flex", lg: "none" }}
            fontSize={{ base: "7px", sm: "10px" }}
            textAlign={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <CiHeart size={25} />
            <Link>Избранное</Link>
          </Box>
          <Link to={"/Korzinka"}>
            <Box
              display={{ base: "flex", lg: "none" }}
              fontSize={{ base: "7px", sm: "10px" }}
              textAlign={"center"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Text
                // bg={"#FFBF3C"}
                color={"#FFBF3C"}
                borderRadius={"10px"}
                mt={"-10px"}
                ml={"37px"}
                fontSize={"15px"}
                position={"absolute"}
              >
                {state.length}
              </Text>
              <SlBasket size={25} />
              <Text>Корзина</Text>
            </Box>
          </Link>

          <Box
            fontSize={{ base: "7px", sm: "10px" }}
            textAlign={"center"}
            alignItems={"center"}
            display={{ base: "flex", lg: "none" }}
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
        </Flex>
      </Container>
    </Box>
  );
};

export default Foreveryone;
