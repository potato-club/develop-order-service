import styled from "styled-components";
import Image from "next/image";
import heartIcon from "../../../public/img/detail/heart.png";
import { useRouter } from "next/router";
import { pathName } from "./../../config/pathName";
import { useMutationPostLikes } from "../../hooks/query/orderDetail/useMutationPostLikes";
import { useQueryGetOrderDetail } from "../../hooks/query/orderDetail/useQueryGetOrderDetail";

type propTypes = {
  id: number;
  likes: number;
  state: string;
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

export const DetailBottm = ({
  id,
  likes,
  state,
  modalState,
  getModalState,
}: propTypes) => {
  //
  const router = useRouter();

  const mutationPostLikes = useMutationPostLikes(id, getModalState);

  const onClickLikeButton = async () => {
    mutationPostLikes.mutate();
  };

  const onClickBackToListButton = () => {
    router.push(pathName.ORDERREVIEW);
  };

  return (
    <BottomWrapper>
      <LikeButton state={state} onClick={onClickLikeButton}>
        좋아요
        <LikeButtonBottomDiv>
          <LikeImageDiv>
            <Image src={heartIcon} alt="icon" fill />
          </LikeImageDiv>
          {likes}
        </LikeButtonBottomDiv>
      </LikeButton>
      <ListButton onClick={onClickBackToListButton}>목록</ListButton>
    </BottomWrapper>
  );
};

const BottomWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    height: 323px;
  }
  @media screen and (max-width: 1023px) {
    height: 242px;
  }
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ListButton = styled.button`
  @media screen and (min-width: 1024px) {
    right: 64px;
    width: 100px;
    height: 40px;
    font-size: 20px;
  }
  @media screen and (max-width: 1023px) {
    right: 48px;
    width: 75px;
    height: 30px;
    font-size: 15px;
  }
  position: absolute;
  border-radius: 7px;
  border: 1px solid black;
`;

const LikeButton = styled.button<{ state: string }>`
  @media screen and (min-width: 1024px) {
    width: 150px;
    height: 80px;
    font-size: 23px;
    padding: 10px;
  }
  @media screen and (max-width: 1023px) {
    width: 112.5px;
    height: 60px;
    font-size: 17px;
    padding: 7.5px;
  }
  display: ${(props) => (props.state !== "COMPLETED" ? "none" : "")};
  border-radius: 10px;
  border: 1px solid black;
  margin: 0 auto;
`;

const LikeImageDiv = styled.div`
  @media screen and (min-width: 1024px) {
    width: 23px;
    height: 23px;
  }
  @media screen and (max-width: 1023px) {
    width: 17px;
    height: 17px;
  }
  margin-right: 3px;
  position: relative;
`;

const LikeButtonBottomDiv = styled.div`
  width: 100%;
  font-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    height: 40px;
  }
  @media screen and (max-width: 1023px) {
    height: 30px;
  }
`;
