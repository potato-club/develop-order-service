import styled from "styled-components";
import { FooterCompany } from "./FooterCompany";
import { FooterLogin } from "./FooterLogin";

export const Footer = () => {
  return (
    <Wrapper>
      <FooterLogin />
      <FooterCompany />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
