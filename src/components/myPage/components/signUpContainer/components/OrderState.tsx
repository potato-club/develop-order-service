import styled from "styled-components";
import { customColor } from "../../../../customColor";

export const OrderState = (props: {
  state:
    | "CHECK"
    | "START"
    | "DESIGN"
    | "PUBLISH"
    | "IMPLEMENT"
    | "FINAL"
    | "COMPLETED";
}) => {
  const stateOption = [
    { label: "발주 시작", state: "START" },
    { label: "디자인 회의", state: "DESIGN" },
    { label: "퍼블리싱", state: "PUBLISH" },
    { label: "페이지 기능 구현", state: "IMPLEMENT" },
    { label: "최종 수정", state: "FINAL" },
    { label: "발주 완료", state: "COMPLETED" },
  ];
  return (
    <WebState>
      {stateOption.map((i, id) => (
        <WebStateButton key={id} state={i.state == props.state} index={id}>
          {i.label}
        </WebStateButton>
      ))}
    </WebState>
  );
};

const WebState = styled.div`
  display: flex;
  position: relative;
  height: 54px;
  flex-direction: row;
  align-items: center;
  margin-left: 156px;
  overflow: visible;
  @media screen and (max-width: 920px) {
    height: 108px;
  }
`;
const WebStateButton = styled.div<{ state: boolean; index: number }>`
  display: flex;
  position: absolute;
  background: ${(props) =>
    props.state ? customColor.blue : customColor.white + "66"};
  padding: 6px;
  width: 54px;
  height: 54px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  box-shadow: 1px 2px 4px 0px ${customColor.black + "22"};
  color: ${(props) => (props.state ? customColor.indigo3 : customColor.gray)};
  font-size: 11px;
  word-break: keep-all;
  letter-spacing: -0.5px;
  left: ${(props) => props.index * 66}px;
  @media screen and (max-width: 920px) {
    left: ${(props) => props.index * 36}px;
    top: ${(props) => (props.index % 2 == 0 ? 0 : 54)}px;
  }
`;
