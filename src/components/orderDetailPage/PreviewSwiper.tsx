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
                  <NoPrevImgP>
                    웹페이지
                    <br />
                    미리보기
                  </NoPrevImgP>
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
                      width={450}
                      height={600}
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
  width: 448px;
  height: 598px;
  margin: 0 auto;
  background-color: ${customColor.blue};
  border: 1px solid white;
  display: flex;
  align-items: center;
`;

const NoPrevImgP = styled.p`
  font-size: 40px;
  color: white;
  margin: 0 auto;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 450px;
  height: 600px;
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
