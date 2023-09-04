import styled from "styled-components";
import { useQueryGetSignUps } from "../../../hooks/query/adminSignUp/useQueryGetSignUps";
import { SignUpItem } from "./SignUpItem";

export const SignUpItemListCheck = () => {
  const { isLoading, data } = useQueryGetSignUps(true);
  return (
    <>
      {!isLoading &&
        data?.map((i, id) => <SignUpItem data={i} key={id} isNew={false} />)}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
