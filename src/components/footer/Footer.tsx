import styled from "styled-components";
import { FooterCompany } from "./FooterCompany";
import { FooterLogin } from "./FooterLogin";
import { customColor } from "../customColor";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Footer = () => {
  const isLoginPage = useRouter().pathname === "/login";
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    setIsLogin(localStorage?.getItem("token") !== undefined);
  }, []);

  return (
    <Wrapper>
      {!isLogin && !isLoginPage && <FooterLogin />}
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
