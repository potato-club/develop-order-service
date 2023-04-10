import styled from "styled-components";
import { GlobalStyle } from "../styles/global.style";
import type { AppProps } from "next/app";
import { Header } from "../src/components/header/Header";
import { Footer } from "../src/components/footer/Footer";
import { Layout } from "../src/components/layout/Layout";
import { RecoilRoot } from "recoil";
import { ScrollCSS } from "../src/components/layout/ScrollCSS";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
