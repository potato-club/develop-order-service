import styled from "styled-components";
import Image from "next/image";
import checkIcon from "../../../public/img/detail/check.png";
import { PreviewSwiper } from "./PreviewSwiper";
import axios from "axios";
import { useRouter } from "next/router";
import StarRatings from "react-star-ratings";
import { QueryClient, useMutation, useQuery } from "react-query";
import { useQueryPutStarRating } from "../../hooks/query/orderDetail/useQueryPutStarRating";

type detailDataTypes = {
  siteName: string;
  id: number;
  purpose: string;
  createdDate: string;
  completedDate?: string;
  images: Array<{
    id: number;
    imageName: string;
    imageUrl: string;
  }>;
  state: string;
  page: number;
  login: boolean;
  database: boolean;
  rating?: number;
};

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

  const onClickOrderCancelButton = async () => {
    getModalState({
      modalRole: "confirm",
      state: true,
      text: "정말로 발주를 취소하시겠습니까?",
      onClickConfirmButton: async () => {
        try {
          const response = await axios.delete(
            `https://www.developorderservice.store/${detailData.id}`,
            {
              headers: {
                Authorization: `${localStorage.getItem("token")}`,
              },
            }
          );
          console.log(response);
        } catch (err) {
          console.log(err);
        }
        router.back();
      },
    });
  };

  const queryClient = new QueryClient();

  const mutation = useQueryPutStarRating(detailData.id, getModalState);

  // const mutation = useMutation(
  //   "setStarRatings",
  //   (newRating: number) =>
  //     axios.put(
  //       `http://localhost:8080/orders/detail/${detailData.id}/rating`,
  //       {
  //         rating: newRating,
  //       },
  //       {
  //         headers: {
  //           Authorization: `${localStorage.getItem("token")}`,
  //         },
  //       }
  //     ),
  //   {
  //     onSuccess: (data) => {
  //       queryClient.invalidateQueries("getOrderDetail");
  //       console.log("onSuccess", data);
  //     },
  //     onError: (error: { response: { data: { error: string } } }) => {
  //       console.log(error);
  //       getModalState({
  //         modalRole: "alreadyRated",
  //         state: true,
  //         text: error.response.data.error,
  //         onClickConfirmButton: () => {},
  //       });
  //       console.log("onError", error);
  //     },
  //   }
  // );

  // // 이거는 발주 상태 변경 테스트용
  // const onClickModifyButton = async () => {
  //   const formData = new FormData();

  //   const requestDto = { database: true, login: true, page: 8, stateKey: 6 };
  //   if (requestDto) {
  //     formData.append(
  //       "orderDetail",
  //       new Blob([JSON.stringify(requestDto)], { type: "application/json" })
  //     );
  //   }
  //   const headers = {
  //     Authorization: localStorage.getItem("token"),
  //     "Content-Type": "multipart/form-data",
  //   };

  //   const response = await axios.put(
  //     `http://localhost:8080/orders/detail/${detailData.id}`,
  //     formData,
  //     { headers }
  //   );

  //   router.back();
  // };

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
      <OrderTitleWrapper>
        <OrderTitleDiv>
          <OrderTitleH2>{detailData && detailData.siteName}</OrderTitleH2>
        </OrderTitleDiv>
        <OrderCanaleButtonDiv progress={detailData && detailData.state}>
          <OrderCanaleButton onClick={onClickOrderCancelButton}>
            발주 취소
          </OrderCanaleButton>
        </OrderCanaleButtonDiv>
      </OrderTitleWrapper>
      <OrderInfoDiv progress={""}>
        <InfoLabelDiv>
          <OrderInfoP>목적</OrderInfoP>
        </InfoLabelDiv>
        <InfoDataDiv1>
          <OrderInfoP>{detailData && detailData.purpose}</OrderInfoP>
        </InfoDataDiv1>
      </OrderInfoDiv>
      <OrderInfoDiv progress={""}>
        <InfoLabelDiv>
          <OrderInfoP>제작기간</OrderInfoP>
        </InfoLabelDiv>
        <InfoDataDiv2>
          <DataLabelDiv>
            <OrderInfoP>시작일</OrderInfoP>
          </DataLabelDiv>
          <OrderInfoP>
            {detailData && detailData.createdDate.split("T")[0]}
          </OrderInfoP>
        </InfoDataDiv2>
        <InfoDataDiv2>
          <DataLabelDiv>
            <OrderInfoP>종료일</OrderInfoP>
          </DataLabelDiv>
          <OrderInfoP>
            {detailData &&
              detailData.completedDate &&
              detailData.completedDate.split("T")[0]}
          </OrderInfoP>
        </InfoDataDiv2>
      </OrderInfoDiv>
      <OrderInfoDiv progress={""}>
        <InfoLabelDiv>
          <OrderInfoP>추가 옵션</OrderInfoP>
        </InfoLabelDiv>
        <InfoDataDiv3>
          <DataLabelDiv>
            <OrderInfoP>페이지 수</OrderInfoP>
          </DataLabelDiv>
          {detailData && detailData.page}
        </InfoDataDiv3>
        <InfoDataDiv3>
          <DataLabelDiv>
            <OrderInfoP>로그인 기능</OrderInfoP>
          </DataLabelDiv>
          <CheckBoxDiv>
            <CheckImgDiv additional={detailData && detailData.login}>
              <Image
                src={checkIcon}
                alt="icon"
                width={21}
                height={21}
                style={{ margin: "auto" }}
              ></Image>
            </CheckImgDiv>
          </CheckBoxDiv>
        </InfoDataDiv3>
        <InfoDataDiv3>
          <DataLabelDiv>
            <OrderInfoP>DB</OrderInfoP>
          </DataLabelDiv>
          <CheckBoxDiv>
            <CheckImgDiv additional={detailData && detailData.database}>
              <Image
                src={checkIcon}
                alt="icon"
                width={21}
                height={21}
                style={{ margin: "auto" }}
              ></Image>
            </CheckImgDiv>
          </CheckBoxDiv>
        </InfoDataDiv3>
      </OrderInfoDiv>
      <OrderInfoDiv progress={detailData && detailData.state}>
        <InfoLabelDiv>
          <OrderInfoP>별점</OrderInfoP>
        </InfoLabelDiv>
        <InfoDataDiv1>
          <StarRatings
            rating={(detailData && detailData.rating) || 0}
            starRatedColor="gold"
            starEmptyColor="lightgray"
            starHoverColor="gold"
            starDimension="30px"
            starSpacing="2px"
            changeRating={(newRating: number) => {
              mutation.mutate(newRating);
            }}
            numberOfStars={5}
          ></StarRatings>
        </InfoDataDiv1>
      </OrderInfoDiv>
      <OrderInfoDiv progress={""}>
        <PreviewLabelDiv>
          <OrderInfoP>웹페이지 미리보기</OrderInfoP>
        </PreviewLabelDiv>
      </OrderInfoDiv>
      <PreviewSwiper images={detailData && detailData.images}></PreviewSwiper>
    </WrapperContents>
  );
};

