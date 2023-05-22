import styled, { keyframes } from "styled-components";
import React from "react";
import Image from "next/image";
import information from "../../../public/img/information/information.png";
import schedule from "../../../public/img/information/schedule.png";
import Scheduler from "./components/Scheduler";
import InfoCardWrapp from "./components/InfoCardWrapp";
import { Link } from "react-scroll";
import { BsChevronCompactDown } from "react-icons/bs";

const InformationPage = () => {
  return (
    <Wrapper>
      <InfoHead>
        <Image src={information} alt={""} width={40} />
        <InfoHeadText>직원정보</InfoHeadText>
      </InfoHead>
      <InfoCardWrapp />
      <ButtonWrapper>
        <Link to="1" smooth spy>
          <ScrollButton>
            스크롤하세요
            <BsChevronCompactDown size={18} />
          </ScrollButton>
        </Link>
      </ButtonWrapper>
      <ScheduleHead>
        <Image src={schedule} alt={""} width={50} />
        <ScheduleHeadText id={"1"}>스케쥴</ScheduleHeadText>
      </ScheduleHead>
      <ScheduleBox>
        <Scheduler />
      </ScheduleBox>
    </Wrapper>
  );
};

export default InformationPage;

const moveText = keyframes`
  0%{
    bottom:10px;
  }
  50%{
    bottom:6px;
  }
  100%{
    bottom:10px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`;
const InfoHead = styled.div`
  display: flex;
  margin: 50px;
`;
const InfoHeadText = styled.p`
  align-self: center;
  font-size: 30px;
  font-weight: bolder;
  margin-left: 20px;
`;

const ScheduleHead = styled.div`
  display: flex;
  margin-left: 40px;
  margin-right: 40px;
`;

const ScheduleHeadText = styled.div`
  font-size: 40px;
  font-weight: bolder;
  margin-left: 20px;
`;
const ScheduleBox = styled.div``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

const ScrollButton = styled.button`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 600px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  letter-spacing: -0.5px;
  animation: ${moveText} 1s infinite;
`;