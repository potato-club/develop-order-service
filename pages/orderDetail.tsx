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
      <DetailContnets detailData={detailDataState && detailDataState} />
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
