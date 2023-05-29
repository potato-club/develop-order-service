import styled from "styled-components";
import { DetailTop } from "../src/components/orderDetailPage/DetailTop";
import { DetailContnets } from "../src/components/orderDetailPage/DetailContents";
import { DetailBottm } from "../src/components/orderDetailPage/Detailbottom";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { ReviewModal } from "../src/components/modal/ReviewModal";

export default function OrderDetail() {
  const router = useRouter();
  const id = router.query.id;
  const [detailDataState, setDetailDataState] = useState<any>();
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

  const getDetailData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/orders/detail/${id}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      setDetailDataState(response.data);
    } catch (error) {}
  };
  console.log(id);

  useEffect(() => {
    if (!router.isReady) return;

    getDetailData();
  }, [router.isReady]);

  return (
    <Wrapper>
      <ReviewModal
        modalState={modalState}
        getModalState={getModalState}
      ></ReviewModal>
      <DetailTop />
      <DetailContnets
        detailData={detailDataState && detailDataState}
        modalState={modalState}
        getModalState={getModalState}
      />
      <DetailBottm
        id={detailDataState && detailDataState.id}
        like={detailDataState && detailDataState.like}
        progress={detailDataState && detailDataState.state}
        modalState={modalState}
        getModalState={getModalState}
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
