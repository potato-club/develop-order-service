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
  const TESTIMGURL = "https://cdn-icons-png.flaticon.com/512/3305/3305887.png";

  SwiperCore.use([Navigation, Pagination]);
  const settings = {
    navigation: true,
    spaceBetween: 50,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
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
  width: 450px;
  height: 600px;
  border: 1px solid black;
`;

const StyledRoot = styled.div`
  .swiper {
    &-wrapper,
    &-container {
      width: 1000px;
      height: 600px;
      margin: 0 auto;
    }
    &-button-disabled {
      visibility: hidden;
    }
  }
`;
