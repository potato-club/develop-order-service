import styled from "styled-components";
import { ReviewTop } from "../src/components/orderReviewPage/ReviewTop";
import { ReviewContnets } from "../src/components/orderReviewPage/ReviewContents";
import { ReviewBottm } from "../src/components/orderReviewPage/ReviewBottom";
import { ReviewModal } from "../src/components/modal/ReviewModal";
import { useEffect, useState } from "react";
import { useQueryGetOrderList } from "../src/hooks/query/orderReview/useQueryGetOrderList";

type contentsFilterType = "onGoing" | "finished" | "myOrder";

export default function OrderReview() {
  const [contentsDataState, setContentsDataState] = useState<object>({});

  // 페이지 번호 state, ReviewBottom에서 값을 받아옴
  const [pageState, setPageState] = useState<number>(1);

  // 컨텐츠 필터 state, ReviewTop에서 값을 받아옴
  const [contentsFilterState, setContentsFilterState] =
    useState<contentsFilterType>("onGoing");

  // 정렬 옵션 state, ReviewTop에서 값을 받아옴
  const [sortOptionState, setSortOptionState] = useState<string>("noSort");

  // 컨셉 옵션 state, ReviewTop에서 값을 받아옴
  const [conceptOptionState, setConceptOptionState] =
    useState<string>("concept1");

  // 모달 출력 state ReviewTop과 ReviewContents에서 값을 받아옴
  const [modalState, setModalState] = useState<{
    modalRole: string;
    state: boolean;
    text: string;
    onClickConfirmButton: () => void;
  }>({ modalRole: "", state: false, text: "", onClickConfirmButton: () => {} });

  // 하위 컴포넌트들에서 state 값을 받아오기 위한 getState 함수들
  function getPageState(pageState: number) {
    setPageState(pageState);
  }

  function getContentsDataState(contentsDataState: object) {
    setContentsDataState(contentsDataState);
  }
  function getContentsFilterState(contentFilterState: contentsFilterType) {
    setContentsFilterState(contentFilterState);
  }
  function getSortOptionState(sortOptionState: string) {
    setSortOptionState(sortOptionState);
  }
  function getConceptOptionState(conceptOptionState: string) {
    setConceptOptionState(conceptOptionState);
  }
  function getModalState(modalState: {
    modalRole: string;
    state: boolean;
    text: string;
    onClickConfirmButton: () => void;
  }) {
    setModalState(modalState);
  }

  const { isSuccess, isError, data, refetch } = useQueryGetOrderList(
    contentsFilterState,
    pageState,
    getContentsDataState
  );

  useEffect(() => {
    console.log(localStorage.getItem("token"));
    refetch();
    console.log(data);
  }, [pageState, contentsFilterState, sortOptionState, conceptOptionState]);

  return (
    <Wrapper>
      <ReviewModal
        modalState={modalState}
        getModalState={getModalState}
      ></ReviewModal>
      <ReviewTop
        contentsFilterState={contentsFilterState}
        sortOptionState={sortOptionState}
        conceptOptionState={conceptOptionState}
        modalState={modalState}
        getContentsFilterState={getContentsFilterState}
        getSortOptionState={getSortOptionState}
        getConceptOptionState={getConceptOptionState}
        getPageState={getPageState}
        getModalState={getModalState}
      />
      <ReviewContnets
        contentsData={contentsDataState}
        modalState={modalState}
        getModalState={getModalState}
      />
      <ReviewBottm
        pageState={pageState}
        contentsData={contentsDataState}
        getPageState={getPageState}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
  height: 1800px;
  padding: 0 12px;
  margin-top: 80px;
`;
