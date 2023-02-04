import styled from "styled-components";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { customColor } from "../../customColor";
import { Error } from "./Error";

interface Props {
  placeholder: string;
  value: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  required: boolean;
}

export const FormNumber = (props: Props) => {
  return (
    <Wrapper>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        {...props.register(props.value, {
          required: `${props.required}`,
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
  flex: auto;
  font-size: 16px;
  color: ${customColor.black};
  border: none;
  background: transparent;
  outline: none;
  letter-spacing: -0.5px;
  ::placeholder {
    color: ${customColor.darkGray};
  }
`;
