import styled from "styled-components";
import { Title } from "../orderDetailPage/Title";
import React, { useState } from "react";

export const ReviewTop = () => {
  const PAGETITLE = "발주 현황 및 후기";
  const EXPLAIN = "발주 현황을 확인하고 완료된 발주에 평가를 남겨보세요";

  const [selectedOption, setSelectedOption] = useState("concept");
  const [buttonState, setButtonState] = useState<String>("selectButton1");

  function handleFilterChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedOption(event.target.value);
  }

  const onGoingOrderButton = () => {
    setButtonState("selectButton1");
    setSelectedOption("concept");
  };
  const finishedOrderButton = () => {
    setButtonState("selectButton2");
    setSelectedOption("concept");
  };
  const myOrderButton = () => {
    setButtonState("selectButton3");
    setSelectedOption("concept");
  };

  return (
    <WrapperTop>
      <Title pageTitle={PAGETITLE} explain={EXPLAIN} />
      <FilterWrapper>
        <FilterDiv>
          <FilterLabelP>정렬</FilterLabelP>
          <FilterSelect value={selectedOption} onChange={handleFilterChange}>
            <option value={"concept"}>컨셉별</option>
            <FilterOption value={"starRate"} buttonState={buttonState}>
              별점 순
            </FilterOption>
            <FilterOption value={"like"} buttonState={buttonState}>
              좋아요 순
            </FilterOption>
          </FilterSelect>
        </FilterDiv>
        <FilterDiv2 selectedOption={selectedOption}>
          <FilterSelect2>
            <option value={"concept1"}>컨셉1</option>
            <option value={"concept2"}>컨셉2</option>
            <option value={"concept3"}>컨셉3</option>
            <option value={"concept4"}>컨셉4</option>
          </FilterSelect2>
        </FilterDiv2>
      </FilterWrapper>
      <ButtonDiv>
        <Button1 onClick={onGoingOrderButton} buttonState={buttonState}>
          진행중
        </Button1>
        <Button2 onClick={finishedOrderButton} buttonState={buttonState}>
          완료
        </Button2>
        <Button3 onClick={myOrderButton} buttonState={buttonState}>
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

const FilterWrapper = styled.div`
  height: 40px;
  position: absolute;
  bottom: 15px;
`;

const FilterDiv = styled.div`
  width: 200px;
  height: 40px;
  border: 1px solid black;
  border-radius: 7px;
  display: flex;
  align-items: center;
  float: left;
  margin-right: 29px;
`;

const FilterDiv2 = styled.div<{ selectedOption: string }>`
  display: ${(props) => (props.selectedOption !== "concept" ? "none" : "flex")};
  min-width: 100px;
  height: 40px;
  border: 1px solid black;
  border-radius: 7px;
  align-items: center;
  padding: 0 auto;
`;

const FilterSelect = styled.select`
  width: 140px;
  height: 30px;
  border: none;
  appearance: none;
  font-size: 20px;
  margin-left: 10px;
`;

const FilterSelect2 = styled.select`
  min-width: 100px;
  height: 30px;
  border: none;
  appearance: none;
  text-align: center;
  font-size: 20px;
`;

const FilterLabelP = styled.p`
  display: block;
  width: 50px;
  height: 30px;
  border-right: 1px solid black;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
`;

const FilterOption = styled.option<{ buttonState: String }>`
  display: ${(props) => (props.buttonState !== "selectButton1" ? "" : "none")};
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

const Button3 = styled.button<{ buttonState: String }>`
  width: 100px;
  height: 60px;
  font-size: 20px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  background-color: ${(props) =>
    props.buttonState === "selectButton3" ? "black" : ""};
  color: ${(props) => (props.buttonState === "selectButton3" ? "white" : "")};
`;
