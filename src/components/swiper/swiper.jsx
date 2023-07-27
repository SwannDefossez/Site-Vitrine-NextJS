"use client";
import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import css from "./swiper.module.scss";
// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
// import required modules
import { EffectCards, Navigation } from "swiper";

export default function App() {
  return (
    <div className={css.swiper} id="swip">
      <div className={css.swiper__title}>
        <h2>NOS CREATIONS</h2>
      </div>
      <div>
        <Swiper
          navigation={true}
          grabCursor={true}
          effect={"cards"}
          modules={[EffectCards, Navigation]}
          className={css.swipeslider}>
          <SwiperSlide>
            <a href="/">
              <Image
                src="/img_1.jpg"
                style={{ objectFit: "cover" }}
                width={500}
                height={500}
                alt="tablette"
                className={css.img}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <Image
                src="/img_2.jpg"
                style={{ objectFit: "cover" }}
                width={500}
                height={500}
                alt="lac avec un bateau"
                className={css.img}
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/">
              <Image
                src="/img_3.jpg"
                style={{ objectFit: "cover" }}
                width={500}
                height={500}
                alt="tomate"
                className={css.img}
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
