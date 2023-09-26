import { useEffect, useState } from "react";
import styled from "styled-components";
import { tokenService } from "../../libs/tokenService";
import { IsLoginModal } from "../modal/IsLoginModal";
import { LikesContainer } from "./components/likesContainer/likesContainer";
import { SideMenuBar } from "./components/SideMenuBar";
import { SignUpContainer } from "./components/signUpContainer/SignUpContainer";
import { WithdrawalContainer } from "./components/WithdrawalContainer";

export const MyPage = (props: {
  currentMenu: "order" | "likes" | "withdrawal";
}) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    if (tokenService.getRole() !== "USER") {
      setIsLoginModalOpen(true);
    }
  }, []);

  return (
    <Wrapper>
      <IsLoginModal isOpen={isLoginModalOpen} />
      <SideMenuBar currentMenu={props.currentMenu} />
      <WrapperInner>
        {props.currentMenu === "order" && <SignUpContainer />}
        {props.currentMenu === "likes" && <LikesContainer />}
        {props.currentMenu === "withdrawal" && <WithdrawalContainer />}
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
