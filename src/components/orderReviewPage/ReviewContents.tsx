import { useRouter } from "next/router";
import { customColor } from "../customColor";
import styled from "styled-components";
import { contentsDataType } from "../../../pages/orderReview";
import { tokenService } from "../../libs/tokenService";

type propTypes = {
  contentsData?: contentsDataType;
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

export const ReviewContnets = ({
  contentsData,
  modalState,
  getModalState,
}: propTypes) => {
  const router = useRouter();

  return (
    <WrapperContents>
      {contentsData === undefined || contentsData.numberOfElements === 0 ? (
        <AlertDiv>항목에 해당하는 발주가 없습니다.</AlertDiv>
      ) : (
        contentsData.content &&
        contentsData.content.map((item: any) => {
          function convertedState(): number {
            if (item.state === "START") {
              return 0;
            } else if (item.state === "DESIGN") {
              return 1;
            } else if (item.state === "PUBLISH") {
              return 2;
            } else if (item.state === "IMPLEMEN") {
              return 3;
            } else if (item.state === "FINAL") {
              return 4;
            } else if (item.state === "COMPLETED") {
              return 5;
            } else {
              return 0;
            }
          }
          return (
            <ContentDiv key={item.id}>
              <RouterA
                onClick={() => {
                  if (tokenService.getToken()) {
                    router.push({
                      pathname: "orderDetail",
                      query: { id: `${item.id}` },
                    });
                  } else {
                    getModalState({
                      modalRole: "noLogin",
                      state: true,
                      text: "로그인 하지 않은 상태에서는 게시물에 접근할 수 없습니다.",
                      onClickConfirmButton: () => {},
                    });
                  }
                }}
              >
                <PreviewImg>
                  웹페이지
                  <br />
                  미리보기
                </PreviewImg>
                <OrderTitleH2>
                  #{item.id} {item.siteName}
                </OrderTitleH2>
              </RouterA>

              <OrderInfoP>사용 목적 : {item.purpose}</OrderInfoP>
              <OrderInfoP>
                제작 기간 : {item.createdDate?.split("T")[0]}~
                {item.completedDate?.split("T")[0]}
              </OrderInfoP>
              <OrderStateDiv state={item.stae}>
                <OrderInfoP>진행도 </OrderInfoP>
                <OrderStateCircle
                  circleNumber={1}
                  convertedState={convertedState()}
                >
                  디자인
                  <br />
                  회의
                </OrderStateCircle>
                <OrderStateCircle
                  circleNumber={2}
                  convertedState={convertedState()}
                >
                  퍼블리싱
                </OrderStateCircle>
                <OrderStateCircle
                  circleNumber={3}
                  convertedState={convertedState()}
                >
                  페이지
                  <br />
                  기능 구현
                </OrderStateCircle>
                <OrderStateCircle
                  circleNumber={4}
                  convertedState={convertedState()}
                >
                  최종수정
                </OrderStateCircle>
              </OrderStateDiv>
            </ContentDiv>
          );
        })
      )}
    </WrapperContents>
  );
};

const WrapperContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const ContentDiv = styled.div`
  @media screen and (min-width: 1024px) {
    height: 300px;
    padding: 50px 0 50px 50px;
  }
  @media screen and (max-width: 1023px) {
    height: 225px;
    padding: 37.5px 0 37.5px 37.5px;
  }
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const AlertDiv = styled.div`
  @media screen and (min-width: 1024px) {
    height: 300px;
    font-size: 25px;
  }
  @media screen and (max-width: 1023px) {
    height: 225px;
    font-size: 19px;
  }
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PreviewImg = styled.div`
  @media screen and (min-width: 1024px) {
    width: 150px;
    height: 200px;
    font-size: 20px;
    margin-right: 30px;
  }
  @media screen and (max-width: 1023px) {
    width: 112.5px;
    height: 150px;
    font-size: 15px;
    margin-right: 22.5px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${customColor.blue};
  float: left;
`;

const OrderTitleH2 = styled.h2`
  @media screen and (min-width: 1024px) {
    font-size: 27px;
    line-height: 50px;
  }
  @media screen and (max-width: 1023px) {
    font-size: 20px;
    line-height: 37.5px;
  }
`;

const OrderInfoP = styled.p`
  display: flex;
  align-items: center;
  @media screen and (min-width: 1024px) {
    font-size: 20px;
    height: 50px;
  }
  @media screen and (max-width: 1023px) {
    font-size: 15px;
    height: 37.5px;
  }
`;

const OrderStateDiv = styled.div<{ state: string }>`
  @media screen and (min-width: 1024px) {
    height: 50px;
  }
  @media screen and (max-width: 1023px) {
    height: 37.5px;
  }
  /* width: 770px; */
  display: ${(props) => (props.state === "COMPLETED" ? "none" : "flex")};
`;

const OrderStateCircle = styled.div<{
  convertedState: number;
  circleNumber: number;
}>`
  @media screen and (min-width: 1024px) {
    width: 50px;
    height: 50px;
    font-size: 13px;
    margin-left: 25px;
  }
  @media screen and (max-width: 1023px) {
    width: 37.5px;
    height: 37.5px;
    font-size: 9px;
    margin-left: 18.5px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 50%;
  background-color: ${(props) =>
    props.circleNumber <= props.convertedState
      ? customColor.blue
      : customColor.lightGray};
`;

const RouterA = styled.a`
  cursor: pointer;
`;
