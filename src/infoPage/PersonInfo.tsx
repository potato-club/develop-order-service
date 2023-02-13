import styled from "styled-components";
import React from "react";
import Hyoseong from "./Hyoseong";
import Geumju from "./Geumju";
import Cheongjo from "./Cheongjo";
import Haeyeon from "./Haeyeon";
import Junhyung from "./Junhyung";
import Image from "next/image";
import information from "../assets/img/information/information.png"
const PersonInfo = () => {
  return (
    <Wrrapper>
      <InfoHead>
        <Image src ={information}  alt = {""} width = {50}  />
        <HeadText>직원정보</HeadText>
      </InfoHead>
      <StickWrapper>
        <Hyoseong />

        <Geumju />

        <Cheongjo />

        <Haeyeon />

        <Junhyung />
      </StickWrapper>
    
    </Wrrapper>
  );
};

export default PersonInfo;
const Wrrapper = styled.div`
  
`;
const InfoHead = styled.div`
  display: flex;
  margin : 40px;
`;
const HeadText = styled.p`
 align-self: center;
 font-size : 40px;
 font-weight: bolder;
 margin-left : 20px;
`;
const StickWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  margin-bottom: 300px;
 
`;

