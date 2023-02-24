import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";

import "../../styles/Swipper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
const Swipper = ({ slider_img, datail }) => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <div className="container">
      <Swiper
        modules={[Navigation, EffectFade]}
        // navigation={true}
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        // effect={'fade'}

        speed={800}
        slidesPerView={1}
        loop
        className="myswiper"
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {/* <SwiperSlide className="swiperslide">
          <img
            className="image"
            src="https://res.cloudinary.com/dijamrzud/image/upload/v1675877425/1967_charge_cars_ford_mustang_4k_2-1600x900_zm8lvn.jpg"
            alt=""
          />
        </SwiperSlide> */}

        {datail &&
          slider_img.map((item, index) => {
            return (
              <SwiperSlide className="swiperslide" key={index}>
                <img className="image" src={item} alt="slider-img" />
              </SwiperSlide>
            );
          })}

        <div className="swiperNavPrev" ref={swiperNavPrevRef}></div>
        <div className="swiperNavNext" ref={swiperNavNextRef}></div>
      </Swiper>
    </div>
  );
};

export default Swipper;
