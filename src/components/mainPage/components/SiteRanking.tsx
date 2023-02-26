import Image from "next/image";
import styled from "styled-components";
import { customColor } from "../../customColor";
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import img3 from "../../../assets/img/dummy/3.jpeg";
import img2 from "../../../assets/img/dummy/2.jpeg";

export const SiteRanking = () => {
  SwiperCore.use([EffectCoverflow, Autoplay]);
  return (
    <Wrapper>
      <StyledSwiper
        slidesPerView={"auto"}
        loop={true}
        spaceBetween={-380}
        slideToClickedSlide
        centeredSlides
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[EffectCoverflow]}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1.2,
          slideShadows: false,
        }}
      >
        <StyledSwiperSlide key={"1"}>
          <SiteInfo>
            <SiteImg>
              <Image src={img2} alt="1" fill style={{ objectFit: "contain" }} />
              <Rank>1위</Rank>
            </SiteImg>
            <InfoContent>응앤</InfoContent>
          </SiteInfo>
        </StyledSwiperSlide>
        <StyledSwiperSlide key={"2"}>
          <SiteInfo>
            <SiteImg>
              <Image src={img2} alt="2" fill style={{ objectFit: "contain" }} />
              <Rank>2위</Rank>
            </SiteImg>
          </SiteInfo>
        </StyledSwiperSlide>
        <StyledSwiperSlide key={"3"}>
          <SiteInfo>
            <SiteImg>
              <Image src={img2} alt="3" fill style={{ objectFit: "contain" }} />
              <Rank>3위</Rank>
            </SiteImg>
          </SiteInfo>
        </StyledSwiperSlide>
        <StyledSwiperSlide key={"4"}>
          <SiteInfo>
            <SiteImg>
              <Image src={img2} alt="4" fill style={{ objectFit: "contain" }} />
              <Rank>4위</Rank>
            </SiteImg>
          </SiteInfo>
        </StyledSwiperSlide>
        <StyledSwiperSlide key={"5"}>
          <SiteInfo>
            <SiteImg>
              <Image src={img2} alt="5" fill style={{ objectFit: "contain" }} />
              <Rank>5위</Rank>
            </SiteImg>
          </SiteInfo>
        </StyledSwiperSlide>
      </StyledSwiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 40px;
  padding-top: 60px;
`;
const SiteInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: ${customColor.blue};
  width: 608px;
  height: 100%;
  box-shadow: 0px 2px 4px 0px ${customColor.black + "33"};
  align-items: center;
  justify-content: flex-end;
`;
const SiteImg = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 580px;
  max-height: 460px;
  transform: translateY(-50px);
`;
const Rank = styled.div`
  display: flex;
  position: absolute;
  background: blue;
  width: max-content;
  height: max-content;
  color: white;
  font-size: 20px;
  padding: 8px 10px;
  top: 0px;
  left: 8px;
`;
const InfoContent = styled.div`
  display: flex;
  position: absolute;
  width: 608px;
  height: 58px;
  padding: 20px;
  align-items: center;
`;
