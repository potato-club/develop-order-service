import styled from "styled-components";
import { useState } from "react";
import { FooterCompany } from "./FooterCompany";
import { FooterLogin } from "./FooterLogin";

export const Footer = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Wrapper>
      {!isLogin && <FooterLogin />}
      <FooterCompany />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
