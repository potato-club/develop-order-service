import styled from "styled-components";
import { customColor } from "../../customColor";
import { RiErrorWarningFill } from "react-icons/ri";

export const Error = () => {
  return (
    <Wrapper>
      <RiErrorWarningFill size={14} />
      정보를 입력해주세요
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  font-size: 12px;
  color: ${customColor.darkGray};
  gap: 0 2px;
  letter-spacing: -0.5px;
  background: ${customColor.lightGray};
  padding-right: 20px;
  white-space: nowrap;
`;
