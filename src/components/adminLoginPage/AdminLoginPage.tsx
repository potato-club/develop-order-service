import styled from "styled-components";
import { TbWorld } from "react-icons/tb";
import { FieldValues, useForm } from "react-hook-form";
import Router from "next/router";
import { customColor } from "../customColor";
import { useQueryPostLogin } from "../../hooks/query/userInfo/useQueryPostLogin";
import { pathName } from "../../config/adminPathName";
import { Alert } from "../modal/alert";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userInformation } from "../../recoil/userInfo";

export const AdminLoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [userInfo, setUserInfo] = useRecoilState(userInformation);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const completeLogin = (data: {
    accessToken: string;
    refreshToken: string;
  }) => {
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    localStorage.setItem("role", "ADMIN");
    handleGoPrevPath();
  };
  const failLogin = () => {
    setIsModalOpen(true);
  };
  const { mutate } = useQueryPostLogin(completeLogin, failLogin);

  useEffect(() => {
    if (localStorage.getItem("role") === "USER") {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("role");
    } else if (localStorage.getItem("role") === "ADMIN") {
      handleGoPrevPath();
    }
  }, []);

  const isContainPathName = (prevPath: string) => {
    if (
      prevPath.includes(pathName.CHECK_SIGNUP.LIST) &&
      prevPath !== pathName.LOGIN
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleGoPrevPath = () => {
    const prevPath = localStorage.getItem("prevPath");
    prevPath !== null &&
    isContainPathName(prevPath) &&
    prevPath.includes(pathName.CHECK_SIGNUP.LIST)
      ? Router.push(prevPath)
      : Router.push(pathName.CHECK_SIGNUP.LIST);
  };

  const submit = (data: FieldValues) => {
    mutate({ adminId: data.adminId, adminPw: data.adminPw });
  };
  return (
    <Container>
      <Alert
        content={"로그인에 실패하였습니다"}
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
      <Wrapper>
        <WrapperInner onSubmit={handleSubmit(submit)}>
          <Logo>
            <WWW />
            <Font>DOS</Font>
          </Logo>
          <Title>직원 로그인</Title>
          <Login>
            <LoginBox>
              <Label>아이디</Label>
              <Input
                type="text"
                placeholder="Enter ID"
                {...register("adminId", { required: true })}
              />
              {errors["adminId"] && <Error>아이디를 입력해주세요</Error>}
            </LoginBox>
            <LoginBox>
              <Label>비밀번호</Label>
              <Input
                type="password"
                placeholder="Enter PW"
                {...register("adminPw", { required: true })}
              />
              {errors["adminPw"] && <Error>비밀번호를 입력해주세요</Error>}
            </LoginBox>
            <LoginButton type="submit">로그인</LoginButton>
          </Login>
        </WrapperInner>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  position: fixed;
  box-shadow: 1px 2px 4px 2px ${customColor.black + "33"};
  background: ${customColor.white};
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const WrapperInner = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  align-items: flex-start;
  gap: 128px;
  padding: 48px;
  overflow: hidden;
`;
const Logo = styled.div`
  display: flex;
  position: relative;
`;
const Title = styled.div`
  display: flex;
  position: absolute;
  right: 54px;
  top: 78px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -0.5px;
`;
const WWW = styled(TbWorld)`
  display: flex;
  position: absolute;
  font-size: 200px;
  color: ${customColor.lightGray};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Font = styled.p`
  position: absolute;
  font-size: 52px;
  font-weight: bolder;
  color: ${customColor.darkGray};
  text-shadow: 1px 1px 0px ${customColor.darkGray},
    -1px -1px 0px ${customColor.darkGray}, 1px -1px 0px ${customColor.darkGray},
    -1px 1px 0px ${customColor.darkGray}, 3px 5px 1px ${customColor.blue},
    5px 3px 1px ${customColor.blue};
`;
const Login = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 44px;
  padding: 0 32px;
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;
  width: 100%;
`;
const Label = styled.p`
  font-size: 16px;
`;
const Input = styled.input`
  width: calc(100% - 12px);
  border: none;
  outline: none;
  border-bottom: 2px solid ${customColor.lightGray};
  margin-left: 12px;
  padding: 6px 8px;
  font-size: 15px;
  ::placeholder {
    color: ${customColor.gray};
  }
`;
const LoginButton = styled.button`
  display: flex;
  font-size: 16px;
  color: ${customColor.white};
  width: 100%;
  justify-content: center;
  background: ${customColor.indigo3};
  padding: 12px;
  margin: 16px 0;
`;
const Error = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 12px;
  color: ${customColor.darkGray};
  transform: translate(0, calc(100% + 2px));
`;
