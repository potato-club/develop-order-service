import styled from "styled-components";
import Image from "next/image";
import heartIcon from "../../../public/img/detail/heart.png";
import axios from "axios";
import { useRouter } from "next/router";
import { pathName } from "./../../config/pathName";
import { useMutationPostLikes } from "../../hooks/query/orderDetail/useMutationPostLikes";

type propTypes = {
  id: number;
  like: number;
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
  like,
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
        <LikeButtonP>
          <Image src={heartIcon} alt="icon" width={23} height={23}></Image>
          {like}
        </LikeButtonP>
      </LikeButton>

      <ListButton onClick={onClickBackToListButton}>목록</ListButton>
    </BottomWrapper>
  );
};

const BottomWrapper = styled.div`
  position: relative;
  height: 323px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ListButton = styled.button`
  position: absolute;
  right: 64px;
  width: 100px;
  height: 40px;
  border-radius: 7px;
  font-size: 20px;
  border: 1px solid black;
`;

const LikeButton = styled.button<{ state: String }>`
  display: ${(props) => (props.state !== "COMPLETED" ? "none" : "")};
  width: 150px;
  height: 80px;
  border-radius: 10px;
  border: 1px solid black;
  margin: 0 auto;
  font-size: 23px;
`;

const LikeButtonP = styled.p`
  line-height: 23px;
`;

// 현재 이 컴포넌트를 활성화시키면 버그가 발생함
const VerticalContainer = styled.div`
  width: auto;
  height: auto;
  display: inline-block;
  vertical-align: middle;
`;
