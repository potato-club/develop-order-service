import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { customColor } from "../../customColor";
import www from "../../../assets/img/www.png";

interface ButtonProps {
  isHover?: boolean;
  isLogin?: boolean;
}

export const MyInfo = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isHover, setIsHover] = useState(false);
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
        <LogAction isHover={isHover} isLogin={isLogin}>
          {isLogin ? (
            <>
              <ActionButton isHover={isHover}>로그아웃</ActionButton>
              <ActionButton isHover={isHover}>내정보</ActionButton>
            </>
          ) : (
            <ActionButton>로그인</ActionButton>
          )}
        </LogAction>
        <Img>{isLogin && <Image src={www} fill alt="my_image" />}</Img>
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
        ? "147px"
        : "0px"
      : props.isHover
      ? "84px"
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
