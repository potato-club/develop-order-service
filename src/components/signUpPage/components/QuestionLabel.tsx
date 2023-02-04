import styled from "styled-components";
import { AiFillQuestionCircle } from "react-icons/ai";
import { customColor } from "../../customColor";
import { useState } from "react";

interface Props {
  content: string;
  width: number;
}
interface PropsStyle {
  isHover: boolean;
  width: number;
}

export const QuestionLabel = ({ content, width }: Props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Wrapper>
      <Content isHover={isHover} width={width}>
        {content}
      </Content>
      <Icon
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <AiFillQuestionCircle size={18} />
      </Icon>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  position: relative;
`;
const Icon = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  color: ${customColor.blue};
  background: ${customColor.lightGray};
  border-radius: 10px;
`;
const Content = styled.div<PropsStyle>`
  display: flex;
  position: absolute;
  background: ${customColor.lightGray};
  height: 16px;
  width: ${(props) => (props.isHover ? props.width : 0)}px;
  top: 50%;
  left: 9px;
  transform: translate(0, -50%);
  letter-spacing: -0.5px;
  font-size: 12px;
  white-space: nowrap;
  align-items: center;
  padding: ${(props) => props.isHover && "0 4px 0 10px"};
  overflow: hidden;
  transition: all 0.4s ease;
`;
