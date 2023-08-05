import styled from "styled-components";
import { PreviewSwiper } from "./PreviewSwiper";
import { DetailInfo } from "./DetailInfo";
import axios from "axios";
import { useRouter } from "next/router";
import { detailDataTypes } from "../../../pages/orderDetail";

type propTypes = {
  detailData: detailDataTypes;
  modalState: {
    modalRole: string;
    state: boolean;
    text: string;
    onClickConfirmButton: () => void;
  };
  getModalState: (modalState: {
    modalRole: string;
    state: boolean;
    text: string;
    onClickConfirmButton: () => void;
  }) => void;
};

export const DetailContnets = ({
  detailData,
  modalState,
  getModalState,
}: propTypes) => {
  const router = useRouter();

  // 이거는 발주 상태 변경 테스트용
  const onClickModifyButton = async () => {
    const formData = new FormData();

    const requestDto = { database: true, login: true, page: 8, stateKey: 6 };
    if (requestDto) {
      formData.append(
        "orderDetail",
        new Blob([JSON.stringify(requestDto)], { type: "application/json" })
      );
    }
    const headers = {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "multipart/form-data",
    };

    const response = await axios.put(
      `https://www.developorderservice.store/orders/detail/${detailData.id}`,
      formData,
      { headers }
    );

    router.back();
  };

  // 이거는 별점 부여 버튼 테스트용
  // const onClickRatingButton = async () => {
  //   try {
  //     const response = await axios.put(
  //       `http://localhost:8080/orders/detail/${detailData.id}/rating`,
  //       {
  //         rating: 3.5,
  //       },
  //       {
  //         headers: {
  //           Authorization: `${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );
  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // 이거는 이미지 업로드 하는거 테스트
  // const handleImageChange = (e: any) => {
  //   const formData = new FormData();
  //   const test = e.target.files[0];

  //   const requestDto = { database: true, login: true, page: 8, stateKey: 4 };
  //   if (requestDto) {
  //     formData.append(
  //       "orderDetail",
  //       new Blob([JSON.stringify(requestDto)], { type: "application/json" })
  //     );
  //     formData.append("images", test);
  //   }

  //   const headers = {
  //     Authorization: localStorage.getItem("token"),
  //   };

  //   const response = axios.put(
  //     `http://localhost:8080/orders/detail/${detailData.id}`,
  //     formData,
  //     { headers }
  //   );
  //   console.log(response);
  // };

  return (
    <WrapperContents>
      {/* <div>
        <button onClick={onClickModifyButton}>발주 상태 변경</button>
      </div> */}
      {/* <input type="file" onChange={handleImageChange} multiple /> */}
      <DetailInfo
        detailData={detailData}
        modalState={modalState}
        getModalState={getModalState}
      />
      <PreviewSwiper images={detailData && detailData.images}></PreviewSwiper>
    </WrapperContents>
  );
};

const WrapperContents = styled.div`
  @media screen and (min-width: 1024px) {
    height: 1200px;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 1023px) {
    height: 900px;
    padding-bottom: 37.5px;
  }
  width: 100%;
  position: relative;
  border-bottom: 1px solid black;
`;
