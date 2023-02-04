import styled from "styled-components";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormUnregister,
  UseFormWatch,
} from "react-hook-form";
import { customColor } from "../customColor";
import { MdTune } from "react-icons/md";
import { QuestionLabel } from "./components/QuestionLabel";
import { FormColor } from "./components/FormColor";
import { FormRadioButtons } from "./components/FormRadioButtons";

interface Props {
  register: UseFormRegister<FieldValues>;
  unregister: UseFormUnregister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}

export const SignUpAddInfo = ({
  register,
  unregister,
  errors,
  watch,
}: Props) => {
  return (
    <Content>
      <Lbel>
        <MdTune size={20} />
        추가 정보
      </Lbel>
      <Form>
        <FormItem>
          <FormItemLabel>
            <Question>
              브랜드 컬러1
              <QuestionLabel
                content="사이트의 대표색들을 알려주세요"
                width={158}
              />
            </Question>
            <EssentialInfo>*는 필수로 적어야하는 정보입니다</EssentialInfo>
          </FormItemLabel>
          <FormItemContent>
            <FormColor
              value="addColor1"
              register={register}
              unregister={unregister}
              errors={errors}
              watch={watch}
            />
          </FormItemContent>
        </FormItem>
        <FormItem>
          <FormItemLabel>브랜드 컬러2</FormItemLabel>
          <FormItemContent>
            <FormColor
              value="addColor2"
              register={register}
              unregister={unregister}
              errors={errors}
              watch={watch}
            />
          </FormItemContent>
        </FormItem>
        <FormItem>
          <FormItemLabel>
            <Question>
              페이지 수
              <QuestionLabel
                content="페이지는 URL의 변화를 기준으로 합니다. "
                width={0}
              />
            </Question>
          </FormItemLabel>
          <FormItemContent>김도스 또는 (주)도스</FormItemContent>
        </FormItem>
        <FormItem>
          <FormItemLabel>로그인 필요 유무</FormItemLabel>
          <FormItemContent>
            <FormRadioButtons
              name1="예"
              name2="아니요"
              value="addLogin"
              register={register}
              errors={errors}
              required={false}
            />
          </FormItemContent>
        </FormItem>
        <FormItem>
          <FormItemLabel>DB 필요 유무</FormItemLabel>
          <FormItemContent>
            <FormRadioButtons
              name1="예"
              name2="아니요"
              value="addDB"
              register={register}
              errors={errors}
              required={false}
            />
          </FormItemContent>
        </FormItem>
        <FormItem>
          <FormItemLabel>사이트 컨셉 참고자료 첨부</FormItemLabel>
          <FormItemContent>김도스 또는 (주)도스</FormItemContent>
        </FormItem>
        <FormItem>
          <FormItemLabel>*첫 미팅 희망날짜</FormItemLabel>
          <FormItemContent>김도스 또는 (주)도스</FormItemContent>
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
  max-width: 736px;
  align-items: center;
  padding-left: 32px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
`;
const Question = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 6px;
`;
