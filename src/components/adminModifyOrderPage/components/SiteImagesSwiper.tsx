import Image from "next/image";
import styled from "styled-components";
import { customColor } from "../../customColor";
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { useState } from "react";

export const SiteImagesSwiper = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  SwiperCore.use([EffectCoverflow, Autoplay]);
  return (
    <Wrapper>
      <WrapperInner>
        <StyledSwiper
          slidesPerView={"auto"}
          spaceBetween={0}
          slideToClickedSlide
          centeredSlides
          // autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[EffectCoverflow]}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 280,
            modifier: 1.2,
            slideShadows: false,
          }}
          onSlideChange={(i) => setCurrentSlideIndex(i.activeIndex)}
        >
          <StyledSwiperSlide key={"1"}></StyledSwiperSlide>
          <StyledSwiperSlide key={"2"}></StyledSwiperSlide>
          <StyledSwiperSlide key={"3"}></StyledSwiperSlide>
          <StyledSwiperSlide key={"4"}></StyledSwiperSlide>
          <StyledSwiperSlide key={"5"}></StyledSwiperSlide>
          <IndexInfo>{currentSlideIndex + 1} / 5</IndexInfo>
        </StyledSwiper>
      </WrapperInner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const WrapperInner = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;
const StyledSwiper = styled(Swiper)`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: visible;
  justify-content: center;
  align-items: center;
  .swiper-wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  aspect-ratio: 16/9;
  background: ${customColor.blue};
  border-radius: 2px;
  filter: brightness(0.6);
  transition: filter 0.3s ease;
  &.swiper-slide-active {
    filter: brightness(1);
  }
`;
const IndexInfo = styled.div`
  display: flex;
  position: absolute;
  padding: 6px 12px;
  border-radius: 16px;
  background-color: ${customColor.black + "99"};
  color: ${customColor.white};
  font-size: 14px;
  top: 10px;
  left: 75%;
  transform: translateX(calc(-100% - 10px));
  z-index: 1;
`;
