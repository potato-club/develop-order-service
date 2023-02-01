import styled from "styled-components";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { customColor } from "../customColor";
import { HiOutlineUser } from "react-icons/hi";
import { FormInput } from "./components/FormInput";

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export const SignUpUserInfo = ({ register, errors }: Props) => {
  return (
    <Content>
      <Lbel>
        <HiOutlineUser size={20} />
        신청자 정보
      </Lbel>
      <Form>
        <FormItem>
          <FormItemLabel>
            *성함 또는 회사명(단체명)
            <EssentialInfo>*는 필수로 적어야하는 정보입니다</EssentialInfo>
          </FormItemLabel>
          <FormItemContent>
            <FormInput
              placeholder="김도스 또는 (주)도스"
              value="userName"
              type="text"
              register={register}
              errors={errors}
            />
          </FormItemContent>
        </FormItem>
        <FormItem>
          <FormItemLabel>*이메일</FormItemLabel>
          <FormItemContent>
            <FormInput
              placeholder="develop-order-service@gmail.com"
              value="userEmail"
              type="email"
              register={register}
              errors={errors}
            />
          </FormItemContent>
        </FormItem>
        <FormItem>
          <FormItemLabel>*전화번호1</FormItemLabel>
          <FormItemContent>
            <FormInput
              placeholder="김도스 또는 (주)도스"
              value="userName"
              type="text"
              register={register}
              errors={errors}
            />
          </FormItemContent>
        </FormItem>
        <FormItem>
          <FormItemLabel>전화번호2</FormItemLabel>
          <FormItemContent>
            <FormInput
              placeholder="김도스 또는 (주)도스"
              value="userName"
              type="text"
              register={register}
              errors={errors}
            />
          </FormItemContent>
        </FormItem>
      </Form>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 16px;
  width: 100%;
  align-items: flex-start;
`;
const Lbel = styled.p`
  display: flex;
  width: 156px;
  font-size: 18px;
  color: ${customColor.black};
  letter-spacing: -0.5px;
  font-weight: bold;
  gap: 0 4px;
  align-items: center;
  justify-content: flex-end;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px 0;
  flex: auto;
  padding-top: 36px;
`;
const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px 0;
`;
const FormItemLabel = styled.div`
  display: flex;
  font-size: 16px;
  color: ${customColor.black};
  letter-spacing: -0.5px;
  padding-left: 12px;
  justify-content: space-between;
  align-items: flex-end;
`;
const EssentialInfo = styled.p`
  display: flex;
  font-size: 12px;
  color: ${customColor.black};
  letter-spacing: -0.5px;
  padding-right: 20px;
`;
const FormItemContent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${customColor.lightGray};
  min-height: 38px;
  width: 100%;
  align-items: center;
  padding-left: 32px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
`;
