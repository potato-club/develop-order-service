import styled from "styled-components";
import { customColor } from "../customColor";
import { ModifyOrderItem } from "./components/ModifyOrderItem";
import { SearchBar } from "./components/SearchBar";
import { contentType, contentsDataType } from "../../../pages/orderReview";
import { useEffect, useState } from "react";
import { Pagenation } from "./components/Pagenation";
import { useQueryGetOrderList } from "../../hooks/query/orderReview/useQueryGetOrderList";
import { useRecoilValue } from "recoil";
import {
  modifyOrderContentsFilterState,
  modifyOrderPageState,
} from "../../recoil/modifyOrderPageState";

export const AdminModifyOrderPage = () => {
  const pageState = useRecoilValue(modifyOrderPageState);
  const contentsFilterState = useRecoilValue(modifyOrderContentsFilterState);

  const { data, refetch } = useQueryGetOrderList(
    contentsFilterState,
    pageState
  );

  useEffect(() => {
    refetch();
    console.log(data);
  }, [pageState, contentsFilterState, refetch, data]);

  return (
    <Wrapper>
      <SearchBar />
      <WrapperInner>
        {data?.content.map((item: contentType, index: number) => (
          <ModifyOrderItem key={index} contentsData={item} />
        ))}
      </WrapperInner>
      <Pagenation totalPages={data && data.totalPages} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex: auto;
  flex-direction: column;
  padding: 16px 28px 28px 28px;
  color: ${customColor.white};
  overflow-y: overlay;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    width: 14px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${customColor.gray};
    border-radius: 10px;
    background-clip: padding-box;
    border: 4px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-button:start:decrement {
    background-color: transparent;
    height: 56px;
  }
  ::-webkit-scrollbar-button:end:increment {
    background-color: transparent;
    height: 24px;
  }
`;
const WrapperInner = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  padding-top: 20px;
  gap: 12px;
`;
