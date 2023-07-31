import styled from "styled-components";
import { useQueryGetSignUps } from "../../../hooks/query/adminSignUp/useQueryGetSignUps";
import { SignUpItem } from "./SignUpItem";

export const SignUpItemListUncheck = () => {
  const { isLoading, data } = useQueryGetSignUps(false);
  return (
    <>{!isLoading && data?.map((i, id) => <SignUpItem data={i} key={id} />)}</>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
