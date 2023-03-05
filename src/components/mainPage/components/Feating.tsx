import { useInView } from "react-intersection-observer";
import styled from "styled-components";

export const Feating = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  return <Wrapper id="feating"></Wrapper>;
};

const Wrapper = styled.section`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: ghostwhite;
`;
