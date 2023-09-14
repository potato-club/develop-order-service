import styled from "styled-components";
import { useQueryGetMySignUp } from "../../../../hooks/query/signUp/useQueryGetMySignUp";

export const SignUpContainer = () => {
  const { isLoading, data } = useQueryGetMySignUp();
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20% 0;
`;
