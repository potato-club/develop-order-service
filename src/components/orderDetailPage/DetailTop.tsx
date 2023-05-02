import styled from "styled-components";
import { Title } from "./Title";
import axios from "axios";

export const DetailTop = () => {
  const PAGETITLE = "발주 상세";
  const EXPLAIN = "발주의 상세 정보를 확인하고 평가해보세요";

  return (
    <WrapperTop>
      <Title pageTitle={PAGETITLE} explain={EXPLAIN} />
    </WrapperTop>
  );
};

const WrapperTop = styled.div`
  display: flex;
  width: 100%;
  height: 277px;
  padding-top: 40px;
  position: relative;
`;
