import styled from "styled-components";
import Image from "next/image";
import heartIcon from "../../../public/img/detail/heart.png";
import axios from "axios";
import { useRouter } from "next/router";
import { pathName } from "./../../config/pathName";

type propTypes = {
  id: number;
  like: number;
  progress: string;
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
  progress,
  modalState,
  getModalState,
}: propTypes) => {
  //
  const router = useRouter();
  const onClickLikeButton = async () => {
    console.log(localStorage.getItem("token"));

    try {
      const response = await axios.post(
        `http://localhost:8080/orders/detail/${id}/likes`,
        {},
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
    } catch (err: any) {
      getModalState({
        modalRole: "likeMyOrder",
        state: true,
        text: err.response.data.error,
        onClickConfirmButton: () => {},
      });
      console.log(err.response.data.error);
    }
  };

  const onClickBackToListButton = () => {
    router.push(pathName.ORDERREVIEW);
  };

  return (
    <BottomWrapper>
      <LikeButton progress={progress} onClick={onClickLikeButton}>
        좋아요
        <LikeButtonP>
          {/* <VerticalContainer></VerticalContainer> */}
          {/* 원래는 VerticalContainer 안에 Image를 넣어놓는 형식이지만 VerticalContainer에서 오류가 발생해서 일단 */}
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

const LikeButton = styled.button<{ progress: String }>`
  display: ${(props) => (props.progress !== "COMPLETED" ? "none" : "")};
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
