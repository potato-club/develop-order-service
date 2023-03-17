import styled from "styled-components";
import React from "react";
import Image from "next/image";
import information from "../../assets/img/information/information.png";
import schedule from "../../assets/img/information/schedule.png";
import Scheduler from "./Scheduler";
import InfoCard from "./InfoCard";

const InformationPage = () => {
  return (
    <Wrapper>
      <InfoHead>
        <Image src={information} alt={""} width={50} />
        <InfoHeadText>직원정보</InfoHeadText>
      </InfoHead>
      <StickWrapper>
        <InfoCard
          name="김 효 성"
          task="Front"
          number="010-3388-3951"
          emailAdress="smwfkim2@naver.com"
        />

        <InfoCard
          name="조 금 주"
          task="Front"
          number="010-0000-0000"
          emailAdress="aaaaaaa@naver.com"
        />

        <InfoCard
          name="박 청 조"
          task="Back"
          number="010-0000-0000"
          emailAdress="aaaaaaa@naver.com"
        />

        <InfoCard
          name="박 해 연"
          task="Back"
          number="010-0000-0000"
          emailAdress="aaaaaaa@naver.com"
        />

        <InfoCard
          name="최 준 형 "
          task="Front"
          number="010-0000-0000"
          emailAdress="aaaaaaa@naver.com"
        />
      </StickWrapper>
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
const Wrapper = styled.div``;
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
const StickWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  margin-bottom: 80px;
`;
const ScheduleHead = styled.div`
  display: flex;
  margin: 40px;
`;

const ScheduleHeadText = styled.div`
  align-self: center;
  font-size: 40px;
  font-weight: bolder;
  margin-left: 20px;
`;
const ScheduleBox = styled.div``;
