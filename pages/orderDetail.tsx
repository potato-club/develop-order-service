import styled from "styled-components";
import { DetailTop } from "../src/components/orderDetailPage/DetailTop";
import { DetailContnets } from "../src/components/orderDetailPage/DetailContents";
import { DetailBottm } from "../src/components/orderDetailPage/Detailbottom";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { ErrorModal } from "../src/components/orderDetailPage/ErrorModal";

export default function OrderDetail() {
  const router = useRouter();
  const id = router.query.id;
  const [detailDataState, setDetailDataState] = useState<any>();
  const [errorModalState, setErrorModalState] = useState<{
    state: boolean;
    text: string;
  }>({ state: false, text: "" });

  function getErrorModalState(modalState: { state: boolean; text: string }) {
    setErrorModalState(modalState);
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
      <ErrorModal
        errorModalState={errorModalState}
        getErrorModalState={getErrorModalState}
      ></ErrorModal>
      <DetailTop />
      <DetailContnets detailData={detailDataState && detailDataState} />
      <DetailBottm
        id={detailDataState && detailDataState.id}
        like={detailDataState && detailDataState.like}
        progress={detailDataState && detailDataState.state}
        errorModalState={errorModalState}
        getErrorModalState={getErrorModalState}
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
