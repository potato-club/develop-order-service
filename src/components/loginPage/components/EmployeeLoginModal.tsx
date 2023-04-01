import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
import { customColor } from "../../customColor";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import Router from "next/router";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}
interface StyleProps {
  isOpen: boolean;
}

export const EmployeeLoginModal = ({ isOpen, closeModal }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const modalRef = useRef(null);

  const submit = (data: FieldValues) => {
    axios
      .post("http://localhost:8080/admin/login", {
        adminId: data["employeeId"],
        adminPw: data["employeePw"],
      })
      .then((data) => {
        localStorage.setItem("token", data.data["accessToken"]);
        localStorage.setItem("refreshToken", data.data["refreshToken"]);
        Router.reload();
      });
  };

  return (
    <CSSTransition
      in={isOpen}
      timeout={400}
      nodeRef={modalRef}
      classNames="loginModal"
    >
      <Wrapper isOpen={isOpen} ref={modalRef}>
        <WrapperInner onSubmit={handleSubmit(submit)}>
          <CloseButton onClick={closeModal}>
            <IoMdClose />
          </CloseButton>
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
                {...register("employeeId", { required: true })}
              />
              {errors["employeeId"] && <Error>아이디를 입력해주세요</Error>}
            </LoginBox>
            <LoginBox>
              <Label>비밀번호</Label>
              <Input
                type="password"
                placeholder="Enter PW"
                {...register("employeePw", { required: true })}
              />
              {errors["employeePw"] && <Error>비밀번호를 입력해주세요</Error>}
            </LoginBox>
            <LoginButton type="submit">로그인</LoginButton>
          </Login>
        </WrapperInner>
      </Wrapper>
    </CSSTransition>
  );
};

const Wrapper = styled.div<StyleProps>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  box-shadow: 1px 2px 4px 2px ${customColor.black + "33"};
  background: ${customColor.white};
  z-index: 50;
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
const CloseButton = styled.button`
  display: flex;
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 18px;
  color: ${customColor.darkGray};
  filter: drop-shadow(0px 0px 1px ${customColor.darkGray});
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
