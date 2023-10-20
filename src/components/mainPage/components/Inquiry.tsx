import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { PiWechatLogo } from "react-icons/pi";
import { LuMinimize2 } from "react-icons/lu";
import { useInquiry } from "../../../hooks/query/inquiry/useQueryGetInquiry";
import { useRecoilState } from "recoil";
import { inquiryLog } from "../../../recoil/inquiryLog";

interface Props {
  expanded: boolean;
  visible?: boolean;
}
interface ResponseData {
  requestKey: string;
  message: string;
  responseKey: string;
}

const Inquiry: React.FC = () => {
  const [log, setLog] = useRecoilState(inquiryLog);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const { questions, loadResponse } = useInquiry();
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [isBoxExpanded, setIsBoxExpanded] = useState(false);

  const toggleBoxVisible = (visible: boolean) => {
    !isBoxExpanded && setIsBoxVisible(visible);
  };
  const handleBoxClick = () => {
    !isBoxExpanded && setIsBoxExpanded(!isBoxExpanded);
  };

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [log]);

  const handleQuestionClick = async (data: any) => {
    setLog((prev) => [
      ...prev,
      { type: "A", content: data.message.split(":")[1] },
    ]);
    const response = await loadResponse(data.responseKey);
    if (response.length > 1) {
      setLog((prev) => [
        ...prev,
        { type: "Q", content: "", questions: response },
      ]);
    } else {
      setLog((prev) => [...prev, { type: "Q", content: response[0].message }]);
    }
  };
  const handleInitQuestion = async (data: any) => {
    setLog((prev) => [
      ...prev,
      {
        type: "Q_i",
        content: "문의하실 내용을 선택해주세요.",
        questions: questions.data,
      },
    ]);
  };

  return (
    <Wrapper>
      <CircleContainer
        onMouseEnter={() => toggleBoxVisible(true)}
        onMouseLeave={() => toggleBoxVisible(false)}
        onClick={handleBoxClick}
      >
        <Circle expanded={isBoxExpanded} visible={isBoxVisible}>
          {isBoxExpanded ? (
            <LuMinimize2
              onClick={() => setIsBoxExpanded(false)}
              style={{ width: "100%", height: "100%", padding: "22px" }}
            />
          ) : (
            <>
              <PiWechatLogo size={24} />
              문의
            </>
          )}
        </Circle>
        <InquiryBox
          expanded={isBoxExpanded}
          visible={isBoxVisible}
          ref={scrollContainerRef}
        >
          {isBoxVisible && isBoxExpanded ? (
            <>
              <Div1>
                문의하실 내용을 선택해주세요.
                {questions.data &&
                  questions.data.map((item: any, id: number) => (
                    <QuestionButton
                      key={id}
                      onClick={() => handleQuestionClick(item)}
                    >
                      {item.message.split(":")[0]}
                    </QuestionButton>
                  ))}
              </Div1>
              {log.map((item, id) => {
                if (item.type.includes("Q")) {
                  return (
                    <Div1 key={id}>
                      {item.content}
                      {item.questions &&
                        item.questions.map((i: ResponseData, id: number) => {
                          return (
                            <QuestionButton
                              key={id}
                              onClick={() => handleQuestionClick(i)}
                            >
                              {i.message.split(":")[0]}
                            </QuestionButton>
                          );
                        })}
                    </Div1>
                  );
                } else {
                  return <Div2 key={id}>{item["content"]}</Div2>;
                }
              })}
              {log.length > 1 && log[log.length]?.content != "Q_i" && (
                <Div3>
                  <QuestionButton onClick={handleInitQuestion}>
                    처음으로
                  </QuestionButton>
                </Div3>
              )}

              <EndBox ref={endRef}></EndBox>
            </>
          ) : (
            "문의할 내용이 있으신가요?"
          )}
        </InquiryBox>
      </CircleContainer>
    </Wrapper>
  );
};

export default Inquiry;

const Wrapper = styled.div`
  position: fixed;
  bottom: 28px;
  right: calc(50% - 476px);
  z-index: 100;
  @media screen and (max-width: 1024px) {
    right: 28px;
  }
`;

const CircleContainer = styled.div``;

const Circle = styled.div<Props>`
  width: 68px;
  height: 68px;
  border-radius: 100%;
  background-color: rgb(145, 216, 247);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
  font-weight: bold;
  font-size: 14px;
  box-shadow: 1px 1px 4px 0px #00000033;
  cursor: ${(props) => (props.expanded ? "" : "pointer")};
  animation: ${(props) =>
    !props.visible && !props.expanded && "shake 10s ease infinite"};
  @keyframes shake {
    90% {
      transform: rotate(0deg);
    }
    92.3% {
      transform: rotate(30deg);
    }
    94.5% {
      transform: rotate(-10deg);
    }
    95.8% {
      transform: rotate(18deg);
    }
    97% {
      transform: rotate(-7deg);
    }
    97.5% {
      transform: rotate(7deg);
    }
    98% {
      transform: rotate(0deg);
    }
  }
`;

const InquiryBox = styled.div<Props>`
  position: absolute;
  bottom: 8px;
  right: 12px;
  height: 100%;
  background-color: rgb(236, 236, 236);
  box-shadow: 1px 1px 4px 0px #00000033;
  border-radius: 20px;
  padding: ${(props) => (props.expanded ? "20px 16px" : "0px")};
  transition: all 0.4s ease, scroll-behavior 0.5s;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.expanded ? "flex-start" : "center")};
  justify-content: ${(props) => (props.expanded ? "flex-start" : "center")};
  width: ${(props) => (props.visible ? "300px" : "0")};
  height: ${(props) => (props.expanded ? "400px" : "52px")};
  cursor: ${(props) => (props.expanded ? "" : "pointer")};
  padding-right: ${(props) => !props.expanded && props.visible && "32px"};
  gap: 16px;
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: ${(props) => (props.expanded ? "normal" : "nowrap")};
  font-size: 14px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 215px;
  background-color: white;
  border-radius: 8px;
  padding: 8px;
  gap: 4px;
  align-self: flex-start;
`;
const QuestionButton = styled.button`
  display: flex;
  border-radius: 4px;
  background: var(--white, #fff);
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.15);
  height: 24px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 12px;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 215px;
  background-color: rgb(160, 222, 249);
  border-radius: 8px;
  padding: 8px;
  justify-content: flex-end;
  align-self: flex-end;
`;

const EndBox = styled.div`
  display: flex;
  height: 0px;
  width: 100%;
`;
const Div3 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 215px;
  background-color: white;
  border-radius: 8px;
  padding: 8px;
  gap: 8px;
  align-self: flex-start;
`;
