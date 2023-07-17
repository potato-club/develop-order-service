import { useState } from "react";
import styled from "styled-components";
import { SideMenuBar } from "./components/SideMenuBar";

export const MyPage = () => {
  const [currentMenu, setCurrentMenu] = useState(1);

  return (
    <Wrapper>
      <SideMenuBar currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
      <WrapperInner>안냥</WrapperInner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding-top: 80px;
`;
const WrapperInner = styled.div`
  display: flex;
  flex: 0 auto;
  width: 100%;
`;
