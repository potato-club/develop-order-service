import Image from "next/image";
import styled from "styled-components";
import { customColor } from "../../customColor";
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { SiteSlideInfo } from "./SiteSlideInfo";

export const SiteRanking = () => {
  SwiperCore.use([EffectCoverflow, Autoplay]);
  return (
    <Wrapper>
      <WrapperInner>
        <StyledSwiper
          slidesPerView={"auto"}
          loop={true}
          spaceBetween={50}
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
        >
          <StyledSwiperSlide key={"1"}>
            <SiteInfo>
              <SiteImg>
                <Image
                  src={"/img/dummy/2.jpeg"}
                  alt="1"
                  fill
                  style={{ objectFit: "cover", borderRadius: "inherit" }}
                />
              </SiteImg>
              <SiteSlideInfo
                rank="medal1"
                like={29}
                star={5}
                title="마우스 클릭을 위한 사이트 'WWW'"
                tag={["파란", "정적"]}
              />
            </SiteInfo>
          </StyledSwiperSlide>
          <StyledSwiperSlide key={"2"}>
            <SiteInfo>
              <SiteImg>
                <Image
                  src={"/img/dummy/2.jpeg"}
                  alt="2"
                  fill
                  style={{ objectFit: "cover", borderRadius: "inherit" }}
                />
              </SiteImg>
              <SiteSlideInfo
                rank="medal2"
                like={29}
                star={5}
                title="마우스 www"
                tag={["파란", "정적"]}
              />
            </SiteInfo>
          </StyledSwiperSlide>
          <StyledSwiperSlide key={"3"}>
            <SiteInfo>
              <SiteImg>
                <Image
                  src={"/img/dummy/2.jpeg"}
                  alt="3"
                  fill
                  style={{ objectFit: "cover", borderRadius: "inherit" }}
                />
              </SiteImg>
              <SiteSlideInfo
                rank="medal3"
                like={29}
                star={5}
                title="마우스 www"
                tag={["파란", "정적"]}
              />
            </SiteInfo>
          </StyledSwiperSlide>
          <StyledSwiperSlide key={"4"}>
            <SiteInfo>
              <SiteImg>
                <Image
                  src={"/img/dummy/2.jpeg"}
                  alt="4"
                  fill
                  style={{ objectFit: "cover", borderRadius: "inherit" }}
                />
              </SiteImg>
            </SiteInfo>
          </StyledSwiperSlide>
          <StyledSwiperSlide key={"5"}>
            <SiteInfo>
              <SiteImg>
                <Image
                  src={"/img/dummy/2.jpeg"}
                  alt="5"
                  fill
                  style={{ objectFit: "cover", borderRadius: "inherit" }}
                />
              </SiteImg>
            </SiteInfo>
          </StyledSwiperSlide>
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
`;
const WrapperInner = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  overflow: hidden;
`;
const StyledSwiper = styled(Swiper)`
  display: flex;
  width: 100%;
  max-width: 430px;
  overflow: visible;
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
  padding: 14px 0;
`;
const SiteInfo = styled.button`
  display: flex;
  position: relative;
  flex-direction: column;
  background: ${customColor.white};
  width: 608px;
  height: 100%;
  max-height: 330px;
  box-shadow: 0px 2px 4px 2px ${customColor.black + "33"};
  align-items: center;
  justify-content: flex-end;
  padding: 28px 16px;
  margin-top: 8px;
  border-radius: 6px;
  cursor: pointer;
`;
const SiteImg = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 580px;
  max-height: 460px;
  transform: translateY(-44px);
  box-shadow: 0px 2px 4px 3px ${customColor.black + "33"};
  border-radius: 6px;
`;
