import styled from "styled-components";
import { GlobalStyle } from "../../../styles/global.style";
import { customColor } from "../customColor";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { ScrollCSS } from "./ScrollCSS";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <ScrollCSS />
      <Header />
      <LayoutWrapper>
        <LayoutWrapperInner>{children}</LayoutWrapperInner>
      </LayoutWrapper>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`;
const LayoutWrapper = styled.div`
  display: flex;
  flex: auto;
  width: 100%;
  height: 100%;
  justify-content: center;
  background: ${customColor.lightGray};
`;
const LayoutWrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
  min-height: 100%;
  background: ${customColor.white};
  justify-content: center;
  align-items: center;
`;
