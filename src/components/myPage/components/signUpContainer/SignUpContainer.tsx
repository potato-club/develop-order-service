import styled from "styled-components";
import { useQueryGetMySignUp } from "../../../../hooks/query/user/useQueryGetMySignUp";
import { SignUpItem } from "./components/SignUpItem";

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
`;
