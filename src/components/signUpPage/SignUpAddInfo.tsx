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
import { FormNumber } from "./components/FormNumber";
import { InfoLabel } from "./components/InfoLabel";
import { FormTextarea } from "./components/FormTextarea";
import { FormFile } from "./components/FormFile";
import { FormCalendar } from "./components/FormCalendar";

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
              <QuestionLabel content="사이트의 대표색" width={86} />
            </Question>
            <EssentialInfo>*는 필수로 적어야하는 정보입니다</EssentialInfo>
          </FormItemLabel>
          <FormItemContent>
            <FormColor
              value="addColorA"
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
              value="addColorB"
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
                content="URL의 변화를 기준으로 하되, 한 페이지 내에 많은 기능이 있을 시 여러 페이지로 간주"
                width={386}
              />
            </Question>
          </FormItemLabel>
          <FormItemContent>
            <FormNumber
              placeholder="3"
              value="addPage"
              register={register}
              errors={errors}
              required={false}
            />
          </FormItemContent>
          <InfoLabel content="페이지는 3개 초과 시 추가요금이 발생합니다" />
        </FormItem>
        <FormItem>
          <FormItemLabel>
            <Question>
              로그인 필요 유무
              <QuestionLabel
                content="소셜(카카오, 구글 등)로그인, 사이트 자체적 로그인"
                width={236}
              />
            </Question>
          </FormItemLabel>
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
          <InfoLabel content="로그인 기능 추가 시 추가요금이 발생합니다" />
        </FormItem>
        <FormItem>
          <FormItemLabel>
            <Question>
              DB 필요 유무
              <QuestionLabel
                content="서버에 정보 저장, 많은 정보를 다루기 위해 필수"
                width={222}
              />
            </Question>
          </FormItemLabel>
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
          <InfoLabel content="DB 기능 추가 시 추가요금이 발생합니다" />
        </FormItem>
        <FormItem>
          <FormItemLabel>사이트 컨셉 참고자료 첨부</FormItemLabel>
          <FormItemContent>
            <FormFile
              value="addFile"
              register={register}
              errors={errors}
              required={false}
            />
          </FormItemContent>
        </FormItem>
        <FormItem>
          <FormItemLabel>기타사항</FormItemLabel>
          <FormItemContent>
            <FormTextarea
              placeholder="dos.com 사이트를 참고하려고 합니다!"
              value="addEtc"
              type="text"
              register={register}
              errors={errors}
              required={false}
            />
          </FormItemContent>
        </FormItem>
        <FormItem>
          <FormItemLabel>*첫 미팅 희망날짜</FormItemLabel>
          <FormItemContent>
            <FormCalendar />
          </FormItemContent>
          <InfoLabel content="회의는 최대 2시간동안 진행됩니다" />
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
  position: relative;
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
  white-space: nowrap;
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
  flex: auto;
  align-items: center;
  gap: 0 6px;
  white-space: nowrap;
`;
