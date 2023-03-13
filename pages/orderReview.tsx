import styled from "styled-components";
import { ReviewTop } from "../src/components/orderReviewPage/ReviewTop";
import { ReviewContnets } from "../src/components/orderReviewPage/ReviewContents";
import { ReviewBottm } from "../src/components/orderReviewPage/ReviewBottom";
import { useEffect, useState } from "react";
import axios from "axios";
import { finished } from "stream";

export default function OrderReview() {
  const [contentsDataState, setContentsDataState] = useState<object>({});

  // 페이지 번호 state, ReviewBottom에서 값을 받아옴
  const [pageState, setPageState] = useState<number>(1);

  // 컨텐츠 필터 state, ReviewTop에서 값을 받아옴
  const [contentsFilterState, setContentsFilterState] = useState<string>("");

  // 정렬 옵션 state, ReviewTop에서 값을 받아옴
  const [sortOptionState, setSortOptionState] = useState<string>("");

  // 컨셉 옵션 state, ReviewTop에서 값을 받아옴
  const [conceptOptionState, setConceptOptionState] = useState<string>("");

  // 하위 컴포넌트들에서 state 값을 받아오기 위한 getState 함수들
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
  //
  const getReviewData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/orders/detail${
          (pageState !== 1 ? "?page=" + pageState : "") +
          (contentsFilterState === "finished" ? "?state=complete" : "")
        }`
      );
      setContentsDataState(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // console.log(pageState);
    // console.log(contentsFilterState);
    // console.log(sortOptionState);
    // console.log(conceptOptionState);
    getReviewData();
  }, [pageState, contentsFilterState, sortOptionState, conceptOptionState]);

  return (
    <Wrapper>
      <ReviewTop
        getContentsFilterState={getContentsFilterState}
        getsortOptionState={getsortOptionState}
        getConceptOptionState={getConceptOptionState}
      />
      <ReviewContnets contentsData={contentsDataState} />
      <ReviewBottm
        getPageState={getPageState}
        contentsData={contentsDataState}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1024px;
  height: 1800px;
  padding: 0 12px;
`;
