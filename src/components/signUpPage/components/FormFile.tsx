import styled from "styled-components";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { customColor } from "../../customColor";
import { Error } from "./Error";
import { TbFileSearch } from "react-icons/tb";

interface Props {
  value: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  required: boolean;
}

export const FormFile = (props: Props) => {
  return (
    <Wrapper>
      <FileIcon />
      <Input
        type="file"
        multiple
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
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 0 4px;
`;
const Input = styled.input`
  display: flex;
  flex: auto;
  height: 24px;
  padding: 4px 0;
  font-size: 16px;
  color: ${customColor.black};
  border: none;
  background: transparent;
  outline: none;
  letter-spacing: -0.5px;
  align-items: center;
  justify-content: center;
  &::file-selector-button {
    font-size: 0%;
    width: 24px;
    height: 24px;
    border: none;
    margin-right: 4px;
    align-items: center;
    justify-content: center;
    :hover,
    :active {
      background: none;
      border: none;
    }
  }
`;
const FileIcon = styled(TbFileSearch)`
  position: absolute;
  font-size: 20px;
  color: ${customColor.black + "aa"};
  pointer-events: none;
`;
