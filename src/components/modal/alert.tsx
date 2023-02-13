import styled from "styled-components";
import { customColor } from "../customColor";

interface Props {
  content: string;
  isOpen: boolean;
  closeModal: () => void;
}
interface StyleProps {
  isOpen: boolean;
}

export const Alert = ({ content, isOpen, closeModal }: Props) => {
  return (
    <Wrapper isOpen={isOpen}>
      <Content>{content}</Content>
      <Button onClick={closeModal}>닫기</Button>
    </Wrapper>
  );
};

const Wrapper = styled.article<StyleProps>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  box-shadow: 1px 2px 4px 2px ${customColor.black + "33"};
  background: ${customColor.white};
  width: 320px;
  height: 180px;
  padding: 40px 60px 20px;
  align-items: center;
  justify-content: space-around;
  left: 50%;
  top: 20px;
  transform: translate(-50%, 0);
  z-index: 50;
`;
const Content = styled.p`
  font-size: 16px;
  letter-spacing: -0.5px;
`;
const Button = styled.button`
  display: flex;
  width: 100px;
  height: 32px;
  background: ${customColor.indigo3};
  color: ${customColor.white};
  font-size: 13px;
  letter-spacing: -0.3px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
