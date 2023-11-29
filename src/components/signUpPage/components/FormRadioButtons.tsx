import styled from "styled-components";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { customColor } from "../../customColor";
import { Error_ } from "./Error_";

interface Props {
  name1: string;
  name2: string;
  name3?: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  required: boolean;
  value1: string;
  value2: string;
  value3?: string;
}

export const FormRadioButtons = (props: Props) => {
  return (
    <Wrapper>
      <Box>
        <RadioButtons>
          <RadioButton
            {...props.register(props.name, {
              required: props.required,
            })}
            type="radio"
            value={props.value1}
          />
          {props.name1}
        </RadioButtons>
        <RadioButtons>
          <RadioButton
            {...props.register(props.name, {
              required: props.required,
            })}
            type="radio"
            value={props.value2}
          />
          {props.name2}
        </RadioButtons>
        {props.name3 && (
          <RadioButtons>
            <RadioButton
              {...props.register(props.name, {
                required: props.required,
              })}
              type="radio"
              value={props.value3}
            />
            {props.name3}
          </RadioButtons>
        )}
      </Box>
      {props.errors[props.name] && <Error_ />}
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
const RadioButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 6px;
  font-size: 16px;
  color: ${customColor.black};
  letter-spacing: -0.5px;
  align-items: center;
  justify-content: center;
`;
const RadioButton = styled.input`
  display: flex;
  position: relative;
  border: 1px solid ${customColor.darkGray};
  border-radius: 4px;
  width: 18px;
  height: 18px;
  outline: none;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  :checked:after {
    display: flex;
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background: ${customColor.black};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2px;
  }
`;
