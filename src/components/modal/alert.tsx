import styled from "styled-components";
import { customColor } from "../customColor";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
import ReactModal from "react-modal";

interface Props {
  content: string;
  isOpen: boolean;
  closeModal: () => void;
  eventFunc?: () => void;
}

export const Alert = ({ content, isOpen, closeModal, eventFunc }: Props) => {
  ReactModal.setAppElement("#__next");
  const alertRef = useRef(null);
  return (
    <CSSTransition
      in={isOpen}
      timeout={400}
      nodeRef={alertRef}
      classNames="modal"
    >
      <ReactModal
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        isOpen={true}
        style={{
          overlay: {
            display: `${isOpen ? "flex" : "none"}`,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: `${customColor.black + "00"}`,
            zIndex: 10,
            height: "100%",
            width: "100%",
          },
          content: {
            display: "flex",
            position: "fixed",
            WebkitOverflowScrolling: "touch",
            border: "none",
            padding: "0px",
            backgroundColor: `${customColor.white + "00"}`,
            width: "320px",
            height: "180px",
            top: "20px",
            left: "50%",
            transform: "translate(-50%,0)",
            overflow: "visible",
          },
        }}
      >
        <Wrapper ref={alertRef}>
          <Content>{content}</Content>
          <Button type="button" onClick={eventFunc || closeModal}>
            닫기
          </Button>
        </Wrapper>
      </ReactModal>
    </CSSTransition>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  padding: 40px 60px 20px;
  align-items: center;
  justify-content: space-around;
  background: ${customColor.white};
  box-shadow: 1px 2px 4px 2px ${customColor.black + "33"};
`;
const Content = styled.p`
  font-size: 16px;
  letter-spacing: -0.5px;
  text-align: center;
  word-break: keep-all;
`;
const Button = styled.button`
  display: flex;
  width: 100px;
  height: 32px;
  background: ${customColor.indigo3};
  color: ${customColor.white};
  font-size: 13px;
  letter-spacing: -0.3px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
