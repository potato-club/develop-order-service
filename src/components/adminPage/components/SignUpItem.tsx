import styled from "styled-components";
import { customColor } from "../../customColor";
import { IoDocumentTextOutline } from "react-icons/io5";
import Router from "next/router";
import { pathName } from "../../../config/adminPathName";

export const SignUpItem = () => {
  const handleRouteDetail = (id: number) => {
    Router.push(`${pathName.CHECK_SIGNUP.DETAIL.replace(":id", String(id))}`);
  };

  return (
    <Wrapper onClick={() => handleRouteDetail(1)}>
      <Name>
        <DocumentIcon />
        <Highlighting>김민주</Highlighting>님의 발주신청
      </Name>
      <SiteInfo>
        <SiteName>DOS</SiteName>
        <SitePurpose>발주신청을 위한 사이트</SitePurpose>
      </SiteInfo>
      <ID>ID 13532</ID>
      <Date>2023-05-03 16:12</Date>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${customColor.indigo3};
  padding: 20px;
  gap: 8px;
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
  padding: 0 8px 0 32px;
  gap: 8px;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 8px;
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
  top: 8px;
  right: 12px;
`;
const Date = styled.p`
  display: flex;
  position: absolute;
  color: ${customColor.gray};
  font-size: 12px;
  bottom: 12px;
  left: 18px;
`;
