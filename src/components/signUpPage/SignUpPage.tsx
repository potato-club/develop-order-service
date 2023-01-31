import { useState } from "react";
import styled from "styled-components";
import { AiOutlineForm } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import { MdTune } from "react-icons/md";
import { customColor } from "../customColor";

export const SignUpPage = () => {
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
        <Content>
          <Lbel>
            <HiOutlineUser size={20} />
            신청자 정보
          </Lbel>
          <Form>
            <FormItem>
              <FormItemLabel>
                *성함 또는 회사명(단체명)
                <EssentialInfo>*는 필수로 적어야하는 정보입니다</EssentialInfo>
              </FormItemLabel>
              <FormItemContent>김도스 또는 (주)도스</FormItemContent>
            </FormItem>
            <FormItem>
              <FormItemLabel>*이메일</FormItemLabel>
              <FormItemContent>김도스 또는 (주)도스</FormItemContent>
            </FormItem>
            <FormItem>
              <FormItemLabel>*전화번호1</FormItemLabel>
              <FormItemContent>김도스 또는 (주)도스</FormItemContent>
            </FormItem>
            <FormItem>
              <FormItemLabel>전화번호2</FormItemLabel>
              <FormItemContent>김도스 또는 (주)도스</FormItemContent>
            </FormItem>
          </Form>
        </Content>
        <Content>
          <Lbel>
            <CgWebsite size={20} />
            웹사이트 정보
          </Lbel>
          <Form>
            <FormItem>
              <FormItemLabel>
                *사이트 이름
                <EssentialInfo>*는 필수로 적어야하는 정보입니다</EssentialInfo>
              </FormItemLabel>
              <FormItemContent>김도스 또는 (주)도스</FormItemContent>
            </FormItem>
            <FormItem>
              <FormItemLabel>*사이트 목적</FormItemLabel>
              <FormItemContent>김도스 또는 (주)도스</FormItemContent>
            </FormItem>
            <FormItem>
              <FormItemLabel>*사이트 운영자</FormItemLabel>
              <FormItemContent>김도스 또는 (주)도스</FormItemContent>
            </FormItem>
          </Form>
        </Content>
        <Content>
          <Lbel>
            <MdTune size={20} />
            추가 정보
          </Lbel>
          <Form>
            <FormItem>
              <FormItemLabel>
                *브랜드 컬러1
                <EssentialInfo>*는 필수로 적어야하는 정보입니다</EssentialInfo>
              </FormItemLabel>
              <FormItemContent>김도스 또는 (주)도스</FormItemContent>
            </FormItem>
            <FormItem>
              <FormItemLabel>브랜드 컬러2</FormItemLabel>
              <FormItemContent>김도스 또는 (주)도스</FormItemContent>
            </FormItem>
            <FormItem>
              <FormItemLabel>페이지 수</FormItemLabel>
              <FormItemContent>김도스 또는 (주)도스</FormItemContent>
            </FormItem>
            <FormItem>
              <FormItemLabel>로그인 필요 유무</FormItemLabel>
              <FormItemContent>김도스 또는 (주)도스</FormItemContent>
            </FormItem>
            <FormItem>
              <FormItemLabel>DB 필요 유무</FormItemLabel>
              <FormItemContent>김도스 또는 (주)도스</FormItemContent>
            </FormItem>
            <FormItem>
              <FormItemLabel>사이트 컨셉 참고자료 첨부</FormItemLabel>
              <FormItemContent>김도스 또는 (주)도스</FormItemContent>
            </FormItem>
            <FormItem>
              <FormItemLabel>*첫 미팅 희망날짜</FormItemLabel>
              <FormItemContent>김도스 또는 (주)도스</FormItemContent>
            </FormItem>
          </Form>
        </Content>
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
const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 16px;
  width: 100%;
  align-items: flex-start;
`;
const Lbel = styled.p`
  display: flex;
  width: 156px;
  font-size: 18px;
  color: ${customColor.black};
  letter-spacing: -0.5px;
  font-weight: bold;
  gap: 0 4px;
  align-items: center;
  justify-content: flex-end;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px 0;
  flex: auto;
  padding-top: 36px;
`;
const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px 0;
`;
const FormItemLabel = styled.div`
  display: flex;
  font-size: 16px;
  color: ${customColor.black};
  letter-spacing: -0.5px;
  padding-left: 12px;
  justify-content: space-between;
  align-items: flex-end;
`;
const EssentialInfo = styled.p`
  display: flex;
  font-size: 12px;
  color: ${customColor.black};
  letter-spacing: -0.5px;
  padding-right: 20px;
`;
const FormItemContent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${customColor.lightGray};
  min-height: 38px;
  width: 100%;
  align-items: center;
  padding-left: 32px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
`;
