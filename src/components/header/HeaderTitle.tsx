import styled from "styled-components";
import { customColor } from "../customColor";

export const HeaderTitle = () => {
  return (
    <Wrapper>
      <WrapperInner>
        Develop<Highlight>&nbsp;Order&nbsp;</Highlight>Service
      </WrapperInner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40px;
  align-items: center;
  background: ${customColor.indigo1};
`;
const WrapperInner = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
  height: 100%;
  padding: 0 12px;
  justify-content: center;
  align-items: center;
  color: ${customColor.white};
  font-size: 16px;
  font-weight: bold;
`;
const Highlight = styled.span`
  color: ${customColor.blue};
  font-size: 16px;
  font-weight: bold;
`;
