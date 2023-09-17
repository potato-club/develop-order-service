import styled from "styled-components";
import { IoDocumentTextOutline } from "react-icons/io5";
import Router from "next/router";
import { customColor } from "../../../../customColor";
import { MySignUpType } from "../../../../../hooks/query/user/useQueryGetMySignUp";
import { SignUpUserInfo } from "./SignUpUserInfo";
import { SignUpSiteInfo } from "./SignUpSiteInfo";
import { SignUpAddInfo } from "./SignUpAddInfo";

export const SignUpItem = (props: { data: MySignUpType }) => {
  const handleRouteDetail = (id: number) => {
    // Router.push({
    //   pathname: `${pathName.CHECK_SIGNUP.DETAIL.replace(":id", String(id))}`,
    // });
  };

  return (
    <Wrapper>
      <WrapperInner>
        <Division />
        {/* <SignUpUserInfo
          name={props.data.clientName}
          email={props.data.}
          hotLine={data?.hotLine}
          subLine={data?.subLine}
          isLoading={isLoading}
        />
        <SignUpSiteInfo
          siteName={data?.siteName}
          purpose={data?.purpose}
          owner={data?.owner}
          isLoading={isLoading}
        />
        <SignUpAddInfo
          mainColor={data?.mainColor}
          subColor={data?.subColor}
          page={data?.page}
          login={data?.login}
          database={data?.database}
          files={data?.files}
          etc={data?.etc}
          meeting={data?.meeting}
          isLoading={isLoading}
        /> */}
      </WrapperInner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: auto;
  padding: 16px 28px 160px 28px;
  color: ${customColor.white};
  gap: 80px;
  overflow-y: overlay;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    width: 14px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${customColor.gray};
    border-radius: 10px;
    background-clip: padding-box;
    border: 4px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-button:start:decrement {
    background-color: transparent;
    height: 12px;
  }
  ::-webkit-scrollbar-button:end:increment {
    background-color: transparent;
    height: 24px;
  }
`;
const WrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 8px 76px;
  width: 100%;
  gap: 56px 0;
`;
const Division = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  width: 2px;
  height: 100%;
  background: ${customColor.darkGray};
  border-radius: 1px;
  left: 212px;
  top: 50%;
  transform: translate(0, -50%);
`;
