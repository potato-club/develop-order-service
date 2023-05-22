import { useState } from "react";
import styled from "styled-components";
import { customColor } from "../customColor";
import { OptionButton } from "./components/OptionButton";

export const AdminModifyOrderDetailPage = () => {
  const [option, setOption] = useState(false);
  return (
    <Wrapper>
      <WebInfo>
        <WebName>Develop-Order-Service</WebName>
        <WebPurpose>
          <WebInfoWrapper>웹사이트 목적</WebInfoWrapper>
          웹사이트 발주를 위한 사이트
        </WebPurpose>
        <WebPeriod>
          <WebInfoWrapper>제작 기간</WebInfoWrapper>
          2023-05-22 ~ 2023-06-25
        </WebPeriod>
        <WebAddInfo>
          <WebInfoWrapper>추가 옵션</WebInfoWrapper>
          <OptionButton
            name="페이지"
            value={option}
            setValue={(data: boolean) => setOption(data)}
          />
          {/* <OptionButton name="로그인" />
          <OptionButton name="DB" /> */}
        </WebAddInfo>
        <WebStarRating>
          <WebInfoWrapper>주문자 별점</WebInfoWrapper>
          ☆☆☆☆☆
        </WebStarRating>
      </WebInfo>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: auto;
  padding-top: 16px;
  color: ${customColor.white};
  gap: 12px;
  overflow-y: overlay;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    width: 14px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${customColor.gray};
    border-radius: 10px;
    background-clip: padding-box;
    border: 4px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-button:start:decrement {
    background-color: transparent;
    height: 12px;
  }
  ::-webkit-scrollbar-button:end:increment {
    background-color: transparent;
    height: 24px;
  }
`;
const WebInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${customColor.darkGray + "99"};
`;
const WebInfoWrapper = styled.div`
  display: flex;
  width: 160px;
  border-right: 1px solid ${customColor.darkGray + "99"};
  padding: 10px;
  align-items: center;
  justify-content: center;
  color: ${customColor.lightGray};
`;
const WebName = styled.div`
  display: flex;
  border-bottom: 1px solid ${customColor.darkGray + "99"};
  width: 100%;
  padding: 10px 28px;
  font-size: 18px;
  font-weight: bold;
  color: ${customColor.white};
`;
const WebPurpose = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${customColor.darkGray + "99"};
  align-items: center;
  gap: 28px;
  font-size: 14px;
`;
const WebPeriod = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${customColor.darkGray + "99"};
  align-items: center;
  gap: 28px;
  font-size: 14px;
`;
const WebAddInfo = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${customColor.darkGray + "99"};
  align-items: center;
  gap: 28px;
  font-size: 14px;
`;
const WebStarRating = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${customColor.darkGray + "99"};
  align-items: center;
  gap: 28px;
  font-size: 14px;
`;
