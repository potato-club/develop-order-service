import styled from "styled-components";
import { PreviewSwiper } from "./PreviewSwiper";
import { DetailInfo } from "./DetailInfo";

import { detailDataTypes } from "../../../pages/orderDetail";
import { tokenService } from "../../libs/tokenService";

type propTypes = {
  detailData?: detailDataTypes;
  modalState: {
    modalRole: string;
    state: boolean;
    text: string;
    onClickConfirmButton: () => void;
  };
  getModalState: (modalState: {
    modalRole: string;
    state: boolean;
    text: string;
    onClickConfirmButton: () => void;
  }) => void;
};

export const DetailContnets = ({
  detailData,
  modalState,
  getModalState,
}: propTypes) => {

  return (
    <WrapperContents>
      <DetailInfo
        detailData={detailData}
        modalState={modalState}
        getModalState={getModalState}
      />
      <PreviewSwiper images={detailData && detailData.images}></PreviewSwiper>
    </WrapperContents>
  );
};

const WrapperContents = styled.div`
  @media screen and (min-width: 1024px) {
    height: 1200px;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 1023px) {
    height: 900px;
    padding-bottom: 37.5px;
  }
  width: 100%;
  position: relative;
  border-bottom: 1px solid black;
`;
