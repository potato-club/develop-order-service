import styled from "styled-components";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { customColor } from "../../customColor";
import { Error } from "./Error";

interface Props {
  placeholder: string;
  value: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  required: boolean;
}

export const FormNumber = (props: Props) => {
  return (
    <Wrapper>
      <Input
        type="number"
        max="99"
        min="1"
        placeholder={props.placeholder}
        {...props.register(props.value, {
          required: props.required,
        })}
      />
      {props.errors[props.value] && <Error />}
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
const Input = styled.input`
  display: flex;
  font-size: 16px;
  width: 100%;
  height: 100%;
  color: ${customColor.black};
  background: transparent;
  outline: none;
  border: none;
  letter-spacing: -0.5px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::placeholder {
    color: ${customColor.gray};
  }
`;
