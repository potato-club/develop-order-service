import styled from "styled-components";
import { DetailTop } from "../src/components/orderDetailPage/DetailTop";
import { DetailContnets } from "../src/components/orderDetailPage/DetailContents";
import { DetailBottm } from "../src/components/orderDetailPage/Detailbottom";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ReviewModal } from "../src/components/modal/ReviewModal";
import { useQueryGetOrderDetail } from "../src/hooks/query/orderDetail/useQueryGetOrderDetail";
import { pathName } from "../src/config/pathName";
import { tokenService } from "../src/libs/tokenService";

export type detailDataTypes = {
  completedDate?: string;
  createdDate: string;
  database: boolean;
  id: number;
  images: { id: number; imageName: string; imageUrl: string }[];
  likes?: number;
  login: boolean;
  page?: number;
  purpose: string;
  rating?: number;
  siteName: string;
  state: "START" | "DESIGN" | "PUBLISH" | "IMPLEMENT" | "FINAL" | "COMPLETED";
};

export default function OrderDetail() {
  const router = useRouter();
  const id: string | string[] | undefined = router.query.id;
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

  const { isSuccess, isError, data, refetch } = useQueryGetOrderDetail(id);

  useEffect(() => {
    console.log(tokenService.getRole());

    if (tokenService.getRole() !== "USER") {
      getModalState({
        modalRole: "backToOrderReview",
        state: true,
        text: "로그인 상태가 아니므로 게시물에 접근할 수 없습니다.",
        onClickConfirmButton: () => {
          router.push(pathName.ORDERREVIEW);
        },
      });
    }
  }, [router]);

  return (
    <Wrapper>
      <ReviewModal
        modalState={modalState}
        getModalState={getModalState}
      ></ReviewModal>
      <DetailTop />
      <DetailContnets
        detailData={data && data}
        modalState={modalState}
        getModalState={getModalState}
      />
      <DetailBottm
        id={data && data.id}
        likes={data && data.likes}
        state={data && data.state}
        modalState={modalState}
        getModalState={getModalState}
      />
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
