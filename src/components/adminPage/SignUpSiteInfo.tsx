import styled from "styled-components";
import { CgWebsite } from "react-icons/cg";
import { customColor } from "../customColor";
import { OrdererRadioBoxs } from "./components/OrdererRadioBoxs";

interface Props {
  siteName: string | undefined;
  purpose: string | undefined;
  owner: "COMPANY" | "PERSONAL" | "PUBLIC" | undefined;
  isLoading: boolean;
}

export const SignUpSiteInfo = (props: Props) => {
  return (
    <Content>
      <Label>
        <CgWebsite size={20} />
        웹사이트 정보
      </Label>
      <Box>
        <BoxItem>
          <BoxItemLabel>*사이트 이름</BoxItemLabel>
          <BoxItemContent>{props.siteName}</BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>*사이트 목적</BoxItemLabel>
          <BoxItemContent>{props.purpose}</BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>*사이트 운영자</BoxItemLabel>
          <BoxItemContent>
            <OrdererRadioBoxs data={props.isLoading ? null : props.owner!} />
          </BoxItemContent>
        </BoxItem>
      </Box>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 16px;
  width: 100%;
  align-items: flex-start;
`;
const Label = styled.p`
  display: flex;
  width: 120px;
  font-size: 18px;
  color: ${customColor.lightGray};
  letter-spacing: -0.5px;
  font-weight: bold;
  gap: 0 4px;
  align-items: center;
  justify-content: flex-end;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px 0;
  flex: auto;
  padding-top: 36px;
`;
const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px 0;
`;
const BoxItemLabel = styled.div`
  display: flex;
  font-size: 16px;
  color: ${customColor.gray};
  letter-spacing: -0.5px;
  padding-left: 12px;
  justify-content: space-between;
  align-items: flex-end;
  white-space: nowrap;
`;
const BoxItemContent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${customColor.indigo3};
  min-height: 38px;
  width: 100%;
  align-items: center;
  padding-left: 32px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
`;
