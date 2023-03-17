import styled from "styled-components";
import { DetailTop } from "../src/components/orderDetailPage/DetailTop";
import { DetailContnets } from "../src/components/orderDetailPage/DetailContents";
import { DetailBottm } from "../src/components/orderDetailPage/Detailbottom";
import detailData from "../src/assets/data2.json";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function OrderDetail() {
  const router = useRouter();
  const id = router.query.id;
  const [detailDataState, setDetailDataState] = useState<object>();
  const getDetailData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/orders/detail/${id}`
      );
      console.log(response.data);
    } catch (error) {}
  };
  console.log(id);

  useEffect(() => {
    if (!router.isReady) return;
    getDetailData();
  }, [router.isReady]);

  return (
    <Wrapper>
      <DetailTop />
      <DetailContnets
        title={detailData.data2.title}
        id={detailData.data2.id}
        purpose={detailData.data2.purpose}
        startDate={detailData.data2.startDate}
        endDate={detailData.data2.endDate}
        progress={detailData.data2.progress}
        // page login db starRating 등의 데이터는 완료되지 않은 발주에서는 존재하지 않음
        page={detailData.data2.additional.page}
        login={detailData.data2.additional.login}
        db={detailData.data2.additional.db}
        starRating={detailData.data2.starRating}
      />
      <DetailBottm
        like={detailData.data2.like}
        progress={detailData.data2.progress}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1024px;
  height: 1800px;
  padding: 0 12px;
`;
