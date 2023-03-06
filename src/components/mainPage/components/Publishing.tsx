import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { customColor } from "../../customColor";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { ImBook } from "react-icons/im";

export const Publishing = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  return (
    <Wrapper id="publishing" ref={ref}>
      <Title className={inView ? "publishing" : "publishing1"}>
        #퍼블리싱
        <Explain className={inView ? "publishing" : "publishing1"}>
          <DoubleQuotesL />
          초기 디자인을 토대로 웹페이지의 외적인 요소들을 만듭니다
          <DoubleQuotesR />
        </Explain>
      </Title>
      <WrapperInner>
        <Header>
          <ImBook color={customColor.blue} />
          2022-12-12
        </Header>
        <Body>
          <BodyLeft>
            <BodyInner></BodyInner>
          </BodyLeft>
          <BodyRight>
            <BodyInner></BodyInner>
          </BodyRight>
        </Body>
      </WrapperInner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .publishing {
    opacity: 1;
  }
  .publishing1 {
    opacity: 0;
  }
  .publishing2 {
    opacity: 0;
    transform: translate(-20px, 12px);
  }
  .publishing2_ {
    opacity: 0;
    transform: translate(20px, 12px);
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.5px;
  transition: all 0.8s ease;
  white-space: nowrap;
  padding: 0 60px;
`;
const Explain = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: normal;
  line-height: 26px;
  letter-spacing: -0.5px;
  white-space: pre-wrap;
  word-break: keep-all;
  text-align: center;
  transition: all 0.6s ease 0.3s;
  padding: 12px 8px;
  margin: 40px 20px 20px auto;
`;
const DoubleQuotesL = styled(RiDoubleQuotesL)`
  display: flex;
  position: absolute;
  top: 0;
  left: -24px;
`;
const DoubleQuotesR = styled(RiDoubleQuotesR)`
  display: flex;
  position: absolute;
  top: 0;
  right: -24px;
`;
const WrapperInner = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  aspect-ratio: 16/9;
  background: #eee;
  overflow: hidden;
`;
const Header = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  height: 7%;
  width: 100%;
  background: #eee;
  box-shadow: 0px -1px 8px 2px ${customColor.black + "33"},
    0px 4px 12px 3px ${customColor.white};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  color: ${customColor.darkGray};
  font-size: 14px;
  gap: 6px;
  z-index: 1;
`;
const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding-top: 4%;
`;
const BodyLeft = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background: #eee;
  padding: 16px;
  padding-right: 10px;
`;
const BodyRight = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background: #eee;
  padding: 16px;
  padding-left: 10px;
`;
const BodyInner = styled.div`
  background: #eee;
  width: 100%;
  height: 100%;
  box-shadow: -2px 4px 8px 2px ${customColor.black + "33"},
    2px -4px 8px 2px ${customColor.white};
  border-radius: 16px;
`;
