import styled, { css } from "styled-components";
import { customColor } from "../customColor";

interface MenuProps {
  isPath: boolean;
}

export const AdminHeader = () => {
  return (
    <Wrapper>
      <MenuButton isPath={true}>발주신청확인</MenuButton>
      <MenuButton isPath={false}>발주상태·내용수정</MenuButton>
      <MenuButton isPath={false}>직원정보수정</MenuButton>
      <MenuButton isPath={false}>통계추출</MenuButton>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px 32px;
  gap: 40px;
`;
const MenuButton = styled.button<MenuProps>`
  display: flex;
  font-size: 16px;
  color: ${customColor.gray};
  ${(props) =>
    props.isPath &&
    css`
      transform: translate(0, -2px);
      color: ${customColor.white};
      font-weight: bold;
      text-decoration: underline;
      text-underline-offset: 6px;
      text-decoration-color: ${customColor.blue};
      text-decoration-thickness: 2px;
    `}
`;
