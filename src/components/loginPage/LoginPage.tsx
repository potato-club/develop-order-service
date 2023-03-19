import styled from "styled-components";
import Image from "next/image";
import { customColor } from "../customColor";

export const LoginPage = () => {
  return (
    <Wrapper>
      <Content>
        간편하게 로그인하고
        <br />
        다양한 서비스를 이용하세요
        <Logins>
          <KakaoLogin>
            <Image
              src={"/img/login/kakaoLogin.png"}
              fill
              alt="kakaoLogin"
              style={{ objectFit: "cover" }}
            />
          </KakaoLogin>
          <GoogleLogin>
            <Image
              src={"/img/login/google.png"}
              width={20}
              height={20}
              alt="googleLogin"
            />
            <GoogleText>구글 로그인</GoogleText>
          </GoogleLogin>
        </Logins>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  padding: 12px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${customColor.indigo3 + "aa"};
    border-radius: 20px;
    background-clip: padding-box;
    border: 4px solid transparent;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  text-align: center;
  letter-spacing: -0.5px;
  gap: 60px 0;
`;
const Logins = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px 0;
`;
const KakaoLogin = styled.button`
  display: flex;
  position: relative;
  border: none;
  width: 300px;
  height: 45px;
  border-radius: 8px;
  background: #fee500;
  cursor: pointer;
  box-shadow: 1px 1px 4px 0 ${customColor.black + "33"};
`;
const GoogleLogin = styled.button`
  display: flex;
  position: relative;
  border: none;
  width: 300px;
  height: 45px;
  cursor: pointer;
  background: ${customColor.white};
  padding: 0 14px;
  align-items: center;
  border-radius: 8px;
  box-shadow: 1px 1px 4px 0 ${customColor.black + "33"};
`;
const GoogleText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: bold;
  font-size: 14px;
  color: ${customColor.black + "aa"};
  transform: translate(calc(-50% + 10px), -50%);
  letter-spacing: -0.5px;
  font-family: Roboto;
`;
