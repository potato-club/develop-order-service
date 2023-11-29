import styled from "styled-components";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormWatch,
} from "react-hook-form";
import PhoneInput from "react-phone-number-input/react-hook-form-input";
import { customColor } from "../../customColor";
import { Error } from "./Error";

interface Props {
  placeholder: string;
  value: string;
  control: Control<FieldValues, any>;
  errors: FieldErrors<FieldValues>;
  required: boolean;
  watch: UseFormWatch<FieldValues>;
}

export const FormPhone = (props: Props) => {
  return (
    <Wrapper>
      <Placeholder show={props.watch(props.value) == null}>
        {props.placeholder}
      </Placeholder>
      <Input
        country="KR"
        control={props.control}
        name={props.value}
        rules={{ required: props.required }}
      />
      {props.errors[props.value] && <Error />}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  position: relative;
  width: 100%;
`;
const Placeholder = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: absolute;
  letter-spacing: -0.5px;
  color: ${customColor.gray};
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
`;
