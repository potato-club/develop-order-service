import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { customColor } from "../../customColor";
import Router from "next/router";
import { pathName } from "../../../config/pathName";
import { useRecoilState, useRecoilValue } from "recoil";
import { isLogin, userInformation } from "../../../recoil/userInfo";
import { logout, tokenService } from "../../../libs/tokenService";
import { useQueryGetUserInfo } from "../../../hooks/query/user/useQueryGetUserInfo";

interface ButtonProps {
  isHover?: boolean;
  isLogin?: boolean;
}

export const MyInfo = () => {
  const [isHover, setIsHover] = useState(false);
  const [isLoginState, setIsLoginState] = useRecoilState(isLogin);
  const userInfo = useRecoilValue(userInformation);
  useQueryGetUserInfo();

  const handleLogout = () => {
    logout();
    setIsLoginState(false);
    Router.reload();
  };

  return (
    <Wrapper>
      <MyImg
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <LogAction isHover={isHover} isLogin={isLoginState}>
          {isLoginState ? (
            <>
              <ActionButton isHover={isHover} onClick={handleLogout}>
                로그아웃
              </ActionButton>
              <ActionButton
                isHover={isHover}
                onClick={() => Router.push(pathName.MY_ORDER)}
              >
                내 정보
              </ActionButton>
            </>
          ) : (
            <ActionButton
              onClick={() => {
                localStorage.setItem("prevPath", Router.asPath);
                Router.push(pathName.LOGIN);
              }}
            >
              로그인
            </ActionButton>
          )}
        </LogAction>
        <Img>
          {isLoginState && userInfo.picture && (
            <Image
              src={userInfo.picture}
              fill
              alt="my_image"
              style={{ borderRadius: "inherit" }}
            />
          )}
        </Img>
      </MyImg>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const MyImg = styled.div`
  display: flex;
  position: relative;
  width: 28px;
  height: 28px;
  margin-left: 68px;
`;
const Img = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${customColor.gray};
  border-radius: 50%;
`;
const LogAction = styled.div<ButtonProps>`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: ${(props) =>
    props.isLogin
      ? props.isHover
        ? "138px"
        : "0px"
      : props.isHover
      ? "80px"
      : "0px"};
  height: 100%;
  font-size: 10px;
  color: ${customColor.black};
  background: ${customColor.white};
  align-items: center;
  overflow: hidden;
  right: 0;
  padding: ${(props) => (props.isHover ? "0 27px 0 20px" : "0")};
  transform: translateX(-14px);
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  gap: 0 16px;
  transition: all 0.4s ease;
`;
const ActionButton = styled.button<ButtonProps>`
  display: flex;
  border: none;
  background: transparent;
  letter-spacing: -1px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  transition-delay: 0.3s;
  white-space: nowrap;
`;
