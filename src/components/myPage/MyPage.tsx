import { useEffect, useState } from "react";
import styled from "styled-components";
import { tokenService } from "../../libs/tokenService";
import { IsLoginModal } from "../modal/IsLoginModal";
import { SideMenuBar } from "./components/SideMenuBar";
import { WithdrawalContainer } from "./components/WithdrawalContainer";

export const MyPage = () => {
  const [currentMenu, setCurrentMenu] = useState(1);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    if (tokenService.getToken() === null) {
      setIsLoginModalOpen(true);
    }
  }, []);

  return (
    <Wrapper>
      <IsLoginModal isOpen={isLoginModalOpen} />
      <SideMenuBar currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
      <WrapperInner>
        {currentMenu === 4 && <WithdrawalContainer />}
      </WrapperInner>
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
