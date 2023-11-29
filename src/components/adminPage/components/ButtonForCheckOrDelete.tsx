import { useState } from "react";
import styled from "styled-components";
import { useMutationDeleteSignUp } from "../../../hooks/query/adminSignUp/useMutationDeleteSignUp";
import { useMutationPutCheckSignUp } from "../../../hooks/query/adminSignUp/useMutationPutCheckSignUp";
import { customColor } from "../../customColor";
import { Modal } from "../../modal/modal";

export const ButtonForCheckOrDelete = (props: {
  id: string | string[] | undefined;
  isNew: boolean;
}) => {
  const mutationCheckSignUp = useMutationPutCheckSignUp(Number(props.id));
  const mutationDeleteSignUp = useMutationDeleteSignUp(Number(props.id));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <Wrapper>
      <Modal
        content={
          isSubmit
            ? "발주신청을 수락하시겠습니까?"
            : "발주신청을 취소하시겠습니까?"
        }
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        yesEventFunc={() =>
          isSubmit
            ? mutationCheckSignUp.mutate()
            : mutationDeleteSignUp.mutate()
        }
      />
      <DeleteButton
        onClick={() => {
          setIsSubmit(false);
          setIsModalOpen(true);
        }}
      >
        신청취소
      </DeleteButton>
      {props.isNew && (
        <CheckButton
          onClick={() => {
            setIsSubmit(true);
            setIsModalOpen(true);
          }}
        >
          신청접수
        </CheckButton>
      )}
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
