import Router from "next/router";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import { pathName } from "../../config/adminPathName";
import { customColor } from "../customColor";
import { MdLogout } from "react-icons/md";
import { logout, tokenService } from "../../libs/tokenService";

interface MenuProps {
  isPath: boolean;
}

export const AdminHeader = () => {
  useEffect(() => {
    if (tokenService.getRole() !== "ADMIN") {
      handleLogout();
    }
  }, []);

  const handleLogout = () => {
    logout();
    localStorage.setItem("prevPath", Router.asPath.replace(/\/\d+$/, ""));
    Router.push(pathName.LOGIN);
  };

  return (
    <Wrapper>
      <WrapperInner>
        <MenuButton
          isPath={
            Router.asPath.replace(/\/\d+$/, "") === pathName.CHECK_SIGNUP.LIST
          }
          onClick={() => Router.replace(pathName.CHECK_SIGNUP.LIST)}
        >
          발주신청확인
        </MenuButton>
        <MenuButton
          isPath={Router.pathname.includes(pathName.MODIFY_ORDER.LIST)}
          onClick={() => Router.replace(pathName.MODIFY_ORDER.LIST)}
        >
          발주상태·내용수정
        </MenuButton>
        <MenuButton
          isPath={Router.pathname === pathName.SCHEDULE}
          onClick={() => Router.replace(pathName.SCHEDULE)}
        >
          직원정보수정
        </MenuButton>
        <MenuButton isPath={false}>통계추출</MenuButton>
      </WrapperInner>
      {tokenService.getToken() !== null && (
        <Logout onClick={handleLogout}>
          로그아웃
          <LogoutIcon />
        </Logout>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px 32px;
  justify-content: space-between;
`;
const WrapperInner = styled.div`
  display: flex;
  flex-direction: row;
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
const Logout = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${customColor.gray};
  font-size: 14px;
`;
const LogoutIcon = styled(MdLogout)`
  display: flex;
`;
