import { useEffect } from "react";
import styled from "styled-components";
import { customColor } from "../customColor";
import { SignUpAddInfo } from "./SignUpAddInfo";
import { SignUpSiteInfo } from "./SignUpSiteInfo";
import { SignUpUserInfo } from "./SignUpUserInfo";
import Router from "next/router";
import { useQueryGetSignUpDetail } from "../../hooks/query/adminSignUp/useQueryGetSignUpDetail";

export const AdminDetailPage = () => {
  const { id } = Router.query;
  const { isLoading, data } = useQueryGetSignUpDetail(Number(id));

  return (
    <Wrapper>
      <WrapperInner>
        <Division />
        <SignUpUserInfo
          name={data?.name}
          email={data?.email}
          hotLine={data?.hotLine}
          subLine={data?.subLine}
        />
        <SignUpSiteInfo
          siteName={data?.siteName}
          purpose={data?.purpose}
          owner={data?.owner}
        />
        <SignUpAddInfo
          mainColor={data?.mainColor}
          subColor={data?.subColor}
          page={data?.page}
          login={data?.login}
          database={data?.database}
          etc={data?.etc}
          meeting={data?.meeting}
        />
      </WrapperInner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: auto;
  padding: 16px 28px 28px 28px;
  color: ${customColor.white};
  gap: 12px;
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
