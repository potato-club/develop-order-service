import styled from "styled-components";
import { useMutationDeleteSignUp } from "../../../hooks/query/adminSignUp/useMutationDeleteSignUp";
import { useMutationPutCheckSignUp } from "../../../hooks/query/adminSignUp/useMutationPutCheckSignUp";
import { customColor } from "../../customColor";

export const ButtonForCheckOrDelete = (props: {
  id: string | string[] | undefined;
}) => {
  const mutationCheckSignUp = useMutationPutCheckSignUp(Number(props.id));
  const mutationDeleteSignUp = useMutationDeleteSignUp(Number(props.id));
  return (
    <Wrapper>
      <DeleteButton onClick={() => mutationDeleteSignUp.mutate()}>
        신청취소
      </DeleteButton>
      <CheckButton onClick={() => mutationCheckSignUp.mutate()}>
        신청접수
      </CheckButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 200px;
  justify-content: center;
  gap: 20%;
`;

const DeleteButton = styled.button`
  display: flex;
  min-width: 240px;
  height: 68px;
  background: ${customColor.red + "66"};
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${customColor.lightGray};
  border-radius: 2px;
`;
const CheckButton = styled.button`
  display: flex;
  min-width: 240px;
  height: 68px;
  background: ${customColor.blue + "77"};
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${customColor.lightGray};
  border-radius: 2px;
`;
