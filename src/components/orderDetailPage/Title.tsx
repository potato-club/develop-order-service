import styled from "styled-components";
import Image from "next/image";
import { customColor } from "../customColor";
import reviewIcon from "../../assets/img/review/review.png";

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
          <Image src={reviewIcon} alt="icon" width={30} height={30}></Image>
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
