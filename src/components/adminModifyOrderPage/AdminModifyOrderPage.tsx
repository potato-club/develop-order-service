import styled from "styled-components";
import { customColor } from "../customColor";
import { ModifyOrderItem } from "./components/ModifyOrderItem";
import { SearchBar } from "./components/SearchBar";
import { contentsDataType } from "../../../pages/orderReview";
import { useEffect, useState } from "react";
import { Pagenation } from "./components/Pagenation";
import { useQueryGetOrderList } from "../../hooks/query/orderReview/useQueryGetOrderList";
import { useRecoilValue } from "recoil";
import {
  modifyOrderContentsFilterState,
  modifyOrderPageState,
} from "../../recoil/modifyOrderPageState";

export const AdminModifyOrderPage = () => {
  const [contentsDataState, setContentsDataState] = useState<
    contentsDataType | undefined
  >(undefined);

  function getContentsDataState(contentsDataState: contentsDataType) {
    setContentsDataState(contentsDataState);
  }

  const pageState = useRecoilValue(modifyOrderPageState);
  const contentsFilterState = useRecoilValue(modifyOrderContentsFilterState);

  const { data, refetch } = useQueryGetOrderList(
    contentsFilterState,
    pageState,
    getContentsDataState
  );

  useEffect(() => {
    refetch();
    console.log(contentsDataState);
  }, [pageState, contentsFilterState, refetch, data, contentsDataState]);

  return (
    <Wrapper>
      <SearchBar />
      <WrapperInner>
        {contentsDataState?.content.map((item, index) => (
          <ModifyOrderItem key={index} contentsData={item} />
        ))}
      </WrapperInner>
      <Pagenation
        totalPages={contentsDataState && contentsDataState.totalPages}
      />
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
