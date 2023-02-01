import styled from "styled-components";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { customColor } from "../../customColor";

interface Props {
  placeholder: string;
  value: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export const FormInput = (props: Props) => {
  return (
    <>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        {...props.register(props.value)}
      ></Input>
      {props.errors[props.value] && <>{props.value}오류</>}
    </>
  );
};

const Input = styled.input`
  font-size: 16px;
  color: ${customColor.black};
  border: none;
  background: transparent;
  width: 100%;
  outline: none;
  ::placeholder {
    color: ${customColor.darkGray};
  }
`;
