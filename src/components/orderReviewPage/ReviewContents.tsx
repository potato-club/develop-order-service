import { useState } from "preact/hooks";
import { useEffect } from "react";
import styled from "styled-components";

const isFinished = false;

export const ReviewContnets = ({ contentsData }: { contentsData: any }) => {
  // 추가로 할것 : 진행중, 완료, 내발주 버튼 클릭시 페이지가 1페이지로 이동하도록 할것
  return (
    <WrapperContents>
      {contentsData.numberOfElements === 0 ? (
        <AlertDiv>항목에 해당하는 발주가 없습니다.</AlertDiv>
      ) : (
        contentsData.content &&
        contentsData.content.map((item: any) => {
          return (
            <ContentDiv key={item.id}>
              <PreviewImg />
              <OrderTitleH2>
                #{item.id} {item.siteName}
              </OrderTitleH2>
              <OrderInfoP>사용 목적 : {item.purpose}</OrderInfoP>
              <OrderInfoP>
                제작 기간 : {item.createdDate?.split("T")[0]}~
                {item.completedDate?.split("T")[0]}
              </OrderInfoP>
              <OrderInfoP2 isFinished={isFinished}>진행도 </OrderInfoP2>
            </ContentDiv>
          );
        })
      )}
    </WrapperContents>
  );
};

const WrapperContents = styled.div`
  display: flex;
  height: 1200px;
  width: 100%;
  position: relative;
  flex-direction: column;
`;

const ContentDiv = styled.div`
  width: 100%;
  height: 300px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 50px 0 50px 50px;
`;

const AlertDiv = styled.div`
  width: 100%;
  height: 300px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  text-align: center;
  line-height: 300px;
  font-size: 25px;
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

const OrderInfoP2 = styled.p<{ isFinished: boolean }>`
  display: ${(props) => (props.isFinished === true ? "none" : "")};
  font-size: 20px;
  line-height: 50px;
`;
