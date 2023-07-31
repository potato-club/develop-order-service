import styled from "styled-components";
import Image from "next/image";
import { customColor } from "../customColor";
import reviewIcon from "../../../public/img/review/review.png";

export const Title = ({
  pageTitle,
  explain,
}: {
  pageTitle: string;
  explain: string;
}) => {
  return (
    <TitleDiv>
      <TitleTopDiv>
        <ImgDiv>
          <Image src={reviewIcon} alt="icon" fill></Image>
        </ImgDiv>
        <TitleH2>{pageTitle}</TitleH2>
      </TitleTopDiv>
      <TitleBottomDiv>
        <TitleP>{explain}</TitleP>
      </TitleBottomDiv>
    </TitleDiv>
  );
};

const TitleDiv = styled.div`
  @media screen and (min-width: 1024px) {
    width: 432px;
    height: 74px;
    margin-left: 41px;
  }
  @media screen and (max-width: 1023px) {
    width: 432px;
    height: 74px;
    margin-left: 15px;
  }
`;

const TitleTopDiv = styled.div`
  @media screen and (min-width: 1024px) {
    height: 30px;
  }
  @media screen and (max-width: 1023px) {
    height: 22.5px;
  }
  display: flex;
  align-items: center;
  width: 100%;
`;

const TitleBottomDiv = styled.div`
  @media screen and (min-width: 1024px) {
    height: 44px;
    padding-left: 26px;
  }
  @media screen and (max-width: 1023px) {
    height: 33px;
    padding-left: 19.5px;
  }
  width: 100%;
`;

const ImgDiv = styled.div`
  @media screen and (min-width: 1024px) {
    width: 30px;
    height: 30px;
    margin-right: 9px;
  }
  @media screen and (max-width: 1023px) {
    width: 22.5px;
    height: 22.5px;
    margin-right: 7px;
  }
  position: relative;
  display: block;
  float: left;
`;

const TitleH2 = styled.h2`
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
  @media screen and (max-width: 1023px) {
    font-size: 18px;
  }
`;

const TitleP = styled.p`
  @media screen and (min-width: 1024px) {
    margin-top: 15px;
    font-size: 18px;
  }
  @media screen and (max-width: 1023px) {
    margin-top: 10.5px;
    font-size: 13.5px;
  }
  color: ${customColor.gray};
`;
