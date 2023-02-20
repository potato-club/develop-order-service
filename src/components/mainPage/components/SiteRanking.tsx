import Image from "next/image";
import styled from "styled-components";
import { customColor } from "../../customColor";
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img3 from "../../../assets/img/dummy/3.jpeg";
import img2 from "../../../assets/img/dummy/2.jpeg";

export const SiteRanking = () => {
  SwiperCore.use([EffectCoverflow, Autoplay]);
  return (
    <Wrapper>
      <StyledSwiper
        slidesPerView={1}
        loop={true}
        loopedSlides={5}
        spaceBetween={0}
        slideToClickedSlide
        centeredSlides
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 1.2,
          slideShadows: false,
        }}
        effect={"coverflow"}
        modules={[EffectCoverflow]}
      >
        <StyledSwiperSlide key={"1"}>
          <Test>
            <Image src={img2} alt="1" fill style={{ objectFit: "contain" }} />1
          </Test>
        </StyledSwiperSlide>
        <StyledSwiperSlide key={"2"}>
          <Test>
            <Image src={img3} alt="1" fill style={{ objectFit: "contain" }} />2
          </Test>
        </StyledSwiperSlide>
        <StyledSwiperSlide key={"3"}>
          <Test>
            <Image src={img2} alt="1" fill style={{ objectFit: "contain" }} />3
          </Test>
        </StyledSwiperSlide>
        <StyledSwiperSlide key={"4"}>
          <Test>
            <Image src={img3} alt="1" fill style={{ objectFit: "contain" }} />4
          </Test>
        </StyledSwiperSlide>
      </StyledSwiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: auto;
  width: 100%;
`;
const StyledSwiper = styled(Swiper)`
  display: flex;
  width: 100%;
  height: 100%;
  .swiper-wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
`;
const Test = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;
