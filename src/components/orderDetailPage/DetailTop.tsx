import styled from "styled-components";
import { Title } from "./Title";

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
  @media screen and (min-width: 1024px) {
    height: 277px;
  }
  @media screen and (max-width: 1023px) {
    height: 208px;
  }
  display: flex;
  width: 100%;
  padding-top: 40px;
  position: relative;
`;
