import styled from "styled-components";
import { customColor } from "../../customColor";
import { MdChatBubble } from "react-icons/md";

interface Props {
  content: string;
}

export const LeftTalkBubble = ({ content }: Props) => {
  return (
    <Talk>
      {content}
      <BubbleIcon />
      <Content>{content}</Content>
    </Talk>
  );
};

const Talk = styled.div`
  display: flex;
  position: relative;
  background: ${customColor.indigo3};
  color: ${customColor.indigo3};
  max-width: 100%;
  padding: 20px;
  border-radius: 4px;
  letter-spacing: -0.5px;
  box-shadow: -2px 4px 4px 0px ${customColor.black + "33"};
`;
const Content = styled.div`
  display: flex;
  position: absolute;
  color: ${customColor.white};
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  padding: 20px;
  transform: translate(-50%, -50%);
  border-radius: 4px;
`;
const BubbleIcon = styled(MdChatBubble)`
  position: absolute;
  bottom: -0px;
  left: -15px;
  font-size: 60px;
  color: ${customColor.indigo3};
  transform: rotate(-90deg) scaleY(-1);
  filter: drop-shadow(-4px 2px 2px ${customColor.black + "33"});
`;
