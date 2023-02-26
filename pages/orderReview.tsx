import styled from "styled-components";
import orderData from "../src/assets/data.json";
import { ReviewTop } from "../src/components/orderReviewPage/ReviewTop";
import { ReviewContnets } from "../src/components/orderReviewPage/ReviewContents";
import { ReviewBottm } from "../src/components/orderReviewPage/ReviewBottom";
export default function OrderReview() {
  // "id": 1,
  // "title": "1번 웹사이트",
  // "purpose": "상품 판매",
  // "period": "6",
  // "progress": 100

  return (
    <Wrapper>
      <ReviewTop />
      <ReviewContnets />
      <ReviewBottm />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1024px;
  height: 1800px;
  padding: 0 12px;
`;
