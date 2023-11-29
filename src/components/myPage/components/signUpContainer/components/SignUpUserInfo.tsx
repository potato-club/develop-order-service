import styled from "styled-components";
import { HiOutlineUser } from "react-icons/hi";
import { customColor } from "../../../../customColor";

interface Props {
  name: string | undefined;
  email: string | undefined;
  hotLine: string | undefined;
  subLine: string | undefined;
}

export const SignUpUserInfo = (props: Props) => {
  return (
    <Content>
      <Label>
        <HiOutlineUser size={20} />
        신청자 정보
      </Label>
      <Box>
        <BoxItem>
          <BoxItemLabel>*성함 또는 회사명(단체명)</BoxItemLabel>
          <BoxItemContent>{props.name}</BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>*이메일</BoxItemLabel>
          <BoxItemContent>{props.email}</BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>*전화번호1</BoxItemLabel>
          <BoxItemContent>
            {props.hotLine?.replace(
              /^(\+82|0)(\d{2})(\d{4})(\d{4})$/,
              "0$2-$3-$4"
            )}
          </BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>전화번호2</BoxItemLabel>
          <BoxItemContent>
            {props.subLine?.replace(
              /^(\+82|0)(\d{2})(\d{4})(\d{4})$/,
              "0$2-$3-$4"
            )}
          </BoxItemContent>
        </BoxItem>
      </Box>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 16px;
  width: 100%;
  align-items: flex-start;
`;
const Label = styled.p`
  display: flex;
  width: 120px;
  height: 21px;
  font-size: 18px;
  color: ${customColor.black};
  letter-spacing: -0.5px;
  font-weight: bold;
  gap: 0 4px;
  align-items: center;
  justify-content: flex-end;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  flex: auto;
  padding-top: 12px;
`;
const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px 0;
`;
const BoxItemLabel = styled.div`
  display: flex;
  font-size: 14px;
  color: ${customColor.indigo3};
  letter-spacing: -0.5px;
  padding-left: 12px;
  justify-content: space-between;
  align-items: flex-end;
  white-space: nowrap;
`;
const BoxItemContent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${customColor.darkGray};
  min-height: 38px;
  width: 100%;
  align-items: center;
  padding-left: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
`;
