import styled from "styled-components";
import { DetailTop } from "../src/components/orderDetailPage/DetailTop";
import { DetailContnets } from "../src/components/orderDetailPage/DetailContents";
import { DetailBottm } from "../src/components/orderDetailPage/Detailbottom";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function OrderDetail() {
  const router = useRouter();
  const id = router.query.id;
  const [detailDataState, setDetailDataState] = useState<any>();
  const getDetailData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/orders/detail/${id}`
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
    // {
    //   "completedDate": "2023-03-20T11:03:08.011Z",
    //   "createdDate": "2023-03-20T11:03:08.011Z",
    //   "database": true,
    //   "id": 0,
    //   "images": [
    //     {
    //       "id": 0,
    //       "imageName": "string",
    //       "imageUrl": "string"
    //     }
    //   ],
    //   "login": true,
    //   "page": 0,
    //   "purpose": "string",
    //   "rating": 0,
    //   "siteName": "string",
    //   "state": "COMPLETE"
    // }
    <Wrapper>
      <DetailTop />
      <DetailContnets
        title={detailDataState && detailDataState.siteName}
        id={detailDataState && detailDataState.id}
        purpose={detailDataState && detailDataState.purpose}
        startDate={detailDataState && detailDataState.createdDate.split("T")[0]}
        endDate={
          detailDataState &&
          detailDataState.completedDate &&
          detailDataState.completedDate.split("T")[0]
        }
        progress={detailDataState && detailDataState.state}
        // page login db starRating 등의 데이터는 완료되지 않은 발주에서는 존재하지 않음
        page={detailDataState && detailDataState.page}
        login={detailDataState && detailDataState.login}
        db={detailDataState && detailDataState.database}
        starRating={detailDataState && detailDataState.rating}
      />
      <DetailBottm
        like={detailDataState && detailDataState.like}
        progress={detailDataState && detailDataState.state}
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
