import styled from "styled-components";
import Image from "next/image";
import arrowIcon from "../../assets/img/review/arrow.png";
import { useState } from "react";
import { Pagenation } from "./Pagenation";

export const ReviewBottm = () => {
  return (
    <BottomWrapper>
      <Pagenation />
    </BottomWrapper>
  );
};

const BottomWrapper = styled.div`
  height: 323px;
  width: 100%;
  display: flex;
  align-items: center;
`;
