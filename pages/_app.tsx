import styled from "styled-components";
import { GlobalStyle } from "../styles/global.style";
import type { AppProps } from "next/app";
import { Header } from "../src/components/header/Header";
import { Footer } from "../src/components/footer/Footer";
import { Layout } from "../src/components/layout/Layout";
import { RecoilRoot } from "recoil";
import { useEffect, useState } from "react";
import Router from "next/router";
import LoadingSpinner from "../src/components/loading/LoadingSpinner";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const showRoute = ["/", "/login", "/signUp", "/Information"];
    const start = (url: string, { shallow }: { shallow: boolean }) => {
      if (showRoute.find((route) => String(url).includes(route))) {
        setLoading(true);
      }
    };
    const end = (url: string) => {
      if (showRoute.find((route) => String(url).includes(route))) {
        setLoading(false);
      }
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    
    <RecoilRoot>
       {loading && <LoadingSpinner fixed />}
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </Wrapper>
    </RecoilRoot>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`;
