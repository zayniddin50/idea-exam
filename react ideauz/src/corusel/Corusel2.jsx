import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../corusel/Corusel2.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Box, Container, Flex, Image } from "@chakra-ui/react";

export default function CardCorusel({ gallery }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Container
        maxW={"container.300px"}
        w={{ base: "250px", md: "300px", xl: "450px" }}
      >
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {gallery.map((item) => {
            return (
              <SwiperSlide>
                <Box className="img1" maxW={"100%"}>
                  <Image
                    cursor={"pointer"}
                    objectFit={"cover"}
                    src={item.original}
                  />
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {gallery.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Box className="img">
                  <Image
                    cursor={"pointer"}
                    width={"100%"}
                    src={item.original}
                  />
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
}
