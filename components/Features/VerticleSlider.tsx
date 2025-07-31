"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "./swiper.css";

const items = [
  "AI-Powered Automation",
  "Predictive Targeting",
  "Creative Intelligence",
  "Unified Analytics",
  "Auto Optimization",
  "Plug & Play Integrations",
  "Real-Time Bid Tuning",
  "Audience Segmentation",
  "A/B Creative Testing",
  "Performance Tracking",
  "Seamless Integrations",
  "Zero Technical Setup",
];

const VerticleSlider = () => {
  return (
    <Swiper
      loop
      autoplay={{
        delay: 1500, // Autoplay delay in milliseconds
        disableOnInteraction: false, // Autoplay continues even when user interacts with swiper}
      }}
      modules={[Virtual, Autoplay, EffectFade]}
      direction="vertical"
      loopPreventsSliding
      noSwiping
      slidesPerView={6}
      breakpoints={{
        640: {
          slidesPerView: 8,
          spaceBetween: 20,
        },

        1024: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide className="" virtualIndex={index} key={index}>
          {({ isActive, isNext /* isPrev */ }) => (
            <span
              className={`transition-all whitespace-normal duration-500  leading-none text-6xl text-nowrap md:text-6xl lg:text-7xl z-10 opacity-25 ${
                isNext && "!opacity-100 md:text-3xl lg:!text-[100px]"
              }`}
            >
              {item}
            </span>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VerticleSlider;
