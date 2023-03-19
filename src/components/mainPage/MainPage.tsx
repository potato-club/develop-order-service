import styled, { keyframes } from "styled-components";
import { customColor } from "../customColor";
import { SiteRanking } from "./components/SiteRanking";
import { Title } from "./components/Title";
import { BsChevronCompactDown } from "react-icons/bs";

export const MainPage = () => {
  return (
    <Container>
      <Head>
        <Title />
        <SiteRanking />
        <ScrollButton>
          스크롤하세요
          <BsChevronCompactDown size={18} />
        </ScrollButton>
      </Head>
      <Body></Body>
    </Container>
  );
};

const moveText = keyframes`
  0%{
    bottom:10px;
  }
  50%{
    bottom:6px;
  }
  100%{
    bottom:10px;
  }
`;
const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
const Head = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: calc(100vh - 80px);
`;
const ScrollButton = styled.button`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  animation: ${moveText} 1s infinite;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 1000px;
`;
