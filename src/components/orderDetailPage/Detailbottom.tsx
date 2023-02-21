import styled from "styled-components";
import detailData from "../../assets/data2.json";
import Image from "next/image";
import heartIcon from "../../assets/img/detail/heart.png";

export const DetailBottm = () => {
  const like = detailData.data2.like;
  const progress = detailData.data1.progress;
  return (
    <BottomWrapper>
      <LikeButton progress={progress}>
        좋아요
        <LikeButtonP>
          <ImageContainer>
            <Image src={heartIcon} alt="icon" width={23} height={23}></Image>
          </ImageContainer>
          {like}
        </LikeButtonP>
      </LikeButton>
      <ListButton>목록</ListButton>
    </BottomWrapper>
  );
};

const BottomWrapper = styled.div`
  position: relative;
  height: 323px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ListButton = styled.button`
  position: absolute;
  right: 64px;
  width: 100px;
  height: 40px;
  border-radius: 7px;
  font-size: 20px;
  border: 1px solid black;
`;

const LikeButton = styled.button<{ progress: String }>`
  display: ${(props) => (props.progress === "ongoing" ? "none" : "")};
  width: 150px;
  height: 80px;
  border-radius: 10px;
  border: 1px solid black;
  margin: 0 auto;
  font-size: 23px;
`;

const LikeButtonP = styled.p`
  line-height: 23px;
`;

const ImageContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
