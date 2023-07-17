import styled from "styled-components";
import { customColor } from "../../customColor";

interface Props {
  data: string[];
}
interface BoxProps {
  colorValue: string;
}

export const ColorPalette = ({ data }: Props) => {
  return (
    <Wrapper>
      <Box>
        <ColorList>
          {data.map((i, id) => {
            return (
              <ColorBox key={id}>
                {i}
                <ColorInput>
                  <ColorInputValue colorValue={i} />
                </ColorInput>
              </ColorBox>
            );
          })}
        </ColorList>
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
  overflow-x: auto;
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const ColorList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ColorBox = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-right: 26px;
  width: 94px;
  height: 26px;
  border: 1px solid ${customColor.darkGray};
  border-radius: 4px;
  padding-right: 28px;
  padding-left: 5px;
  font-size: 14px;
  align-items: center;
`;
const ColorInput = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 24px;
  right: 1px;
  top: 50%;
  transform: translate(0, -50%);
  border-left: 1px solid ${customColor.darkGray};
  padding-left: 1px;
  align-items: center;
  justify-content: center;
`;
const ColorInputValue = styled.div<BoxProps>`
  height: 18px;
  width: 18px;
  background: ${(props) => props.colorValue};
  border-radius: 2px;
`;
