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

export const FormTextarea = (props: Props) => {
  return (
    <Wrapper>
      <Textarea
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
  height: 112px;
  align-items: center;
  justify-content: space-between;
  gap: 0 4px;
  padding: 8px 0;
`;
const Textarea = styled.textarea`
  display: flex;
  flex: auto;
  height: 100%;
  font-size: 16px;
  color: ${customColor.black};
  border: none;
  background: transparent;
  outline: none;
  letter-spacing: -0.5px;
  resize: none;
  overflow: overlay;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 14px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${customColor.indigo3 + "99"};
    border-radius: 10px;
    background-clip: padding-box;
    border: 4px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-button:start:decrement,
  &::-webkit-scrollbar-button:end:increment {
    background-color: transparent;
    height: 8px;
  }
  ::placeholder {
    color: ${customColor.gray};
  }
`;
