import styled from "styled-components";
import { Title } from "../orderDetailPage/Title";
import React, { useEffect, useState } from "react";

type stateProps = {
  getContentsFilterState: (contentFilterState: string) => void;
  getSortOptionState: (sortOptionState: string) => void;
  getConceptOptionState: (conceptOptionState: string) => void;
  getPageState: (pageState: number) => void;
  contentsFilterState: string;
  sortOptionState: string;
  conceptOptionState: string;
};

export const ReviewTop = ({
  getContentsFilterState,
  getSortOptionState,
  getConceptOptionState,
  getPageState,
  contentsFilterState,
  sortOptionState,
  conceptOptionState,
}: stateProps) => {
  const PAGETITLE = "발주 현황 및 후기";
  const EXPLAIN = "발주 현황을 확인하고 완료된 발주에 평가를 남겨보세요";

  function handleFilterChange(event: React.ChangeEvent<HTMLSelectElement>) {
    getSortOptionState(event.target.value);
  }

  function handleConceptChange(event: React.ChangeEvent<HTMLSelectElement>) {
    getConceptOptionState(event.target.value);
  }

  const onGoingOrderButton = () => {
    getContentsFilterState("onGoing");
    getSortOptionState("noSort");
    getConceptOptionState("concept1");
    getPageState(1);
  };
  const finishedOrderButton = () => {
    getContentsFilterState("finished");
    getSortOptionState("noSort");
    getConceptOptionState("concept1");
    getPageState(1);
  };
  const myOrderButton = () => {
    getContentsFilterState("myOrder");
    getSortOptionState("noSort");
    getConceptOptionState("concept1");
    getPageState(1);
  };

  return (
    <WrapperTop>
      <Title pageTitle={PAGETITLE} explain={EXPLAIN} />
      <FilterWrapper>
        <FilterDiv>
          <FilterLabelP>정렬</FilterLabelP>
          <FilterSelect value={sortOptionState} onChange={handleFilterChange}>
            <option value={"noSort"}>정렬 없음</option>
            <option value={"concept"}>컨셉별</option>
            <FilterOption
              value={"starRate"}
              contentsFilterState={contentsFilterState}
            >
              별점 순
            </FilterOption>
            <FilterOption
              value={"like"}
              contentsFilterState={contentsFilterState}
            >
              좋아요 순
            </FilterOption>
          </FilterSelect>
        </FilterDiv>
        <FilterDiv2 selectedSortOptionState={sortOptionState}>
          <FilterSelect2
            value={conceptOptionState}
            onChange={handleConceptChange}
          >
            <option value={"concept1"}>컨셉1</option>
            <option value={"concept2"}>컨셉2</option>
            <option value={"concept3"}>컨셉3</option>
            <option value={"concept4"}>컨셉4</option>
          </FilterSelect2>
        </FilterDiv2>
      </FilterWrapper>
      <ButtonDiv>
        <Button1
          onClick={onGoingOrderButton}
          contentsFilterState={contentsFilterState}
        >
          진행중
        </Button1>
        <Button2
          onClick={finishedOrderButton}
          contentsFilterState={contentsFilterState}
        >
          완료
        </Button2>
        <Button3
          onClick={myOrderButton}
          contentsFilterState={contentsFilterState}
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

const FilterDiv2 = styled.div<{ selectedSortOptionState: string }>`
  display: ${(props) =>
    props.selectedSortOptionState !== "concept" ? "none" : "flex"};
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

const FilterOption = styled.option<{ contentsFilterState: String }>`
  display: ${(props) =>
    props.contentsFilterState !== "onGoing" ? "" : "none"};
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

const Button1 = styled.button<{ contentsFilterState: String }>`
  width: 99px;
  height: 60px;
  font-size: 20px;
  border-right: 1px solid black;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  background-color: ${(props) =>
    props.contentsFilterState === "onGoing" ? "black" : ""};
  color: ${(props) => (props.contentsFilterState === "onGoing" ? "white" : "")};
`;

const Button2 = styled.button<{ contentsFilterState: String }>`
  width: 99px;
  height: 60px;
  font-size: 20px;
  border-right: 1px solid black;
  background-color: ${(props) =>
    props.contentsFilterState === "finished" ? "black" : ""};
  color: ${(props) =>
    props.contentsFilterState === "finished" ? "white" : ""};
`;

const Button3 = styled.button<{ contentsFilterState: String }>`
  width: 100px;
  height: 60px;
  font-size: 20px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  background-color: ${(props) =>
    props.contentsFilterState === "myOrder" ? "black" : ""};
  color: ${(props) => (props.contentsFilterState === "myOrder" ? "white" : "")};
`;
