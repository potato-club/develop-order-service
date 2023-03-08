import styled from "styled-components";
import { ReviewTop } from "../src/components/orderReviewPage/ReviewTop";
import { ReviewContnets } from "../src/components/orderReviewPage/ReviewContents";
import { ReviewBottm } from "../src/components/orderReviewPage/ReviewBottom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function OrderReview() {
  const [pageState, setPageState] = useState<number>();
  function getPageState(state: number) {
    setPageState(state);
  }
  useEffect(() => {
    console.log(pageState);
  }, [pageState]);
  return (
    <Wrapper>
      <ReviewTop />
      <ReviewContnets />
      <ReviewBottm getPageState={getPageState} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1024px;
  height: 1800px;
  padding: 0 12px;
`;
