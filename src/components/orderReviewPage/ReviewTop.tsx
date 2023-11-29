import styled from "styled-components";
import { Title } from "../orderDetailPage/Title";
import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  reviewSortOptionState,
  reviewContentsFilterState,
  reviewPageState,
} from "../../recoil/reviewPageState";
import { tokenService } from "../../libs/tokenService";

type propTypes = {
  getModalState: (modalState: {
    modalRole: string;
    state: boolean;
    text: string;
    onClickConfirmButton: () => void;
  }) => void;
  modalState: {
    modalRole: string;
    state: boolean;
    text: string;
    onClickConfirmButton: () => void;
  };
};

export const ReviewTop = ({ getModalState, modalState }: propTypes) => {
  const PAGETITLE = "발주 현황 및 후기";
  const EXPLAIN = "발주 현황을 확인하고 완료된 발주에 평가를 남겨보세요";
  const [sortOptionState, setSortOptionState] = useRecoilState(
    reviewSortOptionState
  );
  const [contentsFilterState, setContentsFilterState] = useRecoilState(
    reviewContentsFilterState
  );

  const setPageState = useSetRecoilState(reviewPageState);

  function handleFilterChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSortOptionState(event.target.value);
  }

  const onGoingOrderButton = () => {
    setContentsFilterState("onGoing");
    setPageState(1);
    setSortOptionState("noSort");
  };
  const finishedOrderButton = () => {
    setContentsFilterState("finished");
    setPageState(1);
    setSortOptionState("noSort");
  };
  const myOrderButton = () => {
    if (tokenService.getToken()) {
      setContentsFilterState("myOrder");
      setSortOptionState("noSort");
      setPageState(1);
    } else {
      getModalState({
        modalRole: "noLogin",
        state: true,
        text: "로그인 하지 않은 상태에서는 내 발주를 확인할 수 없습니다.",
        onClickConfirmButton: () => {},
      });
    }
  };

  return (
    <WrapperTop>
      <Title pageTitle={PAGETITLE} explain={EXPLAIN} />
      <FilterWrapper>
        <FilterDiv>
          <FilterLabelP>정렬</FilterLabelP>
          <FilterSelect value={sortOptionState} onChange={handleFilterChange}>
            <option value={"noSort"}>정렬 없음</option>
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
      </FilterWrapper>
      <ButtonDiv>
        <Button
          onClick={onGoingOrderButton}
          buttonRole={"onGoing"}
          contentsFilterState={contentsFilterState}
        >
          진행중
        </Button>
        <Button
          onClick={finishedOrderButton}
          buttonRole={"finished"}
          contentsFilterState={contentsFilterState}
        >
          완료
        </Button>
        <Button
          onClick={myOrderButton}
          buttonRole={"myOrder"}
          contentsFilterState={contentsFilterState}
        >
          내 발주
        </Button>
      </ButtonDiv>
    </WrapperTop>
  );
};

const WrapperTop = styled.div`
  @media screen and (min-width: 1024px) {
    height: 277px;
    padding-top: 40px;
  }
  @media screen and (max-width: 1023px) {
    height: 208px;
    padding-top: 30px;
  }
  display: flex;
  width: 100%;
  position: relative;
`;

const FilterWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    height: 40px;
    bottom: 15px;
  }
  @media screen and (max-width: 1023px) {
    height: 30px;
    bottom: 12px;
  }
  position: absolute;
`;

const FilterDiv = styled.div`
  @media screen and (min-width: 1024px) {
    width: 200px;
    height: 40px;
    margin-right: 29px;
  }
  @media screen and (max-width: 1023px) {
    width: 150px;
    height: 30px;
    margin-right: 22px;
  }
  border: 1px solid black;
  border-radius: 7px;
  display: flex;
  align-items: center;
`;

const FilterSelect = styled.select`
  @media screen and (min-width: 1024px) {
    width: 140px;
    height: 30px;
    margin-left: 10px;
    font-size: 20px;
  }
  @media screen and (max-width: 1023px) {
    width: 105px;
    height: 22.5px;
    margin-left: 7.5px;
    font-size: 15px;
  }
  border: none;
  appearance: none;
`;

const FilterLabelP = styled.p`
  @media screen and (min-width: 1024px) {
    width: 50px;
    height: 30px;
    font-size: 20px;
  }
  @media screen and (max-width: 1023px) {
    width: 37.5px;
    height: 22.5px;
    font-size: 15px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
`;

const FilterOption = styled.option<{ contentsFilterState: String }>`
  display: ${(props) =>
    props.contentsFilterState !== "onGoing" ? "" : "none"};
`;

const ButtonDiv = styled.div`
  @media screen and (min-width: 1024px) {
    width: 300px;
    height: 60px;
    bottom: 15px;
  }
  @media screen and (max-width: 1023px) {
    width: 225px;
    height: 45px;
    bottom: 12px;
  }
  display: flex;
  position: absolute;
  border: 1px solid black;
  border-radius: 7px;
  right: 0;
`;

const Button = styled.button<{
  contentsFilterState: "onGoing" | "finished" | "myOrder";
  buttonRole: "onGoing" | "finished" | "myOrder";
}>`
  @media screen and (min-width: 1024px) {
    width: 99px;
    height: 60px;
    font-size: 20px;
  }
  @media screen and (max-width: 1023px) {
    width: 75px;
    height: 45px;
    font-size: 15px;
  }

  border-right: ${(props) =>
    props.buttonRole !== "myOrder" ? "1px solid black" : ""};

  border-top-left-radius: ${(props) =>
    props.buttonRole === "onGoing" ? "7px" : ""};
  border-bottom-left-radius: ${(props) =>
    props.buttonRole === "onGoing" ? "7px" : ""};

  border-top-right-radius: ${(props) =>
    props.buttonRole === "myOrder" ? "7px" : ""};
  border-bottom-right-radius: ${(props) =>
    props.buttonRole === "myOrder" ? "7px" : ""};

  background-color: ${(props) =>
    props.contentsFilterState === props.buttonRole ? "black" : ""};
  color: ${(props) =>
    props.contentsFilterState === props.buttonRole ? "white" : ""};
`;
