import Image from "next/image";
import styled from "styled-components";
import { customColor } from "../../../../customColor";
import StarRatings from "react-star-ratings";
import { AiFillHeart } from "react-icons/ai";
import { MyLikeType } from "../../../../../hooks/query/user/useQueryGetMyLikes";
import Router from "next/router";

export const LikeItem = (props: { data: MyLikeType }) => {
  return (
    <Wrapper
      onClick={() => {
        Router.push(`/orderDetail?id=${props.data.id}`);
      }}
    >
      <ThumbnailBox>
        {props.data.thumbnail != null && (
          <Image
            src={props.data.thumbnail.imageUrl}
            alt={props.data.thumbnail.imageName}
            fill
            style={{ objectFit: "cover" }}
          />
        )}
      </ThumbnailBox>
      <SiteName>{props.data.siteName}</SiteName>
      <Rating>
        <Like>
          <AiFillHeart color="#fc4646" size={18} />
          {props.data.likes}
        </Like>
        <StarRatingsStyle
          rating={10 / 2}
          starRatedColor={customColor.yellow}
          starEmptyColor={customColor.lightGray}
          starDimension="20px"
          starSpacing="0px"
          numberOfStars={props.data.rating ?? 0}
        />
      </Rating>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  color: ${customColor.white};
  overflow: visible;
  scroll-behavior: smooth;
  transition: height 0.6s ease;
  background: ${customColor.white};
  box-shadow: 0px 2px 6px 0px ${customColor.black + "33"};
  border-radius: 4px;
  padding: 20px;
  aspect-ratio: 3/2;
  max-width: 420px;
  align-self: center;
  justify-self: center;
  align-items: center;
`;
const ThumbnailBox = styled.div`
  display: flex;
  background: ${customColor.lightGray};
  height: 100%;
  width: 100%;
  transform: translateY(-40px);
  border-radius: 4px;
  box-shadow: 0px 1px 4px 0px ${customColor.black + "33"};
  overflow: hidden;
`;
const SiteName = styled.div`
  display: flex;
  position: absolute;
  color: ${customColor.black};
  bottom: 36px;
  font-size: 16px;
`;
const Rating = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  bottom: 10px;
`;
const Like = styled.p`
  display: flex;
  height: 100%;
  font-size: 14px;
  align-items: flex-end;
  gap: 4px;
  justify-content: center;
  color: ${customColor.black};
  align-items: center;
`;
const StarRatingsStyle = styled(StarRatings)`
  &.CustomStarRating .fa-star:before {
    border-radius: 50%;
  }
`;
