import styled from "styled-components";

export const Pagination = () => {
  return (
    <PaginationBox>
      <Numbers>1</Numbers>
    </PaginationBox>
  );
};

const PaginationBox = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  padding: 28px 0 40px;
  font-size: 16px;
`;
const Numbers = styled.div`
  display: flex;
  flex-direction: row;
`;
