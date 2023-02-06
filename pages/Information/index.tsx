import "../styles/globals.css";
import styled from "styled-components";
import type { AppProps } from "next/app";
import { Header } from "../../src/components";
import { Footer } from "../../src/components/footer/Footer";
import { Layout } from "../../src/components/layout/Layout";
const info = () => {
    return (
        <div>
            <Header />
            
            <Footer />
        </div>
    );
};


const Wrapper  = styled.div`
`