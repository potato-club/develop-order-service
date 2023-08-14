import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  expanded: boolean;
  visible?: boolean;
}

interface Message {
  content: string;
  isUser: boolean;
}

const questions = [
  {
    question: "1. 발주 단계",
    answer: "단계요? 그런건 없습니다",
  },
  {
    question: "2. 발주신청 비용",
    answer: "단돈 1351억 !",
  },
  {
    question: "3. 발주신청 취소",
    answer: "올때는 마음데로 였지만, 갈 때는 아니랍니다",
  },
  {
    question: "4. 전화상담",
    answer: "언제든 전화주세요",
  },
];

const Inquiry: React.FC = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [isBoxExpanded, setIsBoxExpanded] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);

  const toggleBoxVisible = () => {
    if (isBoxVisible && isBoxExpanded) {
      return;
    }
    setIsBoxVisible(!isBoxVisible);
  };

  const handleBoxClick = () => {
    if (isBoxVisible && isBoxExpanded) {
      return;
    }
    setIsBoxExpanded(!isBoxExpanded);
  };

  const handleCloseButtonClick = () => {
    setIsBoxVisible(false);
    setIsBoxExpanded(false);
    setSelectedQuestion(null);
    setChatMessages([]);
  };

  const handleQuestionSelect = (index: number) => {
    setSelectedQuestion(index);
    const selectedQuestionMessage: Message = {
      content: questions[index].question,
      isUser: true,
    };
    setChatMessages((prevMessages) => [
      ...prevMessages,
      selectedQuestionMessage,
    ]);
  };

  const handleInquiryBoxMouseLeave = () => {
    if (isBoxVisible && isBoxExpanded) {
      return;
    }
    setIsBoxVisible(false);
    setIsBoxExpanded(false);
  };

  return (
    <Wrapper>
      <CircleContainer
        onMouseEnter={toggleBoxVisible}
        onMouseLeave={handleInquiryBoxMouseLeave}
        onClick={handleBoxClick}
        expanded={isBoxExpanded}
        visible={isBoxVisible}
      >
        <Circle expanded={isBoxExpanded}>문의</Circle>
        <InquiryBox expanded={isBoxExpanded} visible={isBoxVisible}>
          {isBoxVisible && isBoxExpanded ? (
            <>
              <CloseButton onClick={handleCloseButtonClick}>X</CloseButton>
              {selectedQuestion !== null ? (
                <>
                  <ChatWrapper>
                    <ChatContainer>
                      {chatMessages.map((message, index) => (
                        <ChatBubble key={index} isUser={message.isUser}>
                          {message.content}
                        </ChatBubble>
                      ))}
                    </ChatContainer>
                  </ChatWrapper>
                  <Answer isUser>{questions[selectedQuestion].answer}</Answer>
                </>
              ) : (
                <ChatWrapper>
                  <ChatContainer>
                    {questions.map((question, index) => (
                      <Question
                        key={index}
                        onClick={() => handleQuestionSelect(index)}
                      >
                        {question.question}
                      </Question>
                    ))}
                  </ChatContainer>
                </ChatWrapper>
              )}
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
  bottom: 60px;
  left: 300px;
  z-index: 100;
`;

const CircleContainer = styled.div<Props>`
  cursor: pointer;
`;

const Circle = styled.div<Props>`
  width: 68px;
  height: 68px;
  border-radius: 100%;
  background-color: rgb(145, 216, 247);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: ${(props) => (props.expanded ? "330px" : "0px")};
`;

const InquiryBox = styled.div<Props>`
  position: absolute;
  bottom: -40px;
  left: 40px;
  height: 100%;
  background-color: rgb(236, 236, 236);
  border-radius: 20px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.visible ? "270px" : "0")};
  height: ${(props) => (props.expanded ? "400px" : "70px")};
`;

const ChatWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

const ChatBubble = styled.div<{ isUser: boolean }>`
  background-color: ${(props) => (props.isUser ? "#f0f0f0" : "#d1e8ff")};
  border-radius: 10px;
  padding: 8px 12px;
  margin: 4px;
  max-width: 80%;
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
`;

const Answer = styled.div<{ isUser: boolean }>`
  background-color: ${(props) => (props.isUser ? "#f0f0f0" : "#d1e8ff")};
  border-radius: 10px;
  padding: 8px 12px;
  margin: 4px;
  max-width: 80%;
  align-self: flex-end;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 16px;
`;

const Question = styled.div``;
