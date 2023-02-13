import styled from "styled-components";
import Image from "next/image";
import { customColor } from "../customColor";
import reviewIcon from "../../assets/img/review/review.png";
import { useState } from "react";

export const DetailTop = () => {
  return (
    <WrapperTop>
      <TitleDiv>
        <TitleTopDiv>
          <ImgDiv>
            <Image
              src={reviewIcon}
              alt="reviewIcon"
              width={30}
              height={30}
            ></Image>
          </ImgDiv>
          <TitleH2>발주 상세</TitleH2>
        </TitleTopDiv>
        <TitleBottomDiv>
          <TitleP>발주의 상세 정보를 확인하고 평가해보세요</TitleP>
        </TitleBottomDiv>
      </TitleDiv>
    </WrapperTop>
  );
};

const WrapperTop = styled.div`
  display: flex;
  width: 100%;
  height: 277px;
  padding-top: 40px;
  position: relative;
`;

const TitleDiv = styled.div`
  width: 432px;
  height: 74px;
  margin-left: 41px;
`;

const TitleTopDiv = styled.div`
  width: 100%;
  height: 30px;
`;

const TitleBottomDiv = styled.div`
  width: 100%;
  height: 44px;
  padding-left: 26px;
`;

const ImgDiv = styled.div`
  display: block;
  float: left;
  margin-right: 9px;
`;

const TitleH2 = styled.h2`
  font-size: 24px;
`;

const TitleP = styled.p`
  margin-top: 15px;
  font-size: 18px;
  color: ${customColor.gray};
`;
