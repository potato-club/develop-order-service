import { useEffect, useState } from "react";
import styled from "styled-components";
import { customColor } from "../customColor";
import { OptionButton } from "./components/OptionButton";
import StarRatings from "react-star-ratings";
import { SiteImagesSwiper } from "./components/SiteImagesSwiper";
import { EditButton } from "./components/EditButton";
import { useRouter } from "next/router";
import { detailDataTypes } from "../../../pages/orderDetail";
import { useQueryGetOrderDetail } from "../../hooks/query/orderDetail/useQueryGetOrderDetail";
import axios from "axios";

export const AdminModifyOrderDetailPage = () => {
  const router = useRouter();
  const id: string | string[] | undefined = router.query.id;

  const [detailDataState, setDetailDataState] = useState<detailDataTypes>();
  function getDetailDataState(detailDataState: detailDataTypes) {
    setDetailDataState(detailDataState);
  }

  const [option, setOption] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const { isSuccess, isError, data, refetch } = useQueryGetOrderDetail(
    id,
    getDetailDataState
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  // 발주 상태 변경 테스트 코드
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
      `https://www.developorderservice.store/orders/detail/${id}`,
      formData,
      { headers }
    );

    router.back();
  };

  //이미지 업로드 테스트 코드
  const handleImageChange = (e: any) => {
    const formData = new FormData();
    const test = e.target.files[0];

    const requestDto = { database: true, login: true, page: 8, stateKey: 4 };
    if (requestDto) {
      formData.append(
        "orderDetail",
        new Blob([JSON.stringify(requestDto)], { type: "application/json" })
      );
      formData.append("images", test);
    }

    const headers = {
      Authorization: localStorage.getItem("token"),
    };

    const response = axios.put(
      `http://localhost:8080/orders/detail/${id}`,
      formData,
      { headers }
    );
    console.log(response);
  };

  return (
    <Wrapper>
      <WebInfo>
        <WebName>{data && data.siteName}</WebName>
        <WebPurpose>
          <WebInfoWrapper>웹사이트 목적</WebInfoWrapper>
          {data && data.purpose}
        </WebPurpose>
        <WebPeriod>
          <WebInfoWrapper>제작 기간</WebInfoWrapper>
          {data && data.createdDate.split("T")[0]} ~{" "}
          {data && data.completedDate?.split("T")[0]}
        </WebPeriod>
        <WebAddInfo>
          <WebInfoWrapper>추가 옵션</WebInfoWrapper>
          <OptionButton
            name="페이지"
            value={option}
            setValue={(data: boolean) => setOption(data)}
          />
          {/* <OptionButton name="로그인" />
          <OptionButton name="DB" /> */}
        </WebAddInfo>
        <WebStarRating>
          <WebInfoWrapper>주문자 별점</WebInfoWrapper>
          {data && data.rating !== null ? (
            <StarRatings
              rating={data.rating && 0}
              starRatedColor={customColor.yellow}
              starEmptyColor={customColor.darkGray}
              starDimension="22px"
              starSpacing="0px"
              numberOfStars={5}
            />
          ) : (
            <>별점 없음</>
          )}
        </WebStarRating>
        <WebState>
          <WebInfoWrapper>발주 상태</WebInfoWrapper>
          <select>
            <option>발주 시작</option>
            <option>디자인 회의</option>
            <option>퍼블리싱</option>
            <option>페이지 기능 구현</option>
            <option>최종 수정</option>
            <option>발주 완료</option>
          </select>
        </WebState>
        <WebAddImage>
          <WebInfoWrapper>이미지 추가</WebInfoWrapper>
          <input type="file" onChange={handleImageChange} multiple />
        </WebAddImage>
      </WebInfo>
      <WebImages>
        <SiteImagesSwiper />
        <EditButton onClick={() => setIsEdit(!isEdit)} isEdit={isEdit} />
      </WebImages>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: auto;
  padding-top: 16px;
  color: ${customColor.white};
  overflow-y: overlay;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    width: 14px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${customColor.gray};
    border-radius: 10px;
    background-clip: padding-box;
    border: 4px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-button:start:decrement {
    background-color: transparent;
    height: 12px;
  }
  ::-webkit-scrollbar-button:end:increment {
    background-color: transparent;
    height: 24px;
  }
`;
const WebInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${customColor.darkGray + "99"};
`;
const WebInfoWrapper = styled.div`
  display: flex;
  width: 160px;
  border-right: 1px solid ${customColor.darkGray + "99"};
  padding: 10px;
  align-items: center;
  justify-content: center;
  color: ${customColor.lightGray};
`;
const WebName = styled.div`
  display: flex;
  border-bottom: 1px solid ${customColor.darkGray + "99"};
  width: 100%;
  padding: 10px 28px;
  font-size: 18px;
  font-weight: bold;
  color: ${customColor.white};
`;
const WebPurpose = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${customColor.darkGray + "99"};
  align-items: center;
  gap: 28px;
  font-size: 14px;
`;
const WebPeriod = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${customColor.darkGray + "99"};
  align-items: center;
  gap: 28px;
  font-size: 14px;
`;
const WebAddInfo = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${customColor.darkGray + "99"};
  align-items: center;
  gap: 28px;
  font-size: 14px;
`;
const WebStarRating = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${customColor.darkGray + "99"};
  align-items: center;
  gap: 28px;
  font-size: 14px;
`;

const WebState = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${customColor.darkGray + "99"};
  align-items: center;
  gap: 28px;
  font-size: 14px;
`;

const WebAddImage = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${customColor.darkGray + "99"};
  align-items: center;
  gap: 28px;
  font-size: 14px;
`;

const WebImages = styled.div`
  display: flex;
  flex: auto;
  position: relative;
`;
