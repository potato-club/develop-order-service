import Router from "next/router";
import styled from "styled-components";
import { pathName } from "../../../config/adminPathName";
import { customColor } from "../../customColor";

interface StateProps {
  isComplete: boolean;
}

export const ModifyOrderItem = () => {
  const WebStateValue = [
    "디자인 회의",
    "퍼블리싱",
    "페이지 기능 구현",
    "최종 수정",
  ];
  const TestStateValue = 1;

  const handleRouteDetail = (id: number) => {
    Router.push(`${pathName.MODIFY_ORDER.DETAIL.replace(":id", String(id))}`);
  };

  return (
    <Wrapper onClick={() => handleRouteDetail(1)}>
      <Thumbnail />
      <WebInfo>
        <WebName>Develop-Order-Service</WebName>
        <WebInfoInner>
          <WebPurpose>웹사이트 발주를 위한 사이트</WebPurpose>
          <WebOrderer>조금주</WebOrderer>
          <WebPeriod>2023-05-10 ~</WebPeriod>
          <WebState>
            {WebStateValue.map((i, id) => (
              <WebStateButton key={i} isComplete={id === TestStateValue}>
                {i}
              </WebStateButton>
            ))}
          </WebState>
        </WebInfoInner>
      </WebInfo>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 12px 20px;
  background: ${customColor.indigo3};
  gap: 20px;
`;
const Thumbnail = styled.div`
  display: flex;
  background: ${customColor.blue};
  width: 320px;
  height: 180px;
`;
const WebInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 0;
  gap: 16px;
`;
const WebName = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${customColor.white};
`;
const WebInfoInner = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  gap: 8px;
  align-items: flex-start;
  border-left: 1px solid ${customColor.gray};
`;
const WebPurpose = styled.p`
  color: ${customColor.lightGray};
  font-size: 14px;
`;
const WebOrderer = styled.p`
  font-size: 14px;
  color: ${customColor.lightGray};
`;
const WebPeriod = styled.p`
  font-size: 12px;
  color: ${customColor.gray};
`;
const WebState = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-top: 4px;
`;
const WebStateButton = styled.div<StateProps>`
  display: flex;
  background: ${(props) =>
    props.isComplete ? customColor.blue : customColor.indigo1};
  padding: 6px;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  color: ${(props) =>
    props.isComplete ? customColor.black : customColor.darkGray};
  font-size: 10px;
  word-break: keep-all;
`;
