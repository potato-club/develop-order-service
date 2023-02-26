import styled from "styled-components";
import { SiteRanking } from "./components/SiteRanking";
import { Title } from "./components/Title";

export const MainPage = () => {
  return (
    <Container>
      <Head>
        <Title />
        <SiteRanking />
      </Head>
      <Body></Body>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 1000px;
`;
