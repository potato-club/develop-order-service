import "../styles/globals.css";
import styled from "styled-components";
import type { AppProps } from "next/app";
import { Header } from "../src/components/header/Header";
import { Footer } from "../src/components/footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
