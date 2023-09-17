import Image from "next/image";
import { useRecoilValue } from "recoil";
import { userInformation } from "../../../recoil/userInfo";
import styled from "styled-components";
import { customColor } from "../../customColor";
import Router from "next/router";
import { TbWorld } from "react-icons/tb";
import { pathName } from "../../../config/pathName";

export const SideMenuBar = (props: {
  currentMenu: "order" | "likes" | "withdrawal";
}) => {
  const userInfo = useRecoilValue(userInformation);

  return (
    <Wrapper>
      <UserInfoBox>
        <WWW />
        <UserInfo>
          <Image
            src={userInfo.picture}
            alt={""}
            width="160"
            height="160"
            style={{ objectFit: "cover", borderRadius: 80 }}
          />
          <UserName>
            <b>{userInfo.name}</b>님 안녕하세요
          </UserName>
          <UserEmail>{userInfo.email}</UserEmail>
        </UserInfo>
      </UserInfoBox>{" "}
      <MenuBox>
        <MenuButton
          onClick={() => Router.replace(pathName.MY_ORDER)}
          isCurrentMenu={props.currentMenu === "order"}
        >
          내 발주현황
        </MenuButton>
        <MenuButton
          onClick={() => Router.replace(pathName.MY_LIKES)}
          isCurrentMenu={props.currentMenu === "likes"}
        >
          내 좋아요
        </MenuButton>
        <MenuButton
          onClick={() => Router.replace(pathName.MY_WITHDRAWAL)}
          isCurrentMenu={props.currentMenu === "withdrawal"}
        >
          회원탈퇴
        </MenuButton>
        <MenuBar />
      </MenuBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 240px;
  width: fit-content;
  min-height: 100%;
  box-shadow: 4px 0px 4px ${customColor.black + "16"};
  justify-content: space-between;
  padding: 28px 20px;
  gap: 32px;
`;
const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 224px;
  justify-content: space-between;
  gap: 20px;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 0;
  align-items: center;
`;
const UserName = styled.div`
  display: flex;
  color: ${customColor.black};
  font-size: 24px;
  white-space: nowrap;
  margin-top: 20px;
  align-items: center;
`;
const UserEmail = styled.div`
  display: flex;
  width: 100%;
  color: ${customColor.gray};
  font-size: 12px;
  align-items: flex-start;
  font-weight: normal;
`;
const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: fit-content;
  width: 100%;
  padding: 10px 20px 10px 0;
  align-items: flex-end;
  gap: 28px;
`;
const MenuBar = styled.div`
  display: flex;
  position: absolute;
  width: 3px;
  height: 100%;
  top: 0;
  right: 0px;
  border-radius: 2px;
  background: ${customColor.blue};
`;
const MenuButton = styled.button<{ isCurrentMenu: boolean }>`
  display: flex;
  font-size: 16px;
  font-weight: ${(props) => (props.isCurrentMenu ? "bold" : "normal")};
  color: ${(props) =>
    props.isCurrentMenu ? customColor.black : customColor.darkGray};
  transition: all ease 0.2s;
`;
const WWW = styled(TbWorld)`
  position: absolute;
  color: ${customColor.lightGray};
  font-size: 260px;
  top: 0%;
  opacity: 0.6;
  transform: translate(-80px, 0);
`;
