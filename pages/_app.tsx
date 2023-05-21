import styled from "styled-components";
import Router from "next/router";
import { GlobalStyle } from "../styles/global.style";
import type { AppProps } from "next/app";
import { Layout } from "../src/components/layout/Layout";
import { RecoilRoot } from "recoil";
import { useEffect, useState } from "react";
import LoadingSpinner from "../src/components/loading/LoadingSpinner";
import { ScrollCSS } from "../src/components/layout/ScrollCSS";
import { QueryClient, QueryClientProvider } from "react-query";

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



  const queryClient = new QueryClient();

  return (
    
    <RecoilRoot>
       {loading && <LoadingSpinner fixed />}
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
