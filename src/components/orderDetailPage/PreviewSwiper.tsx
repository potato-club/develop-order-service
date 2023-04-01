import { customColor } from "../customColor";
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export const PreviewSwiper = () => {
  const list = [1, 2, 3, 4, 5];
  const list2 = [];

  SwiperCore.use([Navigation, Pagination]);
  const settings = {
    navigation: true,
    pagination: true,
    spaceBetween: -50,
    slidesPerView: 3,
    centeredSlides: true,
  };

  return (
    <PreviewSiperWrapper>
      {list.length === 0 ? (
        <NoPreviewImgDiv>
          <NoPrevImgP>
            웹페이지
            <br />
            미리보기
          </NoPrevImgP>
        </NoPreviewImgDiv>
      ) : (
        <SwiperContainer>
          <StyledRoot>
            <Swiper {...settings}>
              {list.map((item) => (
                <StyledSwiperSlide key={item}>{item}</StyledSwiperSlide>
              ))}
            </Swiper>
          </StyledRoot>
        </SwiperContainer>
      )}
    </PreviewSiperWrapper>
  );
};

const PreviewSiperWrapper = styled.div`
  width: 100%;
  height: 945px;
  background-color: beige;
  display: flex;
  align-items: center;
`;

const SwiperContainer = styled.div`
  margin: 0 auto;
`;

const NoPreviewImgDiv = styled.div`
  width: 450px;
  height: 600px;
  margin: 0 auto;
  background-color: ${customColor.blue};
  display: flex;
  align-items: center;
`;

const NoPrevImgP = styled.p`
  font-size: 40px;
  color: white;
  margin: 0 auto;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;
  width: 450px;
  height: 600px;
  border: 1px solid black;
  background-color: beige;
  visibility: hidden;
  &.swiper-slide-prev {
    visibility: visible;
    background-color: aqua;
    top: -50px;
    z-index: -1;
  }
  &.swiper-slide-next {
    visibility: visible;
    background-color: aqua;
    top: -50px;
    z-index: -1;
  }
  &.swiper-slide-active {
    visibility: visible;
  }
`;

const StyledRoot = styled.div`
  .swiper {
    &-wrapper,
    &-container {
      display: flex;
      align-items: center;
      width: 1000px;
      height: 945px;
      margin: 0 auto;
    }
    &-button-disabled {
      visibility: hidden;
    }
  }
`;
