import { Box, Container, Image } from "@chakra-ui/react";
import coruselimg from "../assets/imgs/image.webp";
import corusel from "../assets/imgs/image (1).webp";
import { Link } from "react-router-dom";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Corusel = () => {
  return (
    <Box>
      <Container maxW={"90%"} w={"100%"}>
        <Box pt={"70px"}>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <Link to={"/Aksiyapage"}>
                <Image
                  objectFit={"cover"}
                  style={{ aspectRatio: "16/5", borderRadius: "10px" }}
                  w={"100%"}
                  src={coruselimg}
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/Aksiyapage"}>
                <Image
                  style={{ aspectRatio: "16/5", borderRadius: "10px" }}
                  objectFit={"cover"}
                  w={"100%"}
                  src={corusel}
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default Corusel;
