import styled from "styled-components";
import { customColor } from "../../customColor";
import { IoDocumentTextOutline } from "react-icons/io5";
import Router from "next/router";
import { pathName } from "../../../config/adminPathName";

export interface ResponseType {
  clientName: string;
  createdDate: string;
  id: number;
  purpose: string;
  siteName: string;
}
export interface Props {
  data: ResponseType;
  isNew: boolean;
}

export const SignUpItem = ({ data, isNew }: Props) => {
  const handleRouteDetail = (id: number) => {
    Router.push({
      pathname: `${pathName.CHECK_SIGNUP.DETAIL.replace(":id", String(id))}`,
      query: { isNew: isNew },
    });
  };

  return (
    <Wrapper onClick={() => handleRouteDetail(data.id)}>
      <Name>
        <DocumentIcon />
        <Highlighting>{data.clientName}</Highlighting>님의 발주신청
      </Name>
      <SiteInfo>
        <SiteName>{data.siteName}</SiteName>
        <SitePurpose>{data.purpose}</SitePurpose>
      </SiteInfo>
      <ID>ID {data.id}</ID>
      <Date>{data.createdDate}</Date>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${customColor.indigo3};
  padding: 18px;
  gap: 12px;
`;
const DocumentIcon = styled(IoDocumentTextOutline)`
  font-size: 28px;
  margin-right: 4px;
  color: ${customColor.lightGray};
`;
const Name = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 4px;
  color: ${customColor.gray};
  font-size: 16px;
`;
const Highlighting = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${customColor.white};
`;

const SiteInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  align-items: flex-end;
  margin-bottom: 10px;
  margin-left: 36px;
`;
const SiteName = styled.p`
  font-size: 20px;
  color: ${customColor.blue};
`;
const SitePurpose = styled.p`
  color: ${customColor.lightGray};
  font-size: 16px;
`;
const ID = styled.p`
  display: flex;
  position: absolute;
  color: ${customColor.gray};
  font-size: 12px;
  top: 10px;
  right: 14px;
`;
const Date = styled.p`
  display: flex;
  position: absolute;
  color: ${customColor.gray};
  font-size: 12px;
  bottom: 10px;
  right: 14px;
`;
