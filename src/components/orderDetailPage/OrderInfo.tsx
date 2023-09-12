import styled from "styled-components";
import { ReactNode } from "react";

export const OrderInfo = ({
  progress,
  label,
  preview,
  children,
}: {
  progress: string;
  label: string;
  preview: boolean;
  children?: ReactNode;
}) => {
  return (
    <OrderInfoDiv progress={progress}>
      <InfoLabelDiv preview={preview}>{label}</InfoLabelDiv>
      {children}
    </OrderInfoDiv>
  );
};

const OrderInfoDiv = styled.div<{ progress: String }>`
  @media screen and (min-width: 1024px) {
    height: 50px;
  }
  @media screen and (max-width: 1023px) {
    height: 37.5px;
  }
  display: ${(props) =>
    props.progress === "" || props.progress === "COMPLETED" ? "" : "none"};
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid black;
`;

const InfoLabelDiv = styled.div<{ preview: boolean }>`
  @media screen and (min-width: 1024px) {
    height: 50px;
    width: 195px;
    font-size: 20px;
  }
  @media screen and (max-width: 1023px) {
    height: 37.5px;
    width: 148.5px;
    font-size: 15px;
  }
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 23px;
  border-right: ${(props) =>
    props.preview === false ? "1px solid black" : ""};
`;
