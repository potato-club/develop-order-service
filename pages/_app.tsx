import "../styles/globals.css";
import styled from "styled-components";
import type { AppProps } from "next/app";
import { Header } from "../components/header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Header />
      <Component {...pageProps} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
