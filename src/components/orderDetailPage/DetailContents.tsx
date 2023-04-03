import styled from "styled-components";
import Image from "next/image";
import checkIcon from "../../../public/img/detail/check.png";
import { PreviewSwiper } from "./PreviewSwiper";

type contentsTypes = {
  title: string;
  id: number;
  purpose: string;
  createdDate: string;
  completedDate: string;
  progress: string;
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
  return (
    <WrapperContents>
      <OrderTitleDiv>
        <OrderTitleH2>{detailData && detailData.title}</OrderTitleH2>
      </OrderTitleDiv>
      <OrderInfoDiv data={""}>
        <InfoLabelDiv>
          <OrderInfoP>목적</OrderInfoP>
        </InfoLabelDiv>
        <InfoDataDiv1>
          <OrderInfoP>{detailData && detailData.purpose}</OrderInfoP>
        </InfoDataDiv1>
      </OrderInfoDiv>
      <OrderInfoDiv data={""}>
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
      <OrderInfoDiv data={detailData && detailData.progress}>
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
      <OrderInfoDiv data={detailData && detailData.progress}>
        <InfoLabelDiv>
          <OrderInfoP>별점</OrderInfoP>
        </InfoLabelDiv>
        <InfoDataDiv1></InfoDataDiv1>
      </OrderInfoDiv>
      <OrderInfoDiv data={""}>
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

const OrderTitleDiv = styled.div`
  width: 100%;
  height: 70px;
  border-top: 1px solid black;
  padding-left: 21px;
`;

const OrderTitleH2 = styled.h2`
  font-size: 27px;
  line-height: 70px;
`;

const OrderInfoDiv = styled.div<{ data: String }>`
  display: ${(props) => (props.data === "WORKING" ? "none" : "")};
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
