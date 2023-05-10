import styled from "styled-components";
import { customColor } from "../../customColor";

export const ModifyOrderItem = () => {
  return (
    <Wrapper>
      <Thumbnail />
      <WebInfo>
        <WebName>Develop-Order-Service</WebName>
        <WebInfoInner>
          <WebPurpose>웹사이트 발주를 위한 사이트</WebPurpose>
          <WebOrderer>조금주</WebOrderer>
          <WebPeriod>2023-05-10 ~</WebPeriod>
        </WebInfoInner>
      </WebInfo>
    </Wrapper>
  );
};

const Wrapper = styled.article`
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
  width: 240px;
  height: 135px;
`;
const WebInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  gap: 16px;
`;
const WebName = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
const WebInfoInner = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  gap: 8px;
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
