import styled from "styled-components";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderTitle } from "./HeaderTitle";

export const Header = () => {
  return (
    <Wrapper>
      <HeaderTitle />
      <HeaderMenu />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
