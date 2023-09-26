import styled from "styled-components";
import Router from "next/router";
import { customColor } from "../../../../customColor";
import { SignUpUserInfo } from "./SignUpUserInfo";
import { SignUpSiteInfo } from "./SignUpSiteInfo";
import { SignUpAddInfo } from "./SignUpAddInfo";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BiLink } from "react-icons/bi";
import { OrderState } from "./OrderState";

export const SignUpItem = (props: {
  data: any;
  orderId: number;
  orderState:
    | "CHECK"
    | "START"
    | "DESIGN"
    | "PUBLISH"
    | "IMPLEMENT"
    | "FINAL"
    | "COMPLETED";
}) => {
  const [isFold, setIsFold] = useState(true);
  return (
    <Wrapper onClick={() => setIsFold(!isFold)} isFold={isFold}>
      <WrapperInner>
        <Division />
        <OrderState state={props.orderState} />
        <SignUpSiteInfo
          siteName={props.data["siteName"]}
          purpose={props.data["purpose"]}
          owner={props.data["owner"]}
        />
        {isFold && (
          <DetailText>
            <IoIosArrowDown size={16} />
            자세한 정보는 클릭하여 볼 수 있습니다
          </DetailText>
        )}
        <>
          <SignUpUserInfo
            name={props.data["clientName"]}
            email={props.data["email"]}
            hotLine={props.data["hotLine"]}
            subLine={props.data["subLine"]}
          />
          <SignUpAddInfo
            mainColor={props.data["mainColor"]}
            subColor={props.data["subColor"]}
            page={props.data["page"]}
            login={props.data["login"]}
            database={props.data["database"]}
            files={props.data["files"]}
            etc={props.data["etc"]}
            meeting={props.data["meeting"]}
          />
        </>
        {props.orderState != "CHECK" && (
          <LinkButton
            onClick={() => Router.push(`/orderDetail?id=${props.orderId}`)}
          >
            <BiLink size={14} />
            발주현황
          </LinkButton>
        )}
      </WrapperInner>
    </Wrapper>
  );
};

const Wrapper = styled.button<{ isFold: boolean }>`
  display: flex;
  flex-direction: column;
  flex: auto;
  width: 100%;
  height: ${(props) => (props.isFold ? 362 : 1229)}px;
  color: ${customColor.white};
  overflow-y: hidden;
  scroll-behavior: smooth;
  transition: height 0.6s ease;
  background: ${customColor.lightGray};
  box-shadow: inset 2px 3px 6px 2px ${customColor.black + "22"};
  border-radius: 4px;
  @media screen and (max-width: 920px) {
    height: ${(props) => (props.isFold ? 409 : 1276)}px;
  }
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
  padding: 20px 32px;
  width: 100%;
  gap: 20px 0;
`;
const Division = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  width: 2px;
  height: 100%;
  background: ${customColor.darkGray};
  border-radius: 1px;
  left: 168px;
  top: 50%;
  transform: translate(0, -50%);
`;
const DetailText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  animation: moveText 1s infinite;
  color: ${customColor.gray};
  letter-spacing: -0.5px;
  font-size: 12px;
  gap: 2px;
  @keyframes moveText {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(4px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
const LinkButton = styled.button`
  display: flex;
  position: absolute;
  color: ${customColor.lightGray};
  top: 20px;
  left: 0px;
  padding: 10px 16px 10px 12px;
  font-size: 12px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background: ${customColor.indigo3};
  box-shadow: 1px 2px 2px 0px ${customColor.black + "33"};
  align-items: center;
  gap: 2px;
`;
