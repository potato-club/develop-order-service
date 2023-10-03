import styled from "styled-components";
import { useQueryGetMySignUp } from "../../../../hooks/query/user/useQueryGetMySignUp";
import { customColor } from "../../../customColor";
import { SignUpItem } from "./components/SignUpItem";
import { BsQuestionCircle } from "react-icons/bs";

export const SignUpContainer = () => {
  const { isLoading, data } = useQueryGetMySignUp();
  return (
    <Wrapper>
      {!isLoading &&
        data?.map((i, id) => (
          <SignUpItem
            data={i.orderDto}
            orderId={i.orderId}
            orderState={i.state}
            key={id}
          />
        ))}
      {data?.length == 0 && (
        <NullBox>
          <QuestionIcon />
          고객님이 신청하신 발주가 없거나, <br />
          진행되고 있는 고객님의 발주가 없습니다
        </NullBox>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 60px;
  padding: 60px 44px;
  justify-content: center;
`;
const NullBox = styled.div`
  display: flex;
  flex-direction: row;
  background: ${customColor.lightGray};
  padding: 28px;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 16px;
  border-radius: 4px;
  box-shadow: inset 2px 3px 6px 0px ${customColor.black + "22"};
  border-bottom: 6px solid ${customColor.gray};
`;
const QuestionIcon = styled(BsQuestionCircle)`
  font-size: 22px;
  animation: shake 1.8s ease infinite;
  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    23% {
      transform: rotate(45deg);
    }
    45% {
      transform: rotate(-15deg);
    }
    58% {
      transform: rotate(25deg);
    }
    70% {
      transform: rotate(-10deg);
    }
    75% {
      transform: rotate(10deg);
    }
    80% {
      transform: rotate(0deg);
    }
  }
`;
