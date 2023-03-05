import { useInView } from "react-intersection-observer";
import styled from "styled-components";

export const FinalEdit = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  return <Wrapper id="final_edit"></Wrapper>;
};

const Wrapper = styled.section`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: yellow;
`;
