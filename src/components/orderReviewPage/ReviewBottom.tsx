import styled from "styled-components";
import { Pagenation } from "./Pagenation";

export const ReviewBottm = () => {
  return (
    <BottomWrapper>
      <Pagenation />
    </BottomWrapper>
  );
};

const BottomWrapper = styled.div`
  height: 323px;
  width: 100%;
  display: flex;
  align-items: center;
`;
