import styled, { css, keyframes } from "styled-components";
import { AiFillQuestionCircle } from "react-icons/ai";
import { customColor } from "../../customColor";
import { useEffect, useRef, useState } from "react";

interface Props {
  content: string;
  width: number;
}
interface PropsStyle {
  isHover: boolean;
  width: number;
  isOver?: boolean;
  dif?: number;
}

export const QuestionLabel = ({ content, width }: Props) => {
  const w = useRef<HTMLElement>(null);
  const t = useRef<HTMLParagraphElement>(null);
  const [isHover, setIsHover] = useState(false);
  const [isOver, setIsOver] = useState<boolean>();
  const [dif, setDif] = useState<number>();
  useEffect(() => {
    setIsOver(w.current!.offsetWidth < t.current!.offsetWidth + 23);
    isOver && setDif(t.current!.offsetWidth - w.current!.offsetWidth + 23);
  }, [w.current, t.current]);
  return (
    <Wrapper ref={w}>
      <Content isHover={isHover} width={width}>
        <ContentInner>
          <Text
            isHover={isHover}
            width={width}
            isOver={isOver}
            dif={dif}
            ref={t}
          >
            {content}
          </Text>
        </ContentInner>
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

const moveText = (dif: number) => keyframes`
  15% {
    transform: translate(0,0);
  }
  90% {
    
    transform: translate(-${dif + 8}px,0);
  }
  100%{ transform: translate(-${dif + 8}px,0);}
`;
const Wrapper = styled.article`
  display: flex;
  position: relative;
  width: 100%;
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
  max-width: calc(100% - 14px);
  top: 50%;
  left: 9px;
  transform: translate(0, -50%);
  white-space: nowrap;
  align-items: center;
  padding: ${(props) => props.isHover && "0 4px 0 10px"};
  overflow: hidden;
  transition: all 0.4s ease;
`;
const ContentInner = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: center;
`;
const Text = styled.p<PropsStyle>`
  display: flex;
  position: absolute;
  right: 0;
  letter-spacing: -0.5px;
  font-size: 12px;
  left: 0;
  width: max-content;
  ${(props) =>
    props.isHover &&
    props.isOver &&
    css`
      animation: ${moveText(props.dif || 0)} ${(props.dif! + 20) / 30}s linear
        infinite;
    `};
`;
