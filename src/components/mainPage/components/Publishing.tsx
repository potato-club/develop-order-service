import { useInView } from "react-intersection-observer";
import styled from "styled-components";

export const Publishing = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  return <Wrapper id="publishing"></Wrapper>;
};

const Wrapper = styled.section`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: blue;
`;
