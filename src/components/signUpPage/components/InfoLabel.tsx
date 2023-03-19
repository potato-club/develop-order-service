import styled from "styled-components";
import { customColor } from "../../customColor";

interface Props {
  content: string;
  content2?: string;
}
export const InfoLabel = ({ content, content2 }: Props) => {
  return (
    <Wrapper>
      <Content>
        {content}
        {content2 && <br />}
        {content2}
      </Content>
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
  display: flex;
  font-size: 12px;
  color: ${customColor.darkGray};
  text-align: end;
`;
