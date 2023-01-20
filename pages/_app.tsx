import "../styles/globals.css";
import styled from "styled-components";
import type { AppProps } from "next/app";
import { Header } from "../src/components/header/Header";
import { Layout } from "../src/components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
