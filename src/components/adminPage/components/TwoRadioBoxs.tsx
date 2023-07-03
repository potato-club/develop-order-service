import styled from "styled-components";
import { customColor } from "../../customColor";

interface Props {
  value1: string;
  value2: string;
  data: boolean | null;
}

export const TwoRadioBoxs = (props: Props) => {
  return (
    <Wrapper>
      <Box>
        <RadioBoxs>
          <RadioBox
            type="radio"
            disabled
            checked={props.data !== null && props.data}
          />
          {props.value1}
        </RadioBoxs>
        <RadioBoxs>
          <RadioBox
            type="radio"
            disabled
            checked={props.data !== null && !props.data}
          />
          {props.value2}
        </RadioBoxs>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 0 4px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 24px;
  align-items: center;
  justify-content: center;
`;
const RadioBoxs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 6px;
  font-size: 16px;
  color: ${customColor.lightGray};
  letter-spacing: -0.5px;
  align-items: center;
  justify-content: center;
`;
const RadioBox = styled.input`
  display: flex;
  position: relative;
  border: 1px solid ${customColor.darkGray};
  border-radius: 4px;
  width: 18px;
  height: 18px;
  outline: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  :checked:after {
    display: flex;
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background: ${customColor.white};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2px;
  }
`;
