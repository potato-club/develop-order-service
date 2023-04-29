import styled from "styled-components";
import { customColor } from "../customColor";
import Image from "next/image";
import cross from "./../../../public/img/modal/cross.png";
import { useRouter } from "next/router";
import { pathName } from "./../../config/pathName";

type propTypes = {
  errorModalState: { state: boolean; text: string };
  getErrorModalState: (modalState: { state: boolean; text: string }) => void;
};

export const ErrorModal = ({
  errorModalState,
  getErrorModalState,
}: propTypes) => {
  const router = useRouter();

  const onClickXbutton = () => {
    getErrorModalState({ state: false, text: "" });
  };

  const onClickGoToLoginButton = () => {
    router.push(pathName.LOGIN);
  };
  return (
    <ModalWrapper modalState={errorModalState.state}>
      <ModalHeaderDiv>
        <XButton onClick={onClickXbutton}>
          <Image src={cross} alt="x" width={20} height={20}></Image>
        </XButton>
      </ModalHeaderDiv>
      <ModalContentDiv>{errorModalState.text}</ModalContentDiv>
      <ModalFooterDiv></ModalFooterDiv>
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

const XButton = styled.button`
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

const GoToLoginButton = styled.button`
  background-color: black;
  color: white;
  width: 100px;
  height: 30px;
  margin-bottom: 20px;
`;
