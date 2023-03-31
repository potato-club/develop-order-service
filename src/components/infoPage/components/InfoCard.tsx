import React from "react";
import styled from "styled-components";
import { customColor } from "../../customColor";
import Image from "next/image";
import email from "../../../assets/img/information/email.png";
import phone from "../../../assets/img/information/phone.png";
import imac from "../../../assets/img/information/imac.png";
import character from "../../../assets/img/information/character.png";
import { Link } from "react-scroll";
import { info } from "console";

type InfoProps = {
  name: string;
  task: string;
  number: string;
  emailAdress: string;
  onClick: any;
};

const InfoCard = ({ name, task, number, emailAdress, onClick }: InfoProps) => {
  return (
    <InfoBox onClick={onClick}>
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
      </NumberBox>
      <EmailBox>
        <Image src={email} alt={""} width={20} />
        <Email>{emailAdress}</Email>
      </EmailBox>
      <Link to="1" smooth spy>
        <ScrollP>스케쥴 보러가기</ScrollP>
      </Link>
    </InfoBox>
  );
};

export default InfoCard;
const InfoBox = styled.button`
  width: 150px;
  height: 380px;
  border-radius: 70px;
  background-color: ${customColor.blue};
`;
const Circle = styled.div`
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
  margin-top: 15px;
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
  margin-left: 8px;
  margin-bottom: 20px;
`;
const Email = styled.p`
  font-size: 5px;
  margin-top: 3px;
  margin-left: 10px;
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

const ScrollP = styled.p``;
