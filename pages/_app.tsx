import "../styles/globals.css";
import styled from "styled-components";
import type { AppProps } from "next/app";
import { Header } from "../src/components/header/Header";
import { Footer } from "../src/components/footer/Footer";
import { Layout } from "../src/components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
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
  width: 100%;
  min-height: 100vh;
`;
