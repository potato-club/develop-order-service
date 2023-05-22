import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { customColor } from "../../customColor";

interface Props {
  name: string;
  value: boolean;
  setValue: (value: boolean) => void;
}
interface ButtonProps {
  isValue: boolean;
  isFocus: boolean;
}

export const OptionButton = ({ name, value, setValue }: Props) => {
  const [isFocus, setIsFocus] = useState(false);
  const onChangeOptionInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== ("0" && "")) {
      setValue(true);
    } else {
      setValue(false);
    }
  };
  return (
    <Wrapper
      onMouseEnter={() => setIsFocus(true)}
      onMouseLeave={() => setIsFocus(false)}
    >
      {name}
      <OptionButtonState isFocus={isFocus} isValue={value}>
        {(isFocus || value) && (
          <OptionInput type="number" onChange={(e) => onChangeOptionInput(e)} />
        )}
      </OptionButtonState>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  flex-direction: row;
  color: ${customColor.lightGray};
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const OptionButtonState = styled.div<ButtonProps>`
  display: flex;
  width: ${(props) => (props.isFocus || props.isValue ? "40px" : "18px")};
  height: 18px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.isValue ? customColor.blue : customColor.indigo3};
  border: 1px solid ${customColor.blue_};
  transition: all ease 0.3s;
  /* overflow: hidden; */
`;
const OptionInput = styled.input`
  display: flex;
  width: 40px;
  background: none;
  outline: none;
  border: none;
  padding: 0 6px;
  font-size: 12px;
  color: ${customColor.black};
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
