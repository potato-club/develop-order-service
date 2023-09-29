import styled from "styled-components";
import { useQueryGetMyLikes } from "../../../../hooks/query/user/useQueryGetMyLikes";
import { LikeItem } from "./components/LikeItem";
import { Pagination } from "./components/Pagination";

export const LikesContainer = () => {
  const { isLoading, data } = useQueryGetMyLikes();

  return (
    <Wrapper>
      <WrapperInner>
        {!isLoading && data?.map((i, id) => <LikeItem key={id} data={i} />)}
      </WrapperInner>
      <Pagination />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const WrapperInner = styled.div`
  display: grid;
  width: 100%;
  flex: auto;
  gap: 48px 32px;
  padding: 60px 44px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  @media screen and (max-width: 920px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
`;
