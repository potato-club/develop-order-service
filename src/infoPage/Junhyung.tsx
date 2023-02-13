import React from "react";
import styled from "styled-components";
import { customColor } from "../components/customColor";
import Image from "next/image";
import email from "../assets/img/information/email.png";
import phone from "../assets/img/information/phone.png";
import imac from "../assets/img/information/imac.png";
const Junhyung = () => {
  return (
    <Wrapper>
      <InfoBox>
        <Circle />
        <Name>최 준 형</Name>
        <TaskBox>
          <Image src={imac} alt={""} width={35} />
          <Task>Front</Task>
        </TaskBox>
        <NumberBox>
          <Image src={phone} alt={""} width={20} />
          <Number>010-0000-0000</Number>
        </NumberBox>
        <EmailBox>
          <Image src={email} alt={""} width={20} />
          <Email>aaaaaaa@naver.com</Email>
        </EmailBox>
      </InfoBox>
    </Wrapper>
  );
};

export default Junhyung;

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;
const InfoBox = styled.div`
  width: 150px;
  height: 360px;
  border-radius: 70px;
  background-color: ${customColor.blue};
`;
const Circle = styled.div`
  width: 111px;
  height: 111px;
  border-radius: 50%;
  background-color: ${customColor.white};
  margin: auto;
  margin-top: 19.5px;
  position: relative;
`;

const Name = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const TaskBox = styled.div`
  position: relative;
  left: 6px;
  display: flexbox;
  margin-left: 15px;
  margin-bottom: 20px;
`;
const Task = styled.p`
  font-size: 15px;
  margin-left: 15px;
  margin-top: 8px;
  font-weight: bolder;
`;

const EmailBox = styled.div`
  position: relative;
  display: flexbox;
  margin-left: 8px;
  margin-bottom: 20px;
`;
const Email = styled.p`
  font-size: 5px;
  margin-top: 3px;
  margin-left: 10px;
`;
const NumberBox = styled.div`
  position: relative;
  display: flexbox;
  margin-left: 18px;
  margin-bottom: 20px;
`;
const Number = styled.p`
  font-size: 5px;
  margin-top: 4px;
  margin-left: 10px;
`;
