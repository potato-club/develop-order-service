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
            <Image
              src={arrowIcon}
              alt="arrowIcon"
              width={36}
              height={36}
            ></Image>
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
            <Image
              src={arrowIcon}
              alt="arrowIcon"
              width={36}
              height={36}
            ></Image>
          </ArrowA>
        </ArrowImgDiv>
      </PagenationDiv>
    </BottomWrapper>
  );
};

const BottomWrapper = styled.div`
  height: 323px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const PagenationDiv = styled.div`
  height: 36px;
  width: 155px;
  margin: 0 auto;
`;

const ArrowImgDiv = styled.div<{
  arrow: string;
  pageState: number;
  totalPages?: number;
}>`
  width: 36px;
  height: 100%;
  float: left;
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
