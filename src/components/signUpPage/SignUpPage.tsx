import { useEffect, useState } from "react";
import styled from "styled-components";
import { FieldValues, useForm } from "react-hook-form";
import { customColor } from "../customColor";
import { AiOutlineForm } from "react-icons/ai";
import { SignUpUserInfo } from "./SignUpUserInfo";
import { SignUpSiteInfo } from "./SignUpSiteInfo";
import { SignUpAddInfo } from "./SignUpAddInfo";
import { Alert } from "../modal/alert";
import Router from "next/router";
import { useQueryPostSignUp } from "../../hooks/query/signUp/useQueryPostSignUp";
import { Modal } from "../modal/modal";
import { IsLoginModal } from "../modal/IsLoginModal";
import { tokenService } from "../../libs/tokenService";

export const SignUpPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertContent, setAlertContent] =
    useState("첫 미팅 희망날짜를 선택해 주세요");
  const [formData, setFormData] = useState<FormData>();

  const {
    register,
    unregister,
    formState: { errors },
    control,
    handleSubmit,
    watch,
    setValue,
  } = useForm();

  useEffect(() => {
    if (tokenService.getRole() !== "USER") {
      setIsLoginModalOpen(true);
    }
  }, []);

  const completeSubmit = () => {
    Router.reload();
  };
  const failSubmit = () => {
    setAlertContent("이미 존재하는 사이트이름 입니다");
    setIsAlertOpen(true);
  };

  const { mutate } = useQueryPostSignUp(completeSubmit, failSubmit);

  const submit = (data: FieldValues) => {
    if (data.meeting.length < 12) {
      setAlertContent("첫 미팅 희망날짜를 선택해 주세요");
      setIsAlertOpen(true);
    } else {
      let tempColor1 = Object.keys(data)
        .filter((i) => i.includes("mainColor"))
        .map((item) => data[item]);
      let tempColor2 = Object.keys(data)
        .filter((i) => i.includes("subColor"))
        .map((item) => data[item]);
      let obj = Object.entries(data).filter(
        (i) => !i[0].includes("mainColor") && !i[0].includes("subColor")
      );
      obj.push(["mainColor", tempColor1], ["subColor", tempColor2]);
      let send = Object.fromEntries(obj);
      const formData = new FormData();
      for (let i = 0; i < send.file.length; i++) {
        formData.append("files", send.file[i]);
      }
      delete send.file;
      send.database =
        send.database === null ? null : send.database === "예" ? true : false;
      send.login =
        send.database === null ? null : send.login === "예" ? true : false;
      formData.append(
        "orderDto",
        new Blob([JSON.stringify(send)], { type: "application/json" })
      );
      setFormData(formData);
      setIsModalOpen(true);
    }
  };
  return (
    <Container>
      <Modal
        isOpen={isModalOpen}
        content="발주신청을 진행하시겠습니까?"
        closeModal={() => setIsModalOpen(false)}
        yesEventFunc={() => {
          formData && mutate(formData);
          setIsModalOpen(false);
        }}
      />
      <Alert
        isOpen={isAlertOpen}
        content={alertContent}
        closeModal={() => setIsAlertOpen(false)}
      />
      <IsLoginModal isOpen={isLoginModalOpen} />
      <Head>
        <Title>
          <AiOutlineForm size={28} />
          발주신청
        </Title>
        <SubTitle>
          원활한 발주 작업을 위해, 필요한 정보를 기입해 주세요
        </SubTitle>
      </Head>
      <Body onSubmit={handleSubmit(submit)}>
        <BodyInner>
          <Division />
          <SignUpUserInfo
            register={register}
            errors={errors}
            control={control}
          />
          <SignUpSiteInfo register={register} errors={errors} />
          <SignUpAddInfo
            register={register}
            errors={errors}
            watch={watch}
            unregister={unregister}
            setValue={setValue}
          />
        </BodyInner>
        <SubmitButton type="submit">신청하기</SubmitButton>
      </Body>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 80px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 40px 48px;
  gap: 12px 0;
  width: 100%;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  gap: 0 8px;
  font-size: 24px;
  align-items: center;
  letter-spacing: -1px;
  color: ${customColor.black};
`;
const SubTitle = styled.div`
  padding-left: 36px;
  font-size: 16px;
  color: ${customColor.darkGray};
  letter-spacing: -0.5px;
  font-weight: bold;
`;
const Body = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 180px 0;
  align-items: center;
`;
const BodyInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 8px 76px;
  width: 100%;
  gap: 56px 0;
`;
const Division = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  width: 2px;
  height: 100%;
  background: ${customColor.darkGray};
  border-radius: 1px;
  left: 212px;
  top: 50%;
  transform: translate(0, -50%);
`;
const SubmitButton = styled.button`
  display: flex;
  width: 252px;
  height: 72px;
  background: ${customColor.indigo3};
  color: ${customColor.white};
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-bottom: 128px;
`;
