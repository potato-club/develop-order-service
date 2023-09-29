import Image from "next/image";
import styled from "styled-components";
import { customColor } from "../../customColor";
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { SiteSlideInfo } from "./SiteSlideInfo";
import { useQueryGetMainRankings } from "../../../hooks/query/main/useQueryGetMainRankings";

export const SiteRanking = () => {
  const { isLoading, data } = useQueryGetMainRankings();
  SwiperCore.use([EffectCoverflow, Autoplay]);
  return (
    <Wrapper>
      <WrapperInner>
        {!isLoading && (
          <StyledSwiper
            speed={1000}
            slidesPerView={"auto"}
            loop
            loopedSlides={1}
            spaceBetween={50}
            slideToClickedSlide
            centeredSlides
            autoplay={{ delay: 5000, disableOnInteraction: false }}
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
            {data?.length == 0 ? (
              <StyledSwiperSlide>
                사이트 랭킹 데이터가 없습니다 :(
              </StyledSwiperSlide>
            ) : (
              data?.map((i, id) => (
                <StyledSwiperSlide key={id}>
                  <SiteInfo>
                    <SiteImg>
                      {i.thumbnail != null && (
                        <Image
                          src={i.thumbnail.imageUrl}
                          alt={i.thumbnail.imageName}
                          fill
                          style={{
                            objectFit: "cover",
                            borderRadius: "inherit",
                          }}
                        />
                      )}
                    </SiteImg>
                    <SiteSlideInfo
                      rank={id < 3 ? `medal${id + 1}` : null}
                      like={i.likes}
                      star={i.rating}
                      title={i.siteName}
                    />
                  </SiteInfo>
                </StyledSwiperSlide>
              ))
            )}
          </StyledSwiper>
        )}
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
  filter: brightness(94%);
  transition: all 0.3s ease;
  &.swiper-slide-active {
    filter: brightness(100%);
  }
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
  box-shadow: 0px 2px 4px 3px ${customColor.black + "22"};
  border-radius: 6px;
  background: ${customColor.lightGray};
`;
