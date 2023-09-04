import styled from "styled-components";
import Image from "next/image";
import arrowIcon from "../../../public/img/review/arrow.png";
import { useRecoilState } from "recoil";
import { reviewPageState } from "../../recoil/reviewPageState";

export const ReviewBottm = ({ totalPages }: { totalPages?: number }) => {
  const [pageState, setPageState] = useRecoilState(reviewPageState);

  return (
    <BottomWrapper>
      <PagenationDiv>
        <ArrowImgDiv
          arrow={"left"}
          pageState={pageState}
          totalPages={totalPages}
        >
          <ArrowA
            onClick={() => {
              setPageState(pageState - 1);
            }}
          >
            <Image src={arrowIcon} alt="arrowIcon" fill></Image>
          </ArrowA>
        </ArrowImgDiv>
        <PageNumberDiv>
          <PageNumberP>{pageState}</PageNumberP>
        </PageNumberDiv>
        <ArrowImgDiv
          arrow={"right"}
          pageState={pageState}
          totalPages={totalPages}
        >
          <ArrowA
            onClick={() => {
              setPageState(pageState + 1);
            }}
          >
            <Image src={arrowIcon} alt="arrowIcon" fill></Image>
          </ArrowA>
        </ArrowImgDiv>
      </PagenationDiv>
    </BottomWrapper>
  );
};

const BottomWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    height: 323px;
  }
  @media screen and (max-width: 1023px) {
    height: 242px;
  }
  width: 100%;
  display: flex;
  align-items: center;
`;

const PagenationDiv = styled.div`
  @media screen and (min-width: 1024px) {
    height: 36px;
    width: 155px;
  }
  @media screen and (max-width: 1023px) {
    height: 27px;
    width: 116px;
  }

  display: flex;
  margin: 0 auto;
`;

const ArrowImgDiv = styled.div<{
  arrow: string;
  pageState: number;
  totalPages?: number;
}>`
  @media screen and (min-width: 1024px) {
    width: 36px;
    height: 36px;
  }
  @media screen and (max-width: 1023px) {
    width: 27px;
    height: 27px;
  }
  position: relative;
  transform: ${(props) => (props.arrow === "right" ? "rotate(180deg)" : "")};
  cursor: pointer;
  visibility: ${(props) =>
    (props.arrow === "left" && props.pageState === 1) ||
    (props.arrow === "right" && props.pageState === props.totalPages) ||
    props.totalPages === 0
      ? "hidden"
      : ""};
`;

const ArrowA = styled.a``;

const PageNumberDiv = styled.div`
  @media screen and (min-width: 1024px) {
    width: 15px;
    height: 36px;
    margin: 0 34px;
    font-size: 30px;
  }
  @media screen and (max-width: 1023px) {
    width: 11px;
    height: 27px;
    margin: 0 25px;
    font-size: 22.5px;
  }
  display: flex;
`;

const PageNumberP = styled.p``;
