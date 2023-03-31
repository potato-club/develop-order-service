import styled from "styled-components";
import React from "react";
import InfoCard from "./InfoCard";
import { useRecoilState } from "recoil";
import { personState, PersonState } from "../../../recoil/infoCard";

const InfoCardWrapp = () => {
  const [state, setState] = useRecoilState<PersonState>(personState);

  const test = (name: string) => {
    let dummy: any = {};
    Object.keys(state).map((i) => {
      if (i === name) {
        dummy[i] = true;
      } else {
        dummy[i] = false;
      }
    });
    setState(dummy);
  };

  return (
    <InfoCardWrapper>
      <InfoCard
        name="김 효 성"
        task="Front"
        number="010-3388-3951"
        emailAdress="smwfkim2@naver.com"
        onClick={() => test("hyoseong")}
      />

      <InfoCard
        name="조 금 주"
        task="Front"
        number="010-0000-0000"
        emailAdress="aaaaaaa@naver.com"
        onClick={() => test("geumju")}
      />

      <InfoCard
        name="박 청 조"
        task="Back"
        number="010-0000-0000"
        emailAdress="aaaaaaa@naver.com"
        onClick={() => test("cheongjo")}
      />

      <InfoCard
        name="박 해 연"
        task="Back"
        number="010-0000-0000"
        emailAdress="aaaaaaa@naver.com"
        onClick={() => test("haeyeon")}
      />

      <InfoCard
        name="최 준 형 "
        task="Front"
        number="010-0000-0000"
        emailAdress="aaaaaaa@naver.com"
        onClick={() => test("junhyung")}
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
  margin-bottom: 100px;
`;
