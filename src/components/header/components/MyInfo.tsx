import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { customColor } from "../../customColor";
import www from "../../../assets/img/www.png";

export const MyInfo = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Wrapper>
      <MyImg>{isLogin && <Image src={www} fill alt="my_image" />}</MyImg>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const MyImg = styled.div`
  display: flex;
  position: relative;
  width: 28px;
  height: 28px;
  background: ${customColor.lightGray};
  border-radius: 50%;
`;
