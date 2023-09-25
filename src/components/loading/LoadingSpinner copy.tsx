import Image from "next/image";
import React from "react";
import WWWIcon from "../../../public/img/www.png";
import styled from "styled-components";
import { customColor } from "../customColor";

interface LoadingSpinnerProps {
  fixed: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ fixed }) => {
  return (
    <SpinnerWrapper fixed={fixed}>
      <Wrapper>
        <Jump delay={0}>D</Jump>
        <Jump delay={0.2}>
          <Spinner />
        </Jump>
        <Jump delay={0.4}>S</Jump>
      </Wrapper>
    </SpinnerWrapper>
  );
};

const SpinnerWrapper = styled.div<{ fixed: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props) => (props.fixed ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${customColor.black + "40"};
  z-index: 999;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: bold;
  background: ${customColor.white};
  padding: 12px 20px;
  border-radius: 2px;
  letter-spacing: -0.8px;
`;
const Spinner = styled.div`
  display: flex;
  position: absolute;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  box-sizing: border-box;
  border-top: 3px solid ${customColor.lightGray};
  border-right: 3px solid ${customColor.lightGray};
  border-bottom: 3px solid ${customColor.lightGray};
  border-left: 4px solid ${customColor.blue};
  align-items: center;
  justify-content: center;
  animation: spin 1s infinite ease;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
const Jump = styled.div<{ delay: number }>`
  display: flex;
  position: relative;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  animation: jump 1s infinite ease-in ${(props) => props.delay}s;
  @keyframes jump {
    0% {
      transform: translateY(0px);
    }
    20% {
      transform: translateY(-8px);
    }
    40% {
      transform: translateY(0px);
    }
  }
`;

export default LoadingSpinner;
