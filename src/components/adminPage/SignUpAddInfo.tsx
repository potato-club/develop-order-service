import styled from "styled-components";
import { MdTune } from "react-icons/md";
import { useEffect, useState } from "react";
import { customColor } from "../customColor";
import { TwoRadioBoxs } from "./components/TwoRadioBoxs";

export const SignUpAddInfo = () => {
  return (
    <Content>
      <Lbel>
        <MdTune size={20} />
        추가 정보
      </Lbel>
      <Box>
        <BoxItem>
          <BoxItemLabel>브랜드 컬러1</BoxItemLabel>
          <BoxItemContent>&[수정필요]&</BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>브랜드 컬러2</BoxItemLabel>
          <BoxItemContent>&[수정필요]&</BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>페이지 수</BoxItemLabel>
          <BoxItemContent>3</BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>로그인 필요 유무</BoxItemLabel>
          <BoxItemContent>
            <TwoRadioBoxs value1="예" value2="아니요" data="예" />
          </BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>DB 필요 유무</BoxItemLabel>
          <BoxItemContent>
            <TwoRadioBoxs value1="예" value2="아니요" data="예" />
          </BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>사이트 컨셉 참고자료 첨부</BoxItemLabel>
          <BoxItemContent>&[수정필요]&</BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>기타사항</BoxItemLabel>
          <BoxItemContent>응애</BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>*첫 미팅 희망날짜</BoxItemLabel>
          <BoxItemContent>2023-05-15(월) / 10:00</BoxItemContent>
        </BoxItem>
      </Box>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0 16px;
  align-items: flex-start;
`;
const Lbel = styled.p`
  display: flex;
  min-width: 120px;
  font-size: 18px;
  color: ${customColor.lightGray};
  letter-spacing: -0.5px;
  font-weight: bold;
  gap: 0 4px;
  align-items: center;
  justify-content: flex-end;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px 0;
  flex: auto;
  padding-top: 36px;
`;
const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 6px 0;
`;
const BoxItemLabel = styled.div`
  display: flex;
  font-size: 16px;
  color: ${customColor.gray};
  letter-spacing: -0.5px;
  padding-left: 12px;
  justify-content: space-between;
  align-items: flex-end;
  white-space: nowrap;
`;
const BoxItemContent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${customColor.indigo3};
  min-height: 38px;
  width: 100%;
  align-items: center;
  padding: 10px 12px 9px 32px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
