import styled from "styled-components";
import { customColor } from "../customColor";
import { SignUpItem } from "./components/SignUpItem";

export const AdminPage = () => {
  return (
    <Wrapper>
      <SignUpItem />
      <SignUpItem />
      <SignUpItem />
      <SignUpItem />
      <SignUpItem />
      <SignUpItem />
      <SignUpItem />
      <SignUpItem />
      <SignUpItem />
      <SignUpItem />
      <SignUpItem />
      <SignUpItem />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: auto;
  padding: 16px 28px 28px 28px;
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
