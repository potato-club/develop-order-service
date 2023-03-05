import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Image from "next/image";
import { customColor } from "../../customColor";
import { LeftTalkBubble } from "./LeftTalkBubble";
import { RightTalkBubble } from "./RightTalkBubble";
import { IoSquareSharp } from "react-icons/io5";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export const DesignMeeting = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  return (
    <Wrapper id="design_meeting" ref={ref}>
      <Title className={inView ? "design_meeting" : "design_meeting1"}>
        #디자인 미팅
        <Explain className={inView ? "design_meeting" : "design_meeting2"}>
          <DoubleQuotesL />
          디자이너와의 상담을 통해 웹의 전체적인 디자인을 구체적으로 구성합니다
          <DoubleQuotesR />
        </Explain>
      </Title>
      <Conversation>
        <ConversationLeftInner
          className={inView ? "design_meeting" : "design_meeting2"}
        >
          <LeftTalkBubble content="어떤 목적의 사이트인가요?" />
          <LeftTalkBubble content="좋아요! 생각해두신 사이트의 대표색이 있을까요?" />
        </ConversationLeftInner>
        <ConversationRightInner
          className={inView ? "design_meeting" : "design_meeting2_"}
        >
          <RightTalkBubble content="동글동글하고 귀여운 느낌의 사이트를 만들고 싶어요!" />
          <RightTalkBubble content="저만의 다이어리 사이트를 생각하고 있어요" />
          <ExColor>
            <ExPhotoImg
              className={inView ? "design_meeting" : "design_meeting3_"}
            >
              <Image
                src="/img/main/ex-photo.jpg"
                alt="ex-photo"
                width={260}
                height={260}
              />
            </ExPhotoImg>
            <RightTalkBubble content="#91D8F7 색상이 좋을 것 같아요" />
            <RightTalkBubble content="#91D8F7 이런 느낌으로 원하고 있어요!" />
            <ExColorIcon
              className={inView ? "design_meeting" : "design_meeting3"}
            />
          </ExColor>
        </ConversationRightInner>
      </Conversation>
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
  padding: 0 60px;
  gap: 40px;
  .design_meeting {
    opacity: 1;
  }
  .design_meeting1 {
    opacity: 0;
  }
  .design_meeting2 {
    opacity: 0;
    transform: translate(-20px, 12px);
  }
  .design_meeting2_ {
    opacity: 0;
    transform: translate(20px, 12px);
  }
  .design_meeting3 {
    opacity: 0;
    transform: translate(10px, 6px);
  }
  .design_meeting3_ {
    opacity: 0;
    transform: translate(calc(-100% + 10px), 6px);
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
`;
const Conversation = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: center;
`;
const ConversationLeftInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 40px;
  padding-top: 45px;
  align-items: flex-start;
  transition: all 0.6s ease 0.6s;
`;
const ConversationRightInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-end;
  width: 50%;
  gap: 40px;
  transition: all 0.6s ease 0.6s;
`;
const ExColor = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 180px;
  gap: 12px;
  align-items: flex-end;
`;
const ExColorIcon = styled(IoSquareSharp)`
  display: flex;
  position: absolute;
  color: ${customColor.blue};
  top: -10px;
  right: 218px;
  font-size: 32px;
  transform: rotate(10deg);
  filter: drop-shadow(1px 1px 2px ${customColor.black + "33"});
  transition: all 0.6s ease 0.9s;
`;
const ExPhotoImg = styled.div`
  display: flex;
  position: absolute;
  top: 50px;
  left: 90px;
  transform: translateX(-100%);
  transition: all 0.6s ease 0.9s;
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
  margin: 20px 20px 20px auto;
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
