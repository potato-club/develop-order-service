import Image from "next/image";
import styled from "styled-components";
import { customColor } from "../../customColor";

export const Title = () => {
  return (
    <Wrapper>
      <LeftTitle>
        당신의 웹 페이지를 원하시나요?
        <Content>
          <Bar />
          <ContentInner>
            <Text>
              사업을 위한 웹 페이지, 개인을 위한 웹 페이지,
              <br />
              취미나 활동 기록을 위한 웹 페이지
            </Text>
            <Text>
              <BlueText>DOS</BlueText>에서 다양한 용도의 웹사이트를
              만들어드려요!
            </Text>
          </ContentInner>
        </Content>
      </LeftTitle>
      <RightTitle>
        <Image
          src={"/img/main/website.png"}
          alt="website"
          width={140}
          height={140}
        />
      </RightTitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 130px 20px;
`;
const LeftTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  font-size: 24px;
  font-weight: bold;
  height: 100%;
  letter-spacing: -0.5px;
`;
const RightTitle = styled.div`
  display: flex;
  @media (max-width: 767px) {
    display: none;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 12px;
  height: 100%;
  align-items: center;
`;
const Bar = styled.div`
  width: 2px;
  height: calc(100% + 8px);
  background: ${customColor.gray};
`;
const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Text = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 22px;
  font-weight: normal;
  letter-spacing: -0.5px;
`;
const BlueText = styled.div`
  color: ${customColor.blue};
  font-weight: bold;
  padding-right: 2px;
`;
