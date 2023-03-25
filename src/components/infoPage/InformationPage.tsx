import styled from "styled-components";
import React from "react";
import Image from "next/image";
import information from "../../assets/img/information/information.png";
import schedule from "../../assets/img/information/schedule.png";
import Scheduler from "./components/Scheduler";
import InfoCardWrapp from "./components/InfoCardWrapp";


const InformationPage = () => {



  return (
    <Wrapper>
      <InfoHead>
        <Image src={information} alt={""} width={50} />
        <InfoHeadText>직원정보</InfoHeadText>
      </InfoHead>
      <InfoCardWrapp/>
      <ScheduleHead>
        <Image src={schedule} alt={""} width={50} />
        <ScheduleHeadText>스케쥴</ScheduleHeadText>
      </ScheduleHead>
      <ScheduleBox>
        <Scheduler />
      </ScheduleBox>
    </Wrapper>
  );
};

export default InformationPage;
const Wrapper = styled.div`
width : 100%;
  margin-top: 50px;
`;
const InfoHead = styled.div`
  display: flex;
  margin: 40px;
`;
const InfoHeadText = styled.p`
  align-self: center;
  font-size: 40px;
  font-weight: bolder;
  margin-left: 20px;
`;

const ScheduleHead = styled.div`
  display: flex;
  margin-left: 40px;
  margin-right: 40px;
`;

const ScheduleHeadText = styled.div`
  align-self: center;
  font-size: 40px;
  font-weight: bolder;
  margin-left: 20px;
`;
const ScheduleBox = styled.div``;
