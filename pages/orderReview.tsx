import styled from "styled-components";
import { ReviewTop } from "../src/components/orderReviewPage/ReviewTop";
import { ReviewContnets } from "../src/components/orderReviewPage/ReviewContents";
import { ReviewBottm } from "../src/components/orderReviewPage/ReviewBottom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function OrderReview() {
  const [pageState, setPageState] = useState<number>(1);
  const [contentsFilterState, setContentsFilterState] = useState<string>("");
  const [sortOptionState, setSortOptionState] = useState<string>("");
  const [conceptOptionState, setConceptOptionState] = useState<string>("");
  function getPageState(pageState: number) {
    setPageState(pageState);
  }
  function getContentsFilterState(contentFilterState: string) {
    setContentsFilterState(contentFilterState);
  }

  function getsortOptionState(sortOptionState: string) {
    setSortOptionState(sortOptionState);
  }

  function getConceptOptionState(conceptOptionState: string) {
    setConceptOptionState(conceptOptionState);
  }

  useEffect(() => {
    console.log(pageState);
    console.log(contentsFilterState);
    console.log(sortOptionState);
    console.log(conceptOptionState);
  }, [pageState, contentsFilterState, sortOptionState, conceptOptionState]);
  return (
    <Wrapper>
      <ReviewTop
        getContentsFilterState={getContentsFilterState}
        getsortOptionState={getsortOptionState}
        getConceptOptionState={getConceptOptionState}
      />
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
