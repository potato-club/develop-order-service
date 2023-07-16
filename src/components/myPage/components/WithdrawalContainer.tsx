import styled from "styled-components";
import { customColor } from "../../customColor";
import { VscSignOut } from "react-icons/vsc";
import { Modal } from "../../modal/modal";
import { useState } from "react";
import { useQueryDeleteUser } from "../../../hooks/query/user/useQueryDeleteUser";

export const WithdrawalContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const deleteUserMutation = useQueryDeleteUser(() => {});
  const handleWithdrawal = () => {
    deleteUserMutation.mutate();
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <Modal
        isOpen={isModalOpen}
        content="회원탈퇴를 진행하시겠습니까?"
        closeModal={() => setIsModalOpen(false)}
        yesEventFunc={handleWithdrawal}
      />
      <Title>
        <TitleInner>
          <MainTitle>
            <VscSignOut size={35} />
            회원탈퇴를 하시겠습니까?
          </MainTitle>
        </TitleInner>
        <SubTitle>
          <SubTitleInner>
            <WillDelete>내 발주신청</WillDelete>
            <WillDelete>내 발주현황</WillDelete>
            <WillDelete>내 좋아요</WillDelete>
          </SubTitleInner>
          정보는 계속 남아있지만,
          <br />더 이상 고객님의 계정과 연동되지 않아요
        </SubTitle>
      </Title>

      <WithdrawalButton onClick={() => setIsModalOpen(true)}>
        탈퇴하기
      </WithdrawalButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20% 0;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;
const TitleInner = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  color: ${customColor.black};
  font-weight: bold;
`;
const MainTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: flex-end;
  font-size: 16px;
`;
const SubTitleInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 20px;
  background: ${customColor.lightGray};
  border-radius: 4px;
  border-left: 2px solid ${customColor.red};
  box-shadow: inset 0px 2px 4px 2px ${customColor.black + "33"};
`;
const WillDelete = styled.div`
  display: flex;
  font-size: 20px;
  color: ${customColor.red};
  font-weight: normal;
`;
const WithdrawalButton = styled.button`
  display: flex;
  width: 252px;
  height: 72px;
  background: ${customColor.indigo3};
  color: ${customColor.white};
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;
