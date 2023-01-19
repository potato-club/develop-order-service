import styled from "styled-components";
import { customColor } from "../../customColor";

export const MenuButtons = () => {
  return (
    <Wrapper>
      <Button>발주신청</Button>
      <Button>발주현황</Button>
      <Button>직원정보</Button>
      <LastButton>후기</LastButton>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 40px;
`;
const Button = styled.button`
  display: flex;
  position: relative;
  background: transparent;
  border: none;
  color: ${customColor.white};
  font-size: 14px;
  &:after {
    display: flex;
    position: absolute;
    content: "";
    width: 1px;
    height: 14px;
    background: ${customColor.white + "88"};
    right: -20px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;
const LastButton = styled.div`
  display: flex;
  position: relative;
  background: transparent;
  border: none;
  color: ${customColor.white};
  font-size: 14px;
`;
