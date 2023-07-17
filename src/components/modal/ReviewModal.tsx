import styled from "styled-components";
import { customColor } from "../customColor";
import Image from "next/image";
import cross from "./../../../public/img/modal/cross.png";
import { useRouter } from "next/router";
import { pathName } from "../../config/pathName";

type propTypes = {
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

export const ReviewModal = ({ modalState, getModalState }: propTypes) => {
  const router = useRouter();

  const onClickXbutton = () => {
    getModalState({
      modalRole: "",
      state: false,
      text: "",
      onClickConfirmButton: () => {},
    });
  };

  const onClickGoToLoginButton = () => {
    router.push(pathName.LOGIN);
  };
  return (
    <ModalWrapper modalState={modalState.state}>
      <ModalHeaderDiv>
        <XButton onClick={onClickXbutton} modalRole={modalState.modalRole}>
          <Image src={cross} alt="x" width={20} height={20}></Image>
        </XButton>
      </ModalHeaderDiv>
      <ModalContentDiv>{modalState.text}</ModalContentDiv>
      <ModalFooterDiv>
        <GoToLoginButton
          onClick={onClickGoToLoginButton}
          modalRole={modalState.modalRole}
        >
          로그인 하러 가기
        </GoToLoginButton>
        <ConfirmButton
          onClick={modalState.onClickConfirmButton}
          modalRole={modalState.modalRole}
          buttonRole={"confirm"}
        >
          확인
        </ConfirmButton>
        <ConfirmButton
          onClick={onClickXbutton}
          modalRole={modalState.modalRole}
          buttonRole={"cancel"}
        >
          취소
        </ConfirmButton>
      </ModalFooterDiv>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div<{ modalState: boolean }>`
  display: ${(props) => (props.modalState === true ? "flex" : "none")};
  position: fixed;
  margin-top: 250px;
  width: 320px;
  height: 180px;
  flex-direction: column;
  box-shadow: 1px 2px 4px 2px ${customColor.black + "33"};
  background: ${customColor.white};
  z-index: 10;
`;

const ModalHeaderDiv = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  height: 30px;
`;

const XButton = styled.button<{ modalRole: string }>`
  display: ${(props) =>
    props.modalRole === "backToOrderReview" ? "none" : ""};
  width: 30px;
  height: 30px;
`;

const ModalContentDiv = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 35px;
  width: 100%;
  height: 100px;
`;

const ModalFooterDiv = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: center;
`;

const GoToLoginButton = styled.button<{ modalRole: string }>`
  display: ${(props) => (props.modalRole === "noLogin" ? "" : "none")};
  background-color: black;
  color: white;
  width: 100px;
  height: 30px;
  margin-bottom: 20px;
`;

const ConfirmButton = styled.button<{
  modalRole: string;
  buttonRole: "cancel" | "confirm";
}>`
  display: ${(props) =>
    props.modalRole === "confirm" ||
    (props.buttonRole === "confirm" && props.modalRole === "backToOrderReview")
      ? ""
      : "none"};
  background-color: black;
  color: white;
  width: 75px;
  height: 30px;
  margin: 0 10px 20px 10px;
`;
