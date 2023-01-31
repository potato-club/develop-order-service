import styled from "styled-components";
import { useState } from "react";
import { FooterCompany } from "./FooterCompany";
import { FooterLogin } from "./FooterLogin";
import { customColor } from "../customColor";

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
  z-index: 5;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px -4px 4px 0px ${customColor.black + "33"};
`;
