import styled from "styled-components";
import Image from "next/image";
import arrowIcon from "../../../public/img/review/arrow.png";
import { useState } from "react";

export const Pagenation = () => {
  const [pageNumState, setPageNumState] = useState(1);
  const prevPageButton = () => {
    setPageNumState(pageNumState - 1);
  };

  const nextPageButton = () => {
    setPageNumState(pageNumState + 1);
  };

  return (
    <PagenationDiv>
      <ArrowImgDiv arrow={"left"} pageNumState={pageNumState}>
        <ArrowA onClick={prevPageButton}>
          <Image src={arrowIcon} alt="arrowIcon" width={36} height={36}></Image>
        </ArrowA>
      </ArrowImgDiv>
      <PageNumberDiv>
        <PageNumberP>{pageNumState}</PageNumberP>
      </PageNumberDiv>
      <ArrowImgDiv arrow={"right"} pageNumState={pageNumState}>
        <ArrowA onClick={nextPageButton}>
          <Image src={arrowIcon} alt="arrowIcon" width={36} height={36}></Image>
        </ArrowA>
      </ArrowImgDiv>
    </PagenationDiv>
  );
};

const PagenationDiv = styled.div`
  height: 36px;
  width: 155px;
  margin: 0 auto;
`;

const ArrowImgDiv = styled.div<{ arrow: String; pageNumState: Number }>`
  width: 36px;
  height: 100%;
  float: left;
  transform: ${(props) => (props.arrow === "right" ? "rotate(180deg)" : "")};
  cursor: pointer;
  visibility: ${(props) =>
    props.arrow === "left" && props.pageNumState === 1 ? "hidden" : ""};
`;

const ArrowA = styled.a``;

const PageNumberDiv = styled.div`
  width: 83px;
  height: 100%;
  float: left;
`;

const PageNumberP = styled.p`
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 30px;
  line-height: 36px;
`;
