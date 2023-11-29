import styled from "styled-components";
import { customColor } from "../../customColor";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { modifyOrderContentsFilterState } from "../../../recoil/modifyOrderPageState";

interface ButtonProps {
  selected: boolean;
}

export const SearchBar = () => {
  const [stateButtonValue, setStateButtonValue] = useRecoilState(
    modifyOrderContentsFilterState
  );

  return (
    <Wrapper>
      <Search>
        <SearchIcon />
        <SearchInput placeholder="발주인/발주제목 검색" />
      </Search>
      <State>
        <StateButtons>
          <StateButton
            selected={stateButtonValue === "onGoing"}
            onClick={() => setStateButtonValue("onGoing")}
          >
            진행중
          </StateButton>
          <StateButton
            selected={stateButtonValue === "finished"}
            onClick={() => setStateButtonValue("finished")}
          >
            완료
          </StateButton>
        </StateButtons>
      </State>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  color: ${customColor.white};
  justify-content: space-between;
`;
const Search = styled.div`
  display: flex;
  position: relative;
`;
const SearchInput = styled.input`
  background: none;
  padding: 4px 10px;
  outline: none;
  border: none;
  background: none;
  color: ${customColor.white};
  width: 160px;
  border-bottom: 1px solid ${customColor.gray};
  font-size: 14px;
  &::placeholder {
    color: ${customColor.gray};
  }
`;
const SearchIcon = styled(BsSearch)`
  left: 4px;
  font-size: 22px;
  transform: translateY(3px);
  color: ${customColor.gray};
`;
const State = styled.div`
  display: flex;
  position: relative;
`;
const StateButtons = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  right: 0;
  gap: 1px;
  border-radius: 6px;
  overflow: hidden;
`;
const StateButton = styled.button<ButtonProps>`
  display: flex;
  width: 80px;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  font-size: 14px;
  color: ${(props) =>
    props.selected ? customColor.white : customColor.darkGray};
  background: ${(props) =>
    props.selected ? customColor.indigo3 : customColor.indigo2};
`;
