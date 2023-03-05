import { useInView } from "react-intersection-observer";
import styled from "styled-components";

export const Finish = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  return <Wrapper id="finish"></Wrapper>;
};

const Wrapper = styled.section`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: gray;
`;
