import styled from "styled-components";
import { MdTune } from "react-icons/md";
import { ColorPalette } from "./ColorPalette";
import { TwoRadioBoxs } from "./TwoRadioBoxs";
import { customColor } from "../../../../customColor";

interface Props {
  mainColor: string[] | undefined;
  subColor: string[] | undefined;
  page: number | undefined;
  login: boolean | undefined;
  database: boolean | undefined;
  files: { fileName: string; id: number; s3Url: string }[] | undefined;
  etc: string | undefined;
  meeting: string | undefined;
}

export const SignUpAddInfo = (props: Props) => {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const date = props.meeting?.split("T");
  const time = new Date(props.meeting!);

  const handleDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "downloaded_image.jpg";
    link.target = "_blank"; // Optional: 이미지를 새 탭에서 열기
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Content>
      <Lbel>
        <MdTune size={20} />
        추가 정보
      </Lbel>
      <Box>
        <BoxItem>
          <BoxItemLabel>브랜드 컬러1</BoxItemLabel>
          <BoxItemContent>
            <ColorPalette data={props.mainColor!} />
          </BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>브랜드 컬러2</BoxItemLabel>
          <BoxItemContent>
            <ColorPalette data={props.subColor!} />
          </BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>페이지 수</BoxItemLabel>
          <BoxItemContent>{props.page}</BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>로그인 필요 유무</BoxItemLabel>
          <BoxItemContent>
            <TwoRadioBoxs value1="예" value2="아니요" data={props.login!} />
          </BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>DB 필요 유무</BoxItemLabel>
          <BoxItemContent>
            <TwoRadioBoxs value1="예" value2="아니요" data={props.database!} />
          </BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>사이트 컨셉 참고자료 첨부</BoxItemLabel>
          <BoxItemContent>
            {date !== undefined &&
              props.files?.map((i, id) => (
                <FileButton key={id} onClick={() => handleDownload(i.s3Url)}>
                  {i.fileName}
                </FileButton>
              ))}
          </BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>기타사항</BoxItemLabel>
          <BoxItemContent>{props.etc}</BoxItemContent>
        </BoxItem>
        <BoxItem>
          <BoxItemLabel>*첫 미팅 희망날짜</BoxItemLabel>
          <BoxItemContent>
            {date !== undefined && date?.[0]}({daysOfWeek[time.getDay()]}) /{" "}
            {date?.[1].slice(0, 5)}
          </BoxItemContent>
        </BoxItem>
      </Box>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0 16px;
  align-items: flex-start;
`;
const Lbel = styled.p`
  display: flex;
  min-width: 120px;
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
  position: relative;
  width: 100%;
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
  padding: 10px 12px 9px 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
const FileButton = styled.button`
  display: block;
  width: calc(100vw - 420px);
  font-size: 14px;
  color: ${customColor.white};
  letter-spacing: -1px;
  text-decoration: underline;
  cursor: pointer;
  text-align: start;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
