import styled from "styled-components";
import { useQueryGetMyLikes } from "../../../../hooks/query/user/useQueryGetMyLikes";
import { customColor } from "../../../customColor";
import { LikeItem } from "./components/LikeItem";
import { Pagination } from "./components/Pagination";
import { BsQuestionCircle } from "react-icons/bs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { myLikesPageState } from "../../../../recoil/myPageState";

export const LikesContainer = () => {
  const pageState = useRecoilValue(myLikesPageState);
  const { isLoading, data, refetch } = useQueryGetMyLikes(pageState);
  useEffect(() => {
    refetch();
  }, [pageState, refetch, data]);

  return (
    <Wrapper>
      <WrapperInner>
        {!isLoading &&
          data?.likes.map((i, id) => <LikeItem key={id} data={i} />)}
      </WrapperInner>
      {data?.likes.length == 0 && (
        <NullBox>
          <QuestionIcon />
          좋아요를 누른 발주가 없습니다
        </NullBox>
      )}
      {data?.totalPage != 0 && <Pagination totalPage={data?.totalPage} />}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 60px 44px 44px;
  align-items: center;
  justify-content: center;
`;
const WrapperInner = styled.div`
  display: grid;
  width: 100%;
  flex: auto;
  gap: 48px 32px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  @media screen and (max-width: 920px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill);
  }
`;
const NullBox = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  background: ${customColor.lightGray};
  padding: 28px;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 16px;
  border-radius: 4px;
  box-shadow: inset 2px 3px 6px 0px ${customColor.black + "22"};
  border-bottom: 6px solid ${customColor.gray};
`;
const QuestionIcon = styled(BsQuestionCircle)`
  font-size: 20px;
  animation: shake 1.8s ease infinite;
  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    23% {
      transform: rotate(45deg);
    }
    45% {
      transform: rotate(-15deg);
    }
    58% {
      transform: rotate(25deg);
    }
    70% {
      transform: rotate(-10deg);
    }
    75% {
      transform: rotate(10deg);
    }
    80% {
      transform: rotate(0deg);
    }
  }
`;
