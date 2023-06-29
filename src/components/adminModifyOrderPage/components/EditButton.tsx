import styled from "styled-components";
import { customColor } from "../../customColor";
import { MdEdit, MdCheck } from "react-icons/md";

interface Props {
  onClick?: () => void;
  isEdit: boolean;
}

export const EditButton = ({ onClick, isEdit }: Props) => {
  return (
    <Wrapper onClick={onClick}>
      <EditButtonWrapper>
        {isEdit ? "저장하기" : "수정하기"}
        {isEdit ? <SaveIcon /> : <EditIcon />}
      </EditButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1;
`;
const EditButtonWrapper = styled.div`
  display: flex;
  position: relative;
  background: ${customColor.indigo3};
  color: ${customColor.white};
  padding: 16px 24px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 30px;
  border: 1px solid ${customColor.white};
`;
const EditIcon = styled(MdEdit)`
  display: flex;
  position: absolute;
  top: 0;
  right: 4px;
  font-size: 24px;
  transform: translateY(-10px);
  filter: drop-shadow(2px 2px 0px ${customColor.black + "44"});
`;
const SaveIcon = styled(MdCheck)`
  display: flex;
  position: absolute;
  top: 0;
  right: 4px;
  font-size: 26px;
  transform: translateY(-10px);
  filter: drop-shadow(2px 2px 0px ${customColor.black + "44"});
`;
