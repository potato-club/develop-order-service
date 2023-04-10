import styled from "styled-components";
import Image from "next/image";
import checkIcon from "../../../public/img/detail/check.png";
import { PreviewSwiper } from "./PreviewSwiper";
import axios from "axios";
import { useRouter } from "next/router";

type contentsTypes = {
  siteName: string;
  id: number;
  purpose: string;
  createdDate: string;
  completedDate: string;
  state: string;
  page: any;
  login: any;
  db: any;
  starRating: any;
};
export const DetailContnets = ({
  detailData,
}: {
  detailData: contentsTypes;
}) => {
  const router = useRouter();
  const onClickOrderCancelButton = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/orders/${detailData.id}`,
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
  };

  return (
    <WrapperContents>
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
            <OrderInfoP>페이지 추가</OrderInfoP>
          </DataLabelDiv>
          <CheckBoxDiv>
            <CheckImgDiv additional={detailData && detailData.page}>
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
            <CheckImgDiv additional={detailData && detailData.db}>
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
        <InfoDataDiv1></InfoDataDiv1>
      </OrderInfoDiv>
      <OrderInfoDiv progress={""}>
        <PreviewLabelDiv>
          <OrderInfoP>웹페이지 미리보기</OrderInfoP>
        </PreviewLabelDiv>
      </OrderInfoDiv>
      <PreviewSwiper></PreviewSwiper>
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
