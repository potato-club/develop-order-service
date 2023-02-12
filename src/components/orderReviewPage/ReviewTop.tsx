import styled from "styled-components";
import Image from "next/image";
import { customColor } from "../customColor";
import reviewIcon from "../../assets/img/review/review.png";
import { useState } from "react";

export const ReviewTop = () => {
  const [buttonState, setButtonState] = useState<String>("selectButton1");
  const [myOrderButtonState, setMyOrderButtonState] = useState<Boolean>(false);

  const onGoingOrderButton = () => {
    setButtonState("selectButton1");
  };
  const finishedOrderButton = () => {
    setButtonState("selectButton2");
  };
  const myOrderButton = () => {
    if (myOrderButtonState === false) {
      setMyOrderButtonState(true);
    } else {
      setMyOrderButtonState(false);
    }
  };

  return (
    <WrapperTop>
      <TitleDiv>
        <TitleTopDiv>
          <ImgDiv>
            <Image
              src={reviewIcon}
              alt="reviewIcon"
              width={30}
              height={30}
            ></Image>
          </ImgDiv>
          <TitleH2>발주 현황 및 후기</TitleH2>
        </TitleTopDiv>
        <TitleBottomDiv>
          <TitleP>발주 현황을 확인하고 완료된 발주에 평가를 남겨보세요</TitleP>
        </TitleBottomDiv>
      </TitleDiv>
      <ButtonDiv>
        <Button1 onClick={onGoingOrderButton} buttonState={buttonState}>
          진행중
        </Button1>
        <Button2 onClick={finishedOrderButton} buttonState={buttonState}>
          완료
        </Button2>
        <Button3
          onClick={myOrderButton}
          myOrderButtonState={myOrderButtonState}
        >
          내 발주
        </Button3>
      </ButtonDiv>
    </WrapperTop>
  );
};

const WrapperTop = styled.div`
  display: flex;
  width: 100%;
  height: 277px;
  padding-top: 40px;
  position: relative;
`;

const TitleDiv = styled.div`
  width: 432px;
  height: 74px;
  margin-left: 41px;
`;

const TitleTopDiv = styled.div`
  width: 100%;
  height: 30px;
`;

const TitleBottomDiv = styled.div`
  width: 100%;
  height: 44px;
  padding-left: 26px;
`;

const ImgDiv = styled.div`
  display: block;
  float: left;
  margin-right: 9px;
`;

const TitleH2 = styled.h2`
  font-size: 24px;
`;

const TitleP = styled.p`
  margin-top: 15px;
  font-size: 18px;
  color: ${customColor.gray};
`;

const ButtonDiv = styled.div`
  position: absolute;
  width: 300px;
  height: 60px;
  border: 1px solid black;
  border-radius: 7px;
  bottom: 15px;
  right: 0;
`;

const Button1 = styled.button<{ buttonState: String }>`
  width: 99px;
  height: 60px;
  font-size: 20px;
  border-right: 1px solid black;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  background-color: ${(props) =>
    props.buttonState === "selectButton1" ? "black" : ""};
  color: ${(props) => (props.buttonState === "selectButton1" ? "white" : "")};
`;

const Button2 = styled.button<{ buttonState: String }>`
  width: 99px;
  height: 60px;
  font-size: 20px;
  border-right: 1px solid black;
  background-color: ${(props) =>
    props.buttonState === "selectButton2" ? "black" : ""};
  color: ${(props) => (props.buttonState === "selectButton2" ? "white" : "")};
`;

const Button3 = styled.button<{ myOrderButtonState: Boolean }>`
  width: 100px;
  height: 60px;
  font-size: 20px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  background-color: ${(props) => (props.myOrderButtonState ? "black" : "")};
  color: ${(props) => (props.myOrderButtonState ? "white" : "")};
`;
