import styled from "styled-components";
import { GlobalStyle } from "../styles/global.style";
import type { AppProps } from "next/app";
import { Header } from "../src/components/header/Header";
import { Footer } from "../src/components/footer/Footer";
import { Layout } from "../src/components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`;