const WrapperContents = styled.div`
  width: 100%;
  height: 1200px;
  position: relative;
  border-bottom: 1px solid black;
  padding-bottom: 50px;
`;

const OrderTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  border-top: 1px solid black;
`;

const OrderTitleDiv = styled.div`
  padding-left: 21px;
  height: 70px;
  width: 795px;
  border-right: 1px solid black;
`;

const OrderTitleH2 = styled.h2`
  flex-grow: 1;
  font-size: 27px;
  line-height: 70px;
`;

const OrderCanaleButtonDiv = styled.div<{ progress: string }>`
  display: ${(props) => (props.progress === "START" ? "flex" : "none")};
  align-items: center;
  height: 70px;
  width: 205px;
`;

const OrderCanaleButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 7px;
  font-size: 17px;
  border: 1px solid black;
  margin: auto;
`;

const OrderInfoDiv = styled.div<{ progress: String }>`
  display: ${(props) =>
    props.progress === "" || props.progress === "COMPLETED" ? "" : "none"};
  width: 100%;
  height: 50px;
  border-top: 1px solid black;
`;

const InfoLabelDiv = styled.div`
  height: 50px;
  width: 195px;
  padding-left: 23px;
  border-right: 1px solid black;
  float: left;
`;

const PreviewLabelDiv = styled.div`
  height: 50px;
  width: 195px;
  padding-left: 23px;
  float: left;
`;

const InfoDataDiv1 = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;
  height: 50px;
  width: 600px;
  border-right: 1px solid black;
  float: left;
`;

const InfoDataDiv2 = styled.div`
  height: 50px;
  width: 300px;
  border-right: 1px solid black;
  float: left;
`;

const InfoDataDiv3 = styled.div`
  height: 50px;
  width: 200px;
  border-right: 1px solid black;
  font-size: 20px;
  float: left;
  display: flex;
  align-items: center;
`;

const DataLabelDiv = styled.div`
  height: 50px;
  width: 150px;
  text-align: center;
  float: left;
`;

const OrderInfoP = styled.p`
  font-size: 20px;
  line-height: 50px;
`;

const CheckBoxDiv = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const CheckImgDiv = styled.div<{ additional: any }>`
  visibility: ${(props) =>
    props.additional !== true || props.additional === 0 ? "hidden" : ""};
  width: 23px;
  height: 23px;
  display: flex;
  align-items: center;
`;
