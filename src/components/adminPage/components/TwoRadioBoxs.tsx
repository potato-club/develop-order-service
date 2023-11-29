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
          <RadioBox>
            <CheckBox checked={props.data !== null && props.data} />
          </RadioBox>
          {props.value1}
        </RadioBoxs>
        <RadioBoxs>
          <RadioBox>
            <CheckBox checked={props.data !== null && !props.data} />
          </RadioBox>
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
const RadioBox = styled.div`
  display: flex;
  position: relative;
  border: 1px solid ${customColor.darkGray};
  border-radius: 4px;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
`;
const CheckBox = styled.div<{ checked: boolean }>`
  display: flex;
  background: ${(props) => (props.checked ? customColor.white : "transparent")};
  width: 10px;
  height: 10px;
`;
