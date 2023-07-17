import styled from "styled-components";
import Image from "next/image";
import checkIcon from "../../../public/img/detail/check.png";
import { PreviewSwiper } from "./PreviewSwiper";
import axios from "axios";
import { useRouter } from "next/router";
import StarRatings from "react-star-ratings";
import { QueryClient, useMutation, useQuery } from "react-query";
import { useMutationPutStarRatings } from "../../hooks/query/orderDetail/useMutationPutStarRatings";
import { useMutationDeleteOrder } from "../../hooks/query/orderDetail/useMutationDeleteOrder";
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

  const mutationDeleteOrder = useMutationDeleteOrder(
    detailData && detailData.id
  );

  const onClickOrderCancelButton = async () => {
    getModalState({
      modalRole: "confirm",
      state: true,
      text: "정말로 발주를 취소하시겠습니까?",
      onClickConfirmButton: async () => {
        mutationDeleteOrder.mutate();
      },
    });
  };

  const mutationPutStarRatings = useMutationPutStarRatings({
    id: detailData && detailData.id,
    getModalState,
  });

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
      <OrderTitleWrapper>
        <OrderTitleDiv>{detailData && detailData.siteName}</OrderTitleDiv>
        <OrderCanaleButtonDiv progress={detailData && detailData.state}>
          <OrderCanaleButton onClick={onClickOrderCancelButton}>
            발주 취소
          </OrderCanaleButton>
        </OrderCanaleButtonDiv>
      </OrderTitleWrapper>
      <OrderInfoDiv progress={""}>
        <InfoLabelDiv preview={false}>목적</InfoLabelDiv>
        <InfoDataDiv1>{detailData && detailData.purpose}</InfoDataDiv1>
      </OrderInfoDiv>
      <OrderInfoDiv progress={""}>
        <InfoLabelDiv preview={false}>제작기간</InfoLabelDiv>
        <InfoDataDiv2>
          <DataLabelDiv>시작일</DataLabelDiv>
          {detailData && detailData.createdDate.split("T")[0]}
        </InfoDataDiv2>
        <InfoDataDiv2>
          <DataLabelDiv>종료일</DataLabelDiv>
          {detailData &&
            detailData.completedDate &&
            detailData.completedDate.split("T")[0]}
        </InfoDataDiv2>
      </OrderInfoDiv>
      <OrderInfoDiv progress={""}>
        <InfoLabelDiv preview={false}>추가 옵션</InfoLabelDiv>
        <InfoDataDiv3>
          <DataLabelDiv>페이지 수</DataLabelDiv>
          {detailData && detailData.page}
        </InfoDataDiv3>
        <InfoDataDiv3>
          <DataLabelDiv>로그인 기능</DataLabelDiv>
          <CheckBoxDiv>
            <CheckImgDiv additional={detailData && detailData.login}>
              <Image
                src={checkIcon}
                alt="icon"
                fill
                style={{ margin: "auto" }}
              ></Image>
            </CheckImgDiv>
          </CheckBoxDiv>
        </InfoDataDiv3>
        <InfoDataDiv3>
          <DataLabelDiv>DB</DataLabelDiv>
          <CheckBoxDiv>
            <CheckImgDiv additional={detailData && detailData.database}>
              <Image
                src={checkIcon}
                alt="icon"
                fill
                style={{ margin: "auto" }}
              ></Image>
            </CheckImgDiv>
          </CheckBoxDiv>
        </InfoDataDiv3>
      </OrderInfoDiv>
      <OrderInfoDiv progress={detailData && detailData.state}>
        <InfoLabelDiv preview={false}>별점</InfoLabelDiv>
        <InfoDataDiv1>
          <StarRatings
            rating={(detailData && detailData.rating) || 0}
            starRatedColor="gold"
            starEmptyColor="lightgray"
            starHoverColor="gold"
            starDimension="30px"
            starSpacing="2px"
            changeRating={(newRating: number) => {
              mutationPutStarRatings.mutate(newRating);
            }}
            numberOfStars={5}
          ></StarRatings>
        </InfoDataDiv1>
      </OrderInfoDiv>
      <OrderInfoDiv progress={""}>
        <InfoLabelDiv preview={true}>웹페이지 미리보기</InfoLabelDiv>
      </OrderInfoDiv>
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

const OrderTitleWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    height: 70px;
  }
  @media screen and (max-width: 1023px) {
    height: 52.5px;
  }
  display: flex;
  width: 100%;
  border-top: 1px solid black;
`;

const OrderTitleDiv = styled.div`
  @media screen and (min-width: 1024px) {
    height: 70px;
    width: 795px;
    font-size: 27px;
  }
  @media screen and (max-width: 1023px) {
    height: 52.5px;
    width: 598.5px;
    font-size: 20px;
  }
  display: flex;
  align-items: center;
  padding-left: 21px;
  border-right: 1px solid black;

  font-weight: bold;
`;

const OrderCanaleButtonDiv = styled.div<{ progress: string }>`
  @media screen and (min-width: 1024px) {
    height: 70px;
    width: 205px;
  }
  @media screen and (max-width: 1023px) {
    height: 52.5px;
    width: 148.5px;
  }
  display: ${(props) => (props.progress === "START" ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const OrderCanaleButton = styled.button`
  @media screen and (min-width: 1024px) {
    width: 100px;
    height: 40px;
    font-size: 17px;
  }
  @media screen and (max-width: 1023px) {
    width: 75px;
    height: 30px;
    font-size: 13px;
  }
  border-radius: 7px;
  border: 1px solid black;
`;

const OrderInfoDiv = styled.div<{ progress: String }>`
  @media screen and (min-width: 1024px) {
    height: 50px;
  }
  @media screen and (max-width: 1023px) {
    height: 37.5px;
  }
  display: ${(props) =>
    props.progress === "" || props.progress === "COMPLETED" ? "" : "none"};
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid black;
`;

const InfoLabelDiv = styled.div<{ preview: boolean }>`
  @media screen and (min-width: 1024px) {
    height: 50px;
    width: 195px;
    font-size: 20px;
  }
  @media screen and (max-width: 1023px) {
    height: 37.5px;
    width: 148.5px;
    font-size: 15px;
  }
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 23px;
  border-right: ${(props) =>
    props.preview === false ? "1px solid black" : ""};
`;

const InfoDataDiv1 = styled.div`
  @media screen and (min-width: 1024px) {
    height: 50px;
    width: 600px;
    font-size: 20px;
  }
  @media screen and (max-width: 1023px) {
    height: 37.5px;
    width: 450px;
    font-size: 15px;
  }
  display: flex;
  align-items: center;
  padding-left: 25px;
  border-right: 1px solid black;
`;

const InfoDataDiv2 = styled.div`
  @media screen and (min-width: 1024px) {
    height: 50px;
    width: 300px;
    font-size: 20px;
  }
  @media screen and (max-width: 1023px) {
    height: 37.5px;
    width: 225px;
    font-size: 15px;
  }
  display: flex;
  align-items: center;
  border-right: 1px solid black;
`;

const InfoDataDiv3 = styled.div`
  @media screen and (min-width: 1024px) {
    height: 50px;
    width: 200px;
    font-size: 20px;
  }
  @media screen and (max-width: 1023px) {
    height: 37.5px;
    width: 150px;
    font-size: 15px;
  }
  border-right: 1px solid black;
  float: left;
  display: flex;
  align-items: center;
`;

const DataLabelDiv = styled.div`
  @media screen and (min-width: 1024px) {
    height: 50px;
    width: 150px;
  }
  @media screen and (max-width: 1023px) {
    height: 37.5px;
    width: 112.5px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckBoxDiv = styled.div`
  @media screen and (min-width: 1024px) {
    width: 25px;
    height: 25px;
  }
  @media screen and (max-width: 1023px) {
    width: 19px;
    height: 19px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const CheckImgDiv = styled.div<{ additional: any }>`
  @media screen and (min-width: 1024px) {
    width: 23px;
    height: 23px;
  }
  @media screen and (max-width: 1023px) {
    width: 17px;
    height: 17px;
  }

  position: relative;
  visibility: ${(props) =>
    props.additional !== true || props.additional === 0 ? "hidden" : ""};

  display: flex;
  align-items: center;
`;
