import styled from "styled-components";
import { customColor } from "../customColor";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <WrapperInner>{children}</WrapperInner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: auto;
  width: 100%;
  height: 100%;
  justify-content: center;
  background: ${customColor.lightGray};
`;

const WrapperInner = styled.div`
  display: flex;
  width: 1024px;
  min-height: 100%;
  background: ${customColor.white};
`;
