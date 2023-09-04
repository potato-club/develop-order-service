import React from "react";
import styled from "styled-components";



interface LoadingSpinnerProps {
  fixed: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ fixed }) => {
  return (
    <SpinnerWrapper fixed={fixed}>
      <Spinner />
    </SpinnerWrapper>
  );
};



const Spinner = styled.div`
  border-top: 2px solid rgba(25, 199, 226, 0.2);
  border-right: 2px solid rgba(25, 199, 226, 0.2);
  border-bottom: 2px solid rgba(25, 199, 226, 0.2);
  border-left: 4px solid #2ad8ff;
  animation: spin 1s infinite linear;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const SpinnerWrapper = styled.div<{ fixed: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props) => (props.fixed ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 999;
`;


export default LoadingSpinner;
