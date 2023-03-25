import styled from "styled-components";
import { ReviewTop } from "../src/components/orderReviewPage/ReviewTop";
import { ReviewContnets } from "../src/components/orderReviewPage/ReviewContents";
import { ReviewBottm } from "../src/components/orderReviewPage/ReviewBottom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function OrderReview() {
  const [contentsDataState, setContentsDataState] = useState<object>({});

  // 페이지 번호 state, ReviewBottom에서 값을 받아옴
  const [pageState, setPageState] = useState<number>(1);

  // 컨텐츠 필터 state, ReviewTop에서 값을 받아옴
  const [contentsFilterState, setContentsFilterState] =
    useState<string>("onGoing");

  // 정렬 옵션 state, ReviewTop에서 값을 받아옴
  const [sortOptionState, setSortOptionState] = useState<string>("noSort");

  // 컨셉 옵션 state, ReviewTop에서 값을 받아옴
  const [conceptOptionState, setConceptOptionState] =
    useState<string>("concept1");

  // 하위 컴포넌트들에서 state 값을 받아오기 위한 getState 함수들
  function getPageState(pageState: number) {
    setPageState(pageState);
  }
  function getContentsFilterState(contentFilterState: string) {
    setContentsFilterState(contentFilterState);
  }
  function getSortOptionState(sortOptionState: string) {
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
          (contentsFilterState === "finished" ? "?state=complete" : "") +
          // 지금은 state=myOrder로 get 요청을 보낼경우 state 값을 설정하지 않고 보낸것고 같은 데이터가 넘어옴
          // 일단은 임시로 state=complete로 요청하도록 해놓음
          (contentsFilterState === "myOrder" ? "?state=complete" : "")
        }`
      );
      setContentsDataState(response.data);
      console.log(response);
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
        contentsFilterState={contentsFilterState}
        sortOptionState={sortOptionState}
        conceptOptionState={conceptOptionState}
        getContentsFilterState={getContentsFilterState}
        getSortOptionState={getSortOptionState}
        getConceptOptionState={getConceptOptionState}
        getPageState={getPageState}
      />
      <ReviewContnets contentsData={contentsDataState} />
      <ReviewBottm
        pageState={pageState}
        contentsData={contentsDataState}
        getPageState={getPageState}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1024px;
  height: 1800px;
  padding: 0 12px;
  margin-top: 80px;
`;
