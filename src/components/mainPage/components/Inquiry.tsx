import React, { useState } from "react";
import styled from "styled-components";
import { useInquiry } from "../../../hooks/query/inquiry/useQueryGetInquiry";

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
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [isBoxExpanded, setIsBoxExpanded] = useState(false);
  const { questions, loadResponse } = useInquiry();
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [selectedQuestionMessage, setSelectedQuestionMessage] = useState<
    string | null
  >(null);
  const [selectedSubquestion, setSelectedSubquestion] = useState<string | null>(
    null
  );
  const [selectedSubquestionMessage, setSelectedSubquestionMessage] = useState<
    string | null
  >(null);
  const [responses, setResponses] = useState<ResponseData[]>([]);
  const [subResponses, setSubResponses] = useState<ResponseData[]>([]);

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
    setSelectedQuestionMessage(null);
    setSelectedSubquestion(null);
    setSelectedSubquestionMessage(null);
  };

  const handleQuestionClick = async (message: string) => {
    if (!message) {
      return;
    }
    try {
      const selectedQuestionData = questions.data.find(
        (question: ResponseData) => question.message === message
      );

      if (selectedQuestionData) {
        const responseKey = selectedQuestionData.responseKey;

        setSelectedQuestion(responseKey);
        setSelectedQuestionMessage(message);
        setSelectedSubquestion(null);
        setSelectedSubquestionMessage(null);

        const response = await loadResponse(responseKey);
        setResponses(response);
      }
    } catch (error) {
      console.error("Error fetching response: ", error);
    }
  };
  const handleSubquestionClick = async (message: string) => {
    if (!message) {
      return;
    }
    try {
      const selectedSubquestionData = responses.find(
        (question: ResponseData) => question.message === message
      );
      if (selectedSubquestionData) {
        const responseKey = selectedSubquestionData.responseKey;

        setSelectedSubquestion(responseKey);
        setSelectedSubquestionMessage(message);

        const response = await loadResponse(responseKey);
        setSubResponses(response);
      }
    } catch (error) {
      console.error("Error fetching response: ", error);
    }
  };

  return (
    <Wrapper>
      <CircleContainer
        onMouseEnter={toggleBoxVisible}
        onMouseLeave={toggleBoxVisible}
        onClick={handleBoxClick}
        expanded={isBoxExpanded}
        visible={isBoxVisible}
      >
        <Circle expanded={isBoxExpanded}>문의</Circle>
        <InquiryBox expanded={isBoxExpanded} visible={isBoxVisible}>
          {isBoxVisible && isBoxExpanded ? (
            <>
              <CloseButton onClick={handleCloseButtonClick}>X</CloseButton>
              <ReturnBtn>처음으로</ReturnBtn>
              <Div1>
                <p>문의하실 내용을 선택해주세요.</p>
                {questions.data &&
                  questions.data.map((question: any) => (
                    <div
                      key={question.message}
                      onClick={() => handleQuestionClick(question.message)}
                    >
                      <P>{question.message.split(":")[0]}</P>
                    </div>
                  ))}
              </Div1>
              <div>
                {selectedQuestionMessage && (
                  <Div2 key={selectedQuestion}>
                    <p>{selectedQuestionMessage.split(":")[1]}</p>
                  </Div2>
                )}
              </div>
              <QuestionDiv selectedQuestion={selectedQuestion}>
                {selectedQuestion &&
                  responses
                    .filter(
                      (response: ResponseData) =>
                        response.requestKey === selectedQuestion
                    )
                    .map((response: ResponseData) => (
                      <div
                        key={response.message}
                        onClick={() => handleSubquestionClick(response.message)}
                      >
                        <p>{response.message.split(":")[0]}</p>
                      </div>
                    ))}
              </QuestionDiv>
              <div>
                {selectedSubquestionMessage && (
                  <Div2 key={selectedSubquestion}>
                    <p>{selectedSubquestionMessage.split(":")[1]}</p>
                  </Div2>
                )}
              </div>
              <SubquestionDiv selectedSubquestion={selectedSubquestion}>
                {selectedSubquestion &&
                  subResponses
                    .filter(
                      (subResponse: ResponseData) =>
                        subResponse.requestKey === selectedSubquestion
                    )
                    .map((subResponse: ResponseData) => (
                      <div key={subResponse.requestKey}>
                        <p>{subResponse.message}</p>
                      </div>
                    ))}
              </SubquestionDiv>
            
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

const CircleContainer = styled.div<Props>``;

const Circle = styled.div<Props>`
  width: 68px;
  height: 68px;
  border-radius: 100%;
  background-color: rgb(145, 216, 247);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
  cursor: ${(props) => (props.expanded ? "" : "pointer")};
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
  padding: ${(props) => (props.expanded ? "20px" : "0px")};
  transition: width 0.3s, height 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.expanded ? "flex-start" : "center")};
  justify-content: ${(props) => (props.expanded ? "flex-start" : "center")};
  width: ${(props) => (props.visible ? "400px" : "0")};
  height: ${(props) => (props.expanded ? "400px" : "70px")};
  cursor: ${(props) => (props.expanded ? "" : "pointer")};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
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

const Div1 = styled.div`
  width: 215px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
`;
const P = styled.div`
  border-radius: 4px;
  background: var(--white, #fff);
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.15);
  display: flexbox;
  margin: 5px 0px 5px 0px;
  height: 20px;
  justify-content: center;
`;

const Div2 = styled.div`
  width: 215px;
  background-color: rgb(160, 222, 249);
  border-radius: 10px;
  padding: 10px;
  justify-content: flex-end;
  position: relative;
  left: 150px;
  margin-bottom: 20px;
`;

const QuestionDiv = styled.div<{ selectedQuestion: string | null }>`
  width: 215px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  display: ${(props) => (props.selectedQuestion ? "" : "none")};
  margin-bottom: 20px;
  justify-content: center;
`;

const SubquestionDiv = styled.div<{ selectedSubquestion: string | null }>`
  width: 215px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  display: ${(props) => (props.selectedSubquestion ? "" : "none")};
`;

const ReturnBtn = styled.div`
  width : 50px;
  height : 50px;
`