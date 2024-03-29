import styled from "styled-components";
import { customColor } from "../../../../customColor";
interface Props {
  data: "COMPANY" | "PUBLIC" | "PERSONAL" | null;
}

export const OrdererRadioBoxs = ({ data }: Props) => {
  return (
    <Wrapper>
      <Box>
        <RadioBoxs>
          <RadioBox>
            <CheckBox checked={data == "COMPANY"} />
          </RadioBox>
          회사
        </RadioBoxs>
        <RadioBoxs>
          <RadioBox>
            <CheckBox checked={data == "PUBLIC"} />
          </RadioBox>
          공공단체
        </RadioBoxs>
        <RadioBoxs>
          <RadioBox>
            <CheckBox checked={data == "PERSONAL"} />
          </RadioBox>
          개인
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
  gap: 0 20px;
  align-items: center;
  justify-content: center;
`;
const RadioBoxs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 4px;
  font-size: 14px;
  color: ${customColor.lightGray};
  letter-spacing: -0.5px;
  align-items: center;
  justify-content: center;
`;
const RadioBox = styled.div`
  display: flex;
  position: relative;
  border: 1px solid ${customColor.lightGray};
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
