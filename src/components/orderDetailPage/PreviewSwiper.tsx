import { customColor } from "../customColor";
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export const PreviewSwiper = ({
  images,
}: {
  images: Array<{
    id: number;
    imageName: string;
    imageUrl: string;
  }>;
}) => {
  SwiperCore.use([Navigation, Pagination]);
  const settings = {
    navigation: true,
    pagination: true,
    spaceBetween: -175,
    slidesPerView: 3,
    centeredSlides: true,
  };

  return (
    <PreviewSiperWrapper>
      {images && images.length === 0 ? (
        <StyledRoot>
          <Swiper {...settings}>
            {[1, 2, 3].map((item) => (
              <StyledSwiperSlide key={item}>
                {" "}
                <NoPreviewImgDiv>
                  웹페이지
                  <br />
                  미리보기
                </NoPreviewImgDiv>
              </StyledSwiperSlide>
            ))}
          </Swiper>
        </StyledRoot>
      ) : (
        <SwiperContainer>
          <StyledRoot>
            <Swiper {...settings}>
              {images &&
                images.map((item) => (
                  <StyledSwiperSlide key={item.id}>
                    <Image
                      src={item.imageUrl}
                      alt={item.imageName}
                      fill
                    ></Image>
                  </StyledSwiperSlide>
                ))}
            </Swiper>
          </StyledRoot>
        </SwiperContainer>
      )}
    </PreviewSiperWrapper>
  );
};

const PreviewSiperWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    height: 945px;
  }
  @media screen and (max-width: 1023px) {
    height: 721px;
  }
  width: 100%;
  background-color: beige;
  display: flex;
  align-items: center;
`;

const SwiperContainer = styled.div`
  margin: 0 auto;
`;

const NoPreviewImgDiv = styled.div`
  @media screen and (min-width: 1024px) {
    width: 448px;
    height: 598px;
    font-size: 40px;
  }
  @media screen and (max-width: 1023px) {
    width: 336px;
    height: 448.5px;
    font-size: 30px;
  }
  margin: 0 auto;
  background-color: ${customColor.blue};
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  @media screen and (min-width: 1024px) {
    width: 450px;
    height: 600px;
  }
  @media screen and (max-width: 1023px) {
    width: 337.5px;
    height: 450px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  visibility: hidden;
  &.swiper-slide-prev {
    visibility: visible;
    top: -50px;
    z-index: -1;
  }
  &.swiper-slide-next {
    visibility: visible;
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
      @media screen and (min-width: 1024px) {
        width: 1000px;
        height: 945px;
      }
      @media screen and (max-width: 1023px) {
        width: 750px;
        height: 705px;
      }
      display: flex;
      align-items: center;

      margin: 0 auto;
    }
    &-button-disabled {
      visibility: hidden;
    }
  }
`;
