import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import checkIcon from "../../../public/img/detail/check.png";
import { useRouter } from "next/router";
import { Rating } from "react-simple-star-rating";
import { useMutationPutStarRatings } from "../../hooks/query/orderDetail/useMutationPutStarRatings";
import { useMutationDeleteOrder } from "../../hooks/query/orderDetail/useMutationDeleteOrder";
import { detailDataTypes } from "../../../pages/orderDetail";
import { OrderInfo } from "./OrderInfo";

type propTypes = {
  detailData?: detailDataTypes;
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

export const DetailInfo = ({
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

  const [rating, setRating] = useState(0);

  const handleOnClickRating = (newRating: number) => {
    mutationPutStarRatings.mutate(newRating);
  };

  return (
    <WrapperInfo>
      <OrderTitleWrapper>
        <OrderTitleDiv>{detailData && detailData.siteName}</OrderTitleDiv>
        <OrderCanaleButtonDiv progress={detailData && detailData.state}>
          <OrderCanaleButton onClick={onClickOrderCancelButton}>
            발주 취소
          </OrderCanaleButton>
        </OrderCanaleButtonDiv>
      </OrderTitleWrapper>
      <OrderInfo progress={""} label="목적" preview={false}>
        <InfoDataDiv type={1}>{detailData && detailData.purpose}</InfoDataDiv>
      </OrderInfo>
      <OrderInfo progress={""} label="제작기간" preview={false}>
        <InfoDataDiv type={2}>
          <DataLabelDiv>시작일</DataLabelDiv>
          {detailData && detailData.createdDate.split("T")[0]}
        </InfoDataDiv>
        <InfoDataDiv type={2}>
          <DataLabelDiv>종료일</DataLabelDiv>
          {detailData &&
            detailData.completedDate &&
            detailData.completedDate.split("T")[0]}
        </InfoDataDiv>
      </OrderInfo>
      <OrderInfo progress={""} label="추가 옵션" preview={false}>
        <InfoDataDiv type={3}>
          <DataLabelDiv>페이지 수</DataLabelDiv>
          {detailData && detailData.page}
        </InfoDataDiv>
        <InfoDataDiv type={3}>
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
        </InfoDataDiv>
        <InfoDataDiv type={3}>
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
        </InfoDataDiv>
      </OrderInfo>
      <OrderInfo
        progress={detailData && detailData.state}
        label="별점"
        preview={false}
      >
        <InfoDataDiv type={1}>
          <Rating onClick={handleOnClickRating} transition allowFraction />
        </InfoDataDiv>
      </OrderInfo>
      <OrderInfo
        progress={""}
        label="웹페이지 미리보기"
        preview={true}
      ></OrderInfo>
    </WrapperInfo>
  );
};

const WrapperInfo = styled.div``;

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

const OrderCanaleButtonDiv = styled.div<{ progress?: string }>`
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

const InfoDataDiv = styled.div<{ type: 1 | 2 | 3 }>`
  @media screen and (min-width: 1024px) {
    height: 50px;
    font-size: 20px;
    ${(props) => {
      switch (props.type) {
        case 1:
          return `width: 600px;`;
        case 2:
          return `width: 300px;`;
        case 3:
          return `width: 200px;`;
      }
    }};
  }
  @media screen and (max-width: 1023px) {
    ${(props) => {
      switch (props.type) {
        case 1:
          return `width: 450px;`;
        case 2:
          return `width: 225px;`;
        case 3:
          return `width: 150px;`;
      }
    }};
    height: 37.5px;
    font-size: 15px;
  }
  display: flex;
  align-items: center;
  padding-left: ${(props) => (props.type === 1 ? "25px" : "")};
  border-right: 1px solid black;
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
