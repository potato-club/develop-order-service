import styled from "styled-components";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { customColor } from "../customColor";
import { CgWebsite } from "react-icons/cg";
import { FormInput } from "./components/FormInput";
import { FormRadioButtons } from "./components/FormRadioButtons";

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export const SignUpSiteInfo = ({ register, errors }: Props) => {
  return (
    <Content>
      <Lbel>
        <CgWebsite size={20} />
        웹사이트 정보
      </Lbel>
      <Form>
        <FormItem>
          <FormItemLabel>
            *사이트 이름
            <EssentialInfo>*는 필수로 적어야하는 정보입니다</EssentialInfo>
          </FormItemLabel>
          <FormItemContent>
            <FormInput
              placeholder="DOS (Develop Order Service)"
              value="siteName"
              type="text"
              register={register}
              errors={errors}
              required={true}
            />
          </FormItemContent>
        </FormItem>
        <FormItem>
          <FormItemLabel>*사이트 목적</FormItemLabel>
          <FormItemContent>
            <FormInput
              placeholder="사람들에게 웹사이트 발주 신청을 받아 회사를 운영하기"
              value="sitePurpose"
              type="text"
              register={register}
              errors={errors}
              required={true}
            />
          </FormItemContent>
        </FormItem>
        <FormItem>
          <FormItemLabel>*사이트 운영자</FormItemLabel>
          <FormItemContent>
            <FormRadioButtons
              name1="회사"
              name2="공공단체"
              name3="개인"
              value="siteAdmin"
              register={register}
              errors={errors}
              required={true}
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
  width: 120px;
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
