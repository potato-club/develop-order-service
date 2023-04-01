import Router from "next/router";
import styled from "styled-components";
import { pathName } from "../../config/pathName";
import { customColor } from "../customColor";

export const FooterLogin = () => {
  return (
    <Wrapper>
      <WrapperInner>
        <Content>
          발주신청을 하고싶다면?
          <LoginButton
            onClick={() => Router.replace(pathName.LOGIN, Router.pathname)}
          >
            로그인하기
          </LoginButton>
        </Content>
      </WrapperInner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  background: ${customColor.indigo2};
`;
const WrapperInner = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1024px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 16px;
  color: ${customColor.white};
  font-size: 16px;
  align-items: center;
`;
const LoginButton = styled.button`
  display: flex;
  width: 112px;
  height: 38px;
  font-size: 14px;
  font-weight: bold;
  color: ${customColor.black};
  background: ${customColor.blue};
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
