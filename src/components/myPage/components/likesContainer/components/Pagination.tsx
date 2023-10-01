import styled from "styled-components";
import { customColor } from "../../../../customColor";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { pathName } from "../../../../../config/pathName";
import Router from "next/router";
import { useRecoilState } from "recoil";
import { myLikesPageState } from "../../../../../recoil/myPageState";

export const Pagination = (props: { totalPage: number | undefined }) => {
  var totalPage = props.totalPage || 1;
  const [pageState, setPageState] = useRecoilState(myLikesPageState);
  const generateNumbers = () => {
    const arr = [];
    for (let i = 1; i <= totalPage; i++) {
      arr.push(
        <Number
          key={i}
          isActive={i == pageState}
          onClick={() => i != pageState && setPageState(i)}
        >
          {i}
        </Number>
      );
    }
    return arr;
  };
  return (
    <PaginationBox>
      <ArrowButton
        isActive={pageState != 1}
        onClick={() => setPageState(pageState - 1)}
        style={{ left: "-27px" }}
      >
        <BsChevronLeft />
      </ArrowButton>
      <Numbers>{generateNumbers()}</Numbers>
      <ArrowButton
        isActive={pageState < totalPage}
        onClick={() => setPageState(pageState + 1)}
        style={{ right: "-27px" }}
      >
        <BsChevronRight />
      </ArrowButton>
    </PaginationBox>
  );
};

const PaginationBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  padding-top: 44px;
  font-size: 16px;
  align-items: center;
  width: fit-content;
`;
const ArrowButton = styled.button<{ isActive: boolean }>`
  font-size: 17px;
  width: 17px;
  transform: translateY(1px);
  display: ${(props) => (props.isActive ? "flex" : "none")};
  position: absolute;
`;
const Numbers = styled.div`
  display: flex;
  flex-direction: row;
`;
const Number = styled.button<{ isActive: boolean }>`
  display: flex;
  width: 40px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  color: ${(props) => (props.isActive ? customColor.black : customColor.gray)};
  background: ${(props) =>
    props.isActive ? customColor.lightGray : "transparent"};
  &:not(:last-child) {
    border-right: 1px solid ${customColor.gray};
  }
  &:hover {
    background: ${customColor.lightGray};
  }
`;
