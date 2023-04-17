import styled from "styled-components";
import { customColor } from "../../customColor";

interface Props {
  events: {
    date: String;
    title: String;
  }[];
  isOpen: boolean;
  xy: number[];
  time: string;
  setTime: (time: string) => void;
}
interface StyleProps {
  isOpen?: boolean;
  xy?: number[];
  btnValue?: boolean;
  isExist?: boolean;
}

export const SelectTime = ({ isOpen, xy, time, setTime, events }: Props) => {
  return (
    <Modal isOpen={isOpen} xy={xy}>
      <Title>원하는 시간을 선택해주세요</Title>
      <Buttons>
        <Button
          type="button"
          btnValue={time === "10:00"}
          onClick={() => {
            setTime("10:00");
          }}
          isExist={events.map((i) => i.title.slice(4)).includes("10:00")}
        >
          10:00
        </Button>
        <Button
          type="button"
          btnValue={time === "13:00"}
          onClick={() => {
            setTime("13:00");
          }}
          isExist={events.map((i) => i.title.slice(4)).includes("13:00")}
        >
          13:00
        </Button>
        <Button
          type="button"
          btnValue={time === "16:00"}
          onClick={() => {
            setTime("16:00");
          }}
          isExist={events.map((i) => i.title.slice(4)).includes("16:00")}
        >
          16:00
        </Button>
      </Buttons>
    </Modal>
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
  background: ${(props) =>
    props.btnValue
      ? `${customColor.blue_}`
      : props.isExist
      ? `${customColor.lightGray}`
      : "none"};
  color: ${(props) => props.isExist && `${customColor.gray}`};
  pointer-events: ${(props) => props.isExist && "none"};
`;
