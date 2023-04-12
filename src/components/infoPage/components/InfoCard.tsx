import React, { useState } from "react";
import styled from "styled-components";
import { customColor } from "../../customColor";
import Image from "next/image";
import email from "../../../../public/img/information/email.png";
import phone from "../../../../public/img/information/phone.png";
import imac from "../../../../public/img/information/imac.png";
import character from "../../../../public/img/information/character.png";
import copy from "../../../../public/img/information/copy.png";
import { Link } from "react-scroll";

type InfoProps = {
  name: string;
  task: string;
  number: string;
  emailAdress: string;
  onClick: any;
};

const InfoCard = ({ name, task, number, emailAdress, onClick }: InfoProps) => {
  const [showPopup, setShowPopup] = useState(false); // 팝업 표시 여부를 저장하는 상태값

  const handleCopyClick = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setShowPopup(true); // 복사됐을 때 팝업 표시
      setTimeout(() => {
        setShowPopup(false); // 2초 후에 팝업 자동으로 사라짐
      }, 1000);
    });
  };

  return (
    <InfoBox>
      <Circle>
        <Image src={character} alt={""} width={80} />
      </Circle>
      <Name>{name}</Name>

      <TaskBox>
        <Image src={imac} alt={""} width={35} />
        <Task>{task}</Task>
      </TaskBox>
      <NumberBox>
        <Image src={phone} alt={""} width={20} />
        <Number>{number}</Number>
        <Image
          src={copy}
          alt=""
          width={15}
          onClick={() => handleCopyClick(number)}
          style={{ marginLeft: "5px", cursor: "pointer" , opacity:0.5}}
        />
      </NumberBox>

      <EmailBox>
        <Image src={email} alt={""} width={20} />
        <Email>{emailAdress}</Email>
        <Image
          src={copy}
          alt=""
          width={15}
          onClick={() => handleCopyClick(emailAdress)}
          style={{marginLeft: "5px", cursor: "pointer",opacity:0.5 }}
        />
      </EmailBox>
      <Link to="1" smooth spy>
        <ScrollP onClick={onClick}>스케쥴 보러가기</ScrollP>
      </Link>

      {showPopup && <Popup className="show">복사되었습니다</Popup>}
      {!showPopup && <Popup className="hide">복사되었습니다</Popup>}
    </InfoBox>
  );
};

export default InfoCard;
const InfoBox = styled.div`
  width: 150px;
  height: 380px;
  border-radius: 70px;
  background-color: ${customColor.blue};
  position: relative;
`;
const Circle = styled.div`
  top: 20px;
  width: 111px;
  height: 111px;
  border-radius: 50%;
  background-color: ${customColor.white};
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const TaskBox = styled.div`
  position: relative;
  left: 6px;
  display: flexbox;
  margin-left: 15px;
  margin-bottom: 20px;
`;
const Task = styled.p`
  font-size: 15px;
  margin-left: 15px;
  margin-top: 8px;
  font-weight: bolder;
`;

const EmailBox = styled.div`
  position: relative;
  display: flexbox;
  margin-left: 5px;
  margin-bottom: 20px;
`;
const Email = styled.p`
  font-size: 5px;
  margin-top: 3px;
  margin-left: 5px;
`;
const NumberBox = styled.div`
  position: relative;
  display: flexbox;
  margin-left: 18px;
  margin-bottom: 20px;
`;
const Number = styled.p`
  font-size: 5px;
  margin-top: 4px;
  margin-left: 10px;
`;

const ScrollP = styled.button`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Popup = styled.div`
  position: fixed;
  top: 80%;
  left: 47%;
  transform: translate(-50%, -50%);

  padding: 10px;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;

  &.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    animation: none;
  }

  &.hide {
    animation: fade-in 0.3s ease-in-out forwards;
  }

  @keyframes fade-in {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
