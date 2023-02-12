import styled from "styled-components";

export const ReviewContnets = () => {
  return (
    <WrapperContents>
      <ContentDiv>
        <PreviewImg />
        <OrderTitleH2>#4 웹사이트 제목</OrderTitleH2>
        <OrderInfoP>사용 목적 : </OrderInfoP>
        <OrderInfoP>제작 기간 : </OrderInfoP>
        <OrderInfoP>진행도(%) : </OrderInfoP>
      </ContentDiv>
    </WrapperContents>
  );
};

const WrapperContents = styled.div`
  display: flex;
  width: 100%;
  height: 1200px;
  position: relative;
`;

const ContentDiv = styled.div`
  width: 100%;
  height: 300px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 50px 0 50px 50px;
`;

const PreviewImg = styled.div`
  width: 147px;
  height: 200px;
  background-color: #9c9090;
  margin-right: 34px;
  float: left;
`;

const OrderTitleH2 = styled.h2`
  font-size: 27px;
  line-height: 50px;
`;

const OrderInfoP = styled.p`
  font-size: 20px;
  line-height: 50px;
`;
