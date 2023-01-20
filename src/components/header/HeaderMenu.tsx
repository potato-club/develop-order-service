import styled from "styled-components";
import Image from "next/image";
import { customColor } from "../customColor";
import { TbWorld } from "react-icons/tb";
import { MenuButtons } from "./components/MenuButtons";
import { MyInfo } from "./components/MyInfo";

export const HeaderMenu = () => {
  return (
    <Wrapper>
      <WrapperInner>
        <Menu>
          <MainButton>
            <TbWorld fontSize={20} />
            DOS
          </MainButton>
          <MenuButtons />
        </Menu>
        <MyInfo />
      </WrapperInner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: ${customColor.indigo2};
`;
const WrapperInner = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1024px;
  width: 100%;
  height: 100%;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  color: ${customColor.white};
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 68px;
`;
const MainButton = styled.button`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: bold;
  color: ${customColor.white};
  gap: 0 8px;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;
