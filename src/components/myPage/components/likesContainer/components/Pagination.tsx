import styled from "styled-components";
import { customColor } from "../../../../customColor";
import {
  PiCaretDoubleRightFill,
  PiCaretRightFill,
  PiCaretDoubleLeftFill,
  PiCaretLeftFill,
} from "react-icons/pi";
import { pathName } from "../../../../../config/pathName";
import Router from "next/router";
import { useState } from "react";

export const Pagination = (props: {
  totalPage: number | undefined;
  page: number;
}) => {
  var totalPage = props.totalPage || 1;
  const [subPage, setSubPage] = useState(0);
  const generateNumbers = () => {
    const arr = [];
    if (subPage > parseInt((totalPage - 1) / 5)) {
      return [];
    } else {
      for (let i = subPage * 5 + 1; i <= (subPage + 1) * 5; i++) {
        if (i <= totalPage) {
          arr.push(
            <Number
              key={i}
              isActive={i == props.page}
              onClick={() =>
                i != props.page &&
                Router.replace({
                  pathname: pathName.MY_LIKES,
                  query: { page: i },
                })
              }
            >
              {i}
            </Number>
          );
        }
      }
      return arr;
    }
  };

  return (
    <PaginationBox>
      <ArrowButton
        isActive={props.page > 5}
        style={{ left: "-52px" }}
        onClick={() => {
          setSubPage(0);
          Router.replace({
            pathname: pathName.MY_LIKES,
            query: { page: 1 },
          });
        }}
      >
        <PiCaretDoubleLeftFill />
      </ArrowButton>
      <ArrowButton
        isActive={props.page != 1}
        onClick={() => {
          if (props.page % 5 == 1) setSubPage(parseInt(props.page / 5) - 1);
          Router.replace({
            pathname: pathName.MY_LIKES,
            query: { page: props.page - 1 },
          });
        }}
        style={{ left: "-32px" }}
      >
        <PiCaretLeftFill />
      </ArrowButton>
      <Numbers>{generateNumbers()}</Numbers>
      <ArrowButton
        isActive={props.page < totalPage}
        onClick={() => {
          if (props.page % 5 == 0) setSubPage(props.page / 5);
          Router.replace({
            pathname: pathName.MY_LIKES,
            query: { page: props.page + 1 },
          });
        }}
        style={{ right: "-30px" }}
      >
        <PiCaretRightFill />
      </ArrowButton>
      <ArrowButton
        isActive={props.page <= parseInt((totalPage - 1) / 5) * 5}
        style={{ right: "-52px" }}
        onClick={() => {
          setSubPage(parseInt((totalPage - 1) / 5));
          Router.replace({
            pathname: pathName.MY_LIKES,
            query: { page: totalPage },
          });
        }}
      >
        <PiCaretDoubleRightFill />
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
  width: 20px;
  height: 24px;
  transform: translateY(1px);
  position: absolute;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.isActive ? customColor.black + "bb" : customColor.gray + "66"};
  pointer-events: ${(props) => !props.isActive && "none"};
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
