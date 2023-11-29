import styled from "styled-components";
import { CgWebsite } from "react-icons/cg";
import { customColor } from "../../../../customColor";
import { OrdererRadioBoxs } from "./OrdererRadioBoxs";

interface Props {
  siteName: string | undefined;
  purpose: string | undefined;
  owner: "COMPANY" | "PERSONAL" | "PUBLIC" | undefined;
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
            <OrdererRadioBoxs data={props.owner!} />
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
  min-width: 120px;
  height: 21px;
  font-size: 18px;
  color: ${customColor.black};
  letter-spacing: -0.5px;
  font-weight: bold;
  gap: 0 4px;
  align-items: center;
  justify-content: flex-end;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  flex: auto;
  padding-top: 12px;
`;
const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px 0;
`;
const BoxItemLabel = styled.div`
  display: flex;
  font-size: 14px;
  color: ${customColor.indigo3};
  letter-spacing: -0.5px;
  padding-left: 12px;
  justify-content: space-between;
  align-items: flex-end;
  white-space: nowrap;
`;
const BoxItemContent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${customColor.darkGray};
  min-height: 38px;
  width: 100%;
  align-items: center;
  padding-left: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
`;
