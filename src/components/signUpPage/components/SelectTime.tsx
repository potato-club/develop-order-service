import { RefObject, useRef, useState } from "react";
import styled from "styled-components";
import { customColor } from "../../customColor";
import { CSSTransition } from "react-transition-group";

interface Props {
  isOpen: boolean;
  xy: number[];
  time: string;
  setTime: (time: string) => void;
}
interface StyleProps {
  isOpen?: boolean;
  xy?: number[];
  btnValue?: boolean;
}

export const SelectTime = ({ isOpen, xy, time, setTime }: Props) => {
  const modalRef = useRef(null);
  return (
    <CSSTransition
      in={isOpen}
      timeout={400}
      nodeRef={modalRef}
      classNames="time_modal"
      unmountOnExit
    >
      <Modal isOpen={isOpen} xy={xy} ref={modalRef}>
        <Title>원하는 시간을 선택해주세요</Title>
        <Buttons>
          <Button
            type="button"
            btnValue={time === "10:00"}
            onClick={() => {
              setTime("10:00");
            }}
          >
            10:00
          </Button>
          <Button
            type="button"
            btnValue={time === "13:00"}
            onClick={() => {
              setTime("13:00");
            }}
          >
            13:00
          </Button>
          <Button
            type="button"
            btnValue={time === "16:00"}
            onClick={() => {
              setTime("16:00");
            }}
          >
            16:00
          </Button>
        </Buttons>
      </Modal>
    </CSSTransition>
  );
};

const Modal = styled.div<StyleProps>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  background: ${customColor.white};
  top: ${(props) => props.xy && props.xy[1]}px;
  left: ${(props) => props.xy && props.xy[0]}px;
  z-index: 2;
  border-radius: 2px;
  box-shadow: 1px 2px 4px 2px ${customColor.black + "33"};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 137px;
  height: 120px;
  overflow: hidden;
`;
const Title = styled.p`
  display: flex;
  font-size: 12px;
  letter-spacing: -1px;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Button = styled.button<StyleProps>`
  display: flex;
  height: 20px;
  width: 100px;
  box-shadow: ${(props) =>
    props.btnValue
      ? `1px 2px 4px 2px ${customColor.black + "33"},0px 0px 4px 2px ${
          customColor.blue + "bb"
        }`
      : `1px 2px 4px 2px ${customColor.black + "33"}`};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  letter-spacing: -0.3px;
  background: ${(props) => (props.btnValue ? `${customColor.blue_}` : "none")};
`;
