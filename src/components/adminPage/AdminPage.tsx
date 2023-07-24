import { useState } from "react";
import styled from "styled-components";
import { customColor } from "../customColor";
import { SignUpItemListCheck } from "./components/SignUpItemList";
import { SignUpItemListUncheck } from "./components/SignUpItemListUncheck";

export interface ResponseType {
  clientName: string;
  createdDate: string;
  id: number;
  purpose: string;
  siteName: string;
}
interface ToggleProps {
  isNew: boolean;
}

export const AdminPage = () => {
  const [isNew, setIsNew] = useState(true);

  return (
    <Wrapper>
      {isNew ? <SignUpItemListUncheck /> : <SignUpItemListCheck />}
      <ToggleButton onClick={() => setIsNew(!isNew)}>
        <ToggleButtonInner>
          <ButtonThumb isNew={isNew} />
          <ToggleButtonLabel isNew={isNew}>신규</ToggleButtonLabel>
          <ToggleButtonLabel style={{ right: 0 }} isNew={!isNew}>
            진행
          </ToggleButtonLabel>
        </ToggleButtonInner>
      </ToggleButton>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: auto;
  padding: 16px 28px 80px 28px;
  color: ${customColor.white};
  gap: 12px;
  overflow-y: overlay;
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
const ToggleButton = styled.button`
  display: flex;
  position: fixed;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  height: 52px;
  width: 144px;
  background: ${customColor.indigo1 + "88"};
  border-radius: 40px;
  padding: 7px;
  overflow: hidden;
`;
const ToggleButtonInner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
`;
const ButtonThumb = styled.div<ToggleProps>`
  display: flex;
  position: absolute;
  width: 70px;
  height: 100%;
  border-radius: 40px;
  background: ${customColor.blue};
  left: ${(props) => (props.isNew ? 0 : 60)}px;
  transition: all ease 0.3s;
`;
const ToggleButtonLabel = styled.div<ToggleProps>`
  display: flex;
  position: absolute;
  width: 70px;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.isNew ? customColor.black : customColor.darkGray)};
`;
