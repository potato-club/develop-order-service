import styled from "styled-components";
import { ReviewTop } from "../src/components/orderReviewPage/ReviewTop";
import { ReviewContnets } from "../src/components/orderReviewPage/ReviewContents";
import { ReviewBottm } from "../src/components/orderReviewPage/ReviewBottom";
import { ReviewModal } from "../src/components/modal/ReviewModal";
import { useEffect, useState } from "react";
import { useQueryGetOrderList } from "../src/hooks/query/orderReview/useQueryGetOrderList";
import { useRecoilValue } from "recoil";
import {
  reviewPageState,
  reviewContentsFilterState,
  reviewSortOptionState,
} from "../src/recoil/reviewPageState";
import { tokenService } from "../src/libs/tokenService";

export type contentType = {
  id: number;
  clientName: string;
  createdDate: string;
  completedDate?: string;
  likes?: number;
  purpose: string;
  rating?: number;
  siteName: string;
  state: "START" | "DESIGN" | "PUBLISH" | "IMPLEMENT" | "FINAL" | "COMPLETED";
  thumbnail?: boolean;
};

export type contentsDataType = {
  content: contentType[];
  numberOfElements: number;
  totalPages?: number;
};

export default function OrderReview() {
  const pageState = useRecoilValue(reviewPageState);
  const contentsFilterState = useRecoilValue(reviewContentsFilterState);
  const sortOptionState = useRecoilValue(reviewSortOptionState);

  // 모달 출력 state ReviewTop과 ReviewContents에서 값을 받아옴
  const [modalState, setModalState] = useState<{
    modalRole: string;
    state: boolean;
    text: string;
    onClickConfirmButton: () => void;
  }>({ modalRole: "", state: false, text: "", onClickConfirmButton: () => {} });

  function getModalState(modalState: {
    modalRole: string;
    state: boolean;
    text: string;
    onClickConfirmButton: () => void;
  }) {
    setModalState(modalState);
  }

  const { data, refetch } = useQueryGetOrderList(
    contentsFilterState,
    pageState
  );

  useEffect(() => {
    console.log(tokenService.getToken());
    refetch();
    console.log(data);
  }, [pageState, contentsFilterState, sortOptionState, refetch, data]);

  return (
    <Wrapper>
      <ReviewModal
        modalState={modalState}
        getModalState={getModalState}
      ></ReviewModal>
      <ReviewTop modalState={modalState} getModalState={getModalState} />
      <ReviewContnets
        contentsData={data}
        modalState={modalState}
        getModalState={getModalState}
      />
      <ReviewBottm totalPages={data && data.totalPages} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding: 0 12px;
    height: 1800px;
  }
  @media screen and (max-width: 1023px) {
    width: 767px;
    padding: 0 10px;
    height: 1350px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: flex-start; */
  margin-top: 80px;
`;
