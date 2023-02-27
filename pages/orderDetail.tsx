import styled from "styled-components";
import { DetailTop } from "../src/components/orderDetailPage/DetailTop";
import { DetailContnets } from "../src/components/orderDetailPage/DetailContents";
import { DetailBottm } from "../src/components/orderDetailPage/Detailbottom";
import detailData from "../src/assets/data2.json";

export default function OrderDetail() {
  const dataProps = {};

  return (
    <Wrapper>
      <DetailTop />
      <DetailContnets
        title={detailData.data1.title}
        id={detailData.data1.id}
        purpose={detailData.data1.purpose}
        startDate={detailData.data1.startDate}
        endDate={detailData.data1.endDate}
        progress={detailData.data1.progress}
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
