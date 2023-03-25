import styled from "styled-components";
import React from "react";
import InfoCard from "./InfoCard";

const InfoCardWrapp = () => {
  return (
    <InfoCardWrapper>
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
    </InfoCardWrapper>
  );
};

export default InfoCardWrapp;
const InfoCardWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-around;
  margin-bottom: 80px;
`;
