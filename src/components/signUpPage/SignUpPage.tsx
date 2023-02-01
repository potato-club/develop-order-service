import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { customColor } from "../customColor";
import { AiOutlineForm } from "react-icons/ai";
import { SignUpUserInfo } from "./SignUpUserInfo";
import { SignUpSiteInfo } from "./SignUpSiteInfo";
import { SignUpAddInfo } from "./SignUpAddInfo";

export const SignUpPage = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <Container>
      <Head>
        <Title>
          <AiOutlineForm size={28} />
          발주신청
        </Title>
        <SubTitle>
          원활한 발주 작업을 위해, 필요한 정보를 기입해 주세요
        </SubTitle>
      </Head>
      <Body>
        <Division />
        <SignUpUserInfo register={register} errors={errors} />
        <SignUpSiteInfo register={register} errors={errors} />
        <SignUpAddInfo register={register} errors={errors} />
      </Body>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 40px 48px;
  gap: 12px 0;
  width: 100%;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  gap: 0 8px;
  font-size: 24px;
  align-items: center;
  letter-spacing: -1px;
  color: ${customColor.black};
`;
const SubTitle = styled.div`
  padding-left: 36px;
  font-size: 16px;
  color: ${customColor.darkGray};
  letter-spacing: -0.5px;
  font-weight: bold;
`;
const Body = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 8px 76px;
  width: 100%;
  gap: 56px 0;
  margin-bottom: 180px;
`;
const Division = styled.div`
  display: flex;
  position: absolute;
  width: 2px;
  height: 100%;
  background: ${customColor.darkGray};
  border-radius: 1px;
  left: 248px;
  top: 50%;
  transform: translate(0, -50%);
`;
