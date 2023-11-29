import styled from "styled-components";
import { customColor } from "../customColor";

export const FooterCompany = () => {
  return (
    <Wrapper>
      <WrapperInner>
        <Content>
          <CompanyName>DOS</CompanyName>
          <CompanyInfo>
            <Info>
              DOS ㈜어쩌고 저쩌고 사업자등록 어쩌고 저쩌고 101-23-45667
              통신판매신고 2023-01-12
            </Info>
            <CompanyInfo_>
              <Info>
                개인정보보호책임자 : 아무개 서울시 어디구 어디동 24, 21층
              </Info>
              <Division />
              <Info>고객만족센터 1588-1111</Info>
            </CompanyInfo_>
            <CompanyInfo_>
              <Info>Tel. 032-532-1234</Info>
              <Division />
              <Info>Email. rmawn3245@naver.com</Info>
            </CompanyInfo_>
          </CompanyInfo>
        </Content>
      </WrapperInner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 130px;
  align-items: center;
  background: ${customColor.indigo1};
`;
const WrapperInner = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
  padding: 40px 20px;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 32px;
`;
const CompanyName = styled.span`
  display: flex;
  font-size: 14px;
  font-weight: bold;
  color: ${customColor.gray};
`;
const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  color: ${customColor.gray};
  gap: 6px 0;
`;
const CompanyInfo_ = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Info = styled.p`
  display: flex;
`;
const Division = styled.div`
  display: flex;
  width: 1px;
  height: 8px;
  background: ${customColor.gray};
  margin: 0 6px;
`;
