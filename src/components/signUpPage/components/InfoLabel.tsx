import styled from "styled-components";
import { customColor } from "../../customColor";

interface Props {
  content: string;
}
export const InfoLabel = ({ content }: Props) => {
  return (
    <Wrapper>
      <Content>{content}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  position: absolute;
  bottom: -2px;
  right: 20px;
  transform: translate(0, 100%);
`;
const Content = styled.p`
  font-size: 12px;
  color: ${customColor.darkGray};
`;
