import styled from "styled-components";
import { customColor } from "../../customColor";
import { useRecoilState } from "recoil";
import { modifyOrderPageState } from "../../../recoil/modifyOrderPageState";

export const Pagenation = ({ totalPages }: { totalPages?: number }) => {
  const [pageState, setPageState] = useRecoilState(modifyOrderPageState);
  return (
    <Wrapper>
      <PagenationDiv>
        <Button
          buttonRole="prev"
          pageState={pageState}
          totalPages={totalPages}
          onClick={() => setPageState(pageState - 1)}
        >
          prev
        </Button>
        {pageState}
        <Button
          buttonRole="next"
          pageState={pageState}
          totalPages={totalPages}
          onClick={() => setPageState(pageState + 1)}
        >
          next
        </Button>
      </PagenationDiv>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  color: ${customColor.white};
  align-items: center;
  justify-content: center;
`;

const PagenationDiv = styled.div``;

const Button = styled.button<{
  buttonRole: "prev" | "next";
  pageState: number;
  totalPages?: number;
}>`
  visibility: ${(props) =>
    (props.buttonRole === "prev" && props.pageState === 1) ||
    (props.buttonRole === "next" && props.pageState === props.totalPages) ||
    props.totalPages === 0
      ? "hidden"
      : ""};
  color: ${customColor.white};
  margin: 10px;
`;
