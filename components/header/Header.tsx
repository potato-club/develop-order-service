import styled from "styled-components";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderTitle } from "./HeaderTitle";

export const Header = () => {
  return (
    <Wrapper>
      <WrapperInner>
        <HeaderTitle />
        <HeaderMenu />
      </WrapperInner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const WrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
`;
