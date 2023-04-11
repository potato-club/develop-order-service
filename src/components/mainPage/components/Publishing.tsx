import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { customColor } from "../../customColor";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { ImBook } from "react-icons/im";
import Image from "next/image";

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
      <WrapperInner className={inView ? "publishing" : "publishing1"}>
        <Header className={inView ? "publishing" : "publishing1"}>
          <ImBook color={customColor.blue} size={16} />
          XXXX-XX-XX
        </Header>
        <Body>
          <BodyLeft className={inView ? "publishing" : "publishing2"}>
            <BodyInner>
              <Image
                src="/img/main/publishingLeft.png"
                fill
                style={{ objectFit: "cover" }}
                alt="publishingLeft"
              />
              <Date>XXXX년 XX월 XX일</Date>
            </BodyInner>
          </BodyLeft>
          <BodyRight className={inView ? "publishing" : "publishing2"}>
            <BodyInner>
              <Image
                src="/img/main/publishingRight.png"
                fill
                style={{ objectFit: "cover" }}
                alt="publishingRight"
              />
              <Date style={{ right: 20 }}>XXXX년 XX월 XX일</Date>
            </BodyInner>
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
  max-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 80px 0 0;
  .publishing {
    opacity: 1;
  }
  .publishing1 {
    opacity: 0;
  }
  .publishing2 {
    opacity: 0;
    transform: translate(0, 12px);
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
  margin: 20px 20px 12px auto;
`;
const DoubleQuotesL = styled(RiDoubleQuotesL)`
  display: flex;
  position: absolute;
  top: 12px;
  left: -20px;
`;
const DoubleQuotesR = styled(RiDoubleQuotesR)`
  display: flex;
  position: absolute;
  top: 12px;
  right: -20px;
`;
const WrapperInner = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  aspect-ratio: 16/9;
  background: #eee;
  overflow: hidden;
  transition: all 0.6s ease 0.6s;
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
  transition: all 0.6s ease 0.9s;
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
  transition: all 0.6s ease 1.2s;
`;
const BodyRight = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background: #eee;
  padding: 16px;
  padding-left: 10px;
  transition: all 0.6s ease 1.4s;
`;
const BodyInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #eee;
  width: 100%;
  height: 100%;
  box-shadow: -2px 4px 8px 2px ${customColor.black + "33"},
    2px -4px 8px 2px ${customColor.white};
  border-radius: 16px;
  overflow: hidden;
  padding: 24px 20px;
`;
const Date = styled.div`
  display: flex;
  position: absolute;
  font-size: 16px;
  font-weight: bold;
`;
