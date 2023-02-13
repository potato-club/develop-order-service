import styled from "styled-components";
import { Pagenation } from "../orderReviewPage/Pagenation";

export const DetailContnets = () => {
  return (
    <WrapperContents>
      <OrderTitleDiv>
        <OrderTitleH2>웹사이트 제목1</OrderTitleH2>
      </OrderTitleDiv>
      <OrderInfoDiv>
        <InfoLabelDiv>
          <OrderInfoP>목적</OrderInfoP>
        </InfoLabelDiv>
      </OrderInfoDiv>
      <OrderInfoDiv>
        <InfoLabelDiv>
          <OrderInfoP>제작기간</OrderInfoP>
        </InfoLabelDiv>
      </OrderInfoDiv>
      <OrderInfoDiv>
        <InfoLabelDiv>
          <OrderInfoP>웹페이지 미리보기</OrderInfoP>
        </InfoLabelDiv>
      </OrderInfoDiv>
    </WrapperContents>
  );
};

const WrapperContents = styled.div`
  width: 100%;
  height: 1200px;
  position: relative;
  border-bottom: 1px solid black;
  padding-bottom: 50px;
`;

const OrderTitleDiv = styled.div`
  width: 100%;
  height: 70px;
  border-top: 1px solid black;
  padding-left: 21px;
`;

const OrderTitleH2 = styled.h2`
  font-size: 27px;
  line-height: 70px;
`;

const OrderInfoDiv = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid black;
`;

const InfoLabelDiv = styled.div`
  height: 50px;
  width: 195px;
  padding-left: 23px;
`;

const OrderInfoP = styled.p`
  font-size: 20px;
  line-height: 50px;
`;
