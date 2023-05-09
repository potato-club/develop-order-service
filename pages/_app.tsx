import styled from "styled-components";
import Router from "next/router";
import { GlobalStyle } from "../styles/global.style";
import type { AppProps } from "next/app";
import { Layout } from "../src/components/layout/Layout";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
