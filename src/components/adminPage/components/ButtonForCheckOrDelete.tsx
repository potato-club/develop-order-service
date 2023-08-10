import styled from "styled-components";
import { customColor } from "../../customColor";

export const ButtonForCheckOrDelete = () => {
  return (
    <Wrapper>
      <DeleteButton>신청취소</DeleteButton>
      <CheckButton>신청접수</CheckButton>
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
  min-width: 280px;
  height: 80px;
  background: ${customColor.red + "66"};
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${customColor.lightGray};
  border-radius: 2px;
  font-weight: bold;
`;
const CheckButton = styled.button`
  display: flex;
  min-width: 280px;
  height: 80px;
  background: ${customColor.blue + "99"};
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${customColor.black};
  border-radius: 2px;
  font-weight: bold;
`;
