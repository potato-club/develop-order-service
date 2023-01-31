import styled from "styled-components";
import { customColor } from "../customColor";
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
  z-index: 5;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 4px 4px 0px ${customColor.black + "33"};
`;
