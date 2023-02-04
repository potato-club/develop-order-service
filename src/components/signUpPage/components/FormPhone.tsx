import styled from "styled-components";
import { Control, FieldErrors, FieldValues } from "react-hook-form";
import PhoneInput from "react-phone-number-input/react-hook-form-input";
import { customColor } from "../../customColor";
import { Error } from "./Error";

interface Props {
  placeholder: string;
  value: string;
  control: Control<FieldValues, any>;
  errors: FieldErrors<FieldValues>;
  required: boolean;
}

export const FormPhone = (props: Props) => {
  return (
    <Wrapper>
      <Input
        country="KR"
        control={props.control}
        name={props.value}
        rules={{ required: props.required }}
        placeholder={props.placeholder}
      />
      {props.errors[props.value] && <Error />}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  width: 100%;
`;
const Input = styled(PhoneInput)`
  display: flex;
  flex: auto;
  font-size: 16px;
  color: ${customColor.black};
  border: none;
  background: transparent;
  outline: none;
  letter-spacing: -0.5px;
  ::placeholder {
    color: ${customColor.gray};
  }
`;
