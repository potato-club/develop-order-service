import Image from "next/image";
import styled from "styled-components";
import { customColor } from "../../customColor";
import { AiFillHeart } from "react-icons/ai";
import StarRatings from "react-star-ratings";

interface Props {
  rank: string | null;
  title: string;
  like: number;
  star: number;
}
interface TitleProps {
  isImage: boolean;
}

export const SiteSlideInfo = ({ rank, title, like, star }: Props) => {
  return (
    <Wrapper>
      <WrapperInner>
        {rank && (
          <Rank>
            <Image
              src={`/img/main/${rank}.png`}
              alt={rank}
              width={60}
              height={60}
            />
          </Rank>
        )}
        <RatingInfo>
          <Title>{title}</Title>
          <Rating>
            <Like>
              <AiFillHeart color="#fc4646" size={18} />
              {like}
            </Like>
            <StarRatingsStyle
              rating={star / 2}
              starRatedColor={customColor.yellow}
              starEmptyColor={customColor.lightGray}
              starDimension="20px"
              starSpacing="0px"
              numberOfStars={5}
            />
          </Rating>
        </RatingInfo>
      </WrapperInner>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const WrapperInner = styled.article`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;
const Rank = styled.div`
  display: flex;
  position: absolute;
  top: -24px;
  left: 16px;
`;
const RatingInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 72px;
  bottom: 0;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px 12px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: flex-start;
  font-size: 16px;
  font-weight: bold;
`;
const Rating = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
const Like = styled.p`
  display: flex;
  height: 100%;
  font-size: 15px;
  align-items: flex-end;
  gap: 3px;
  justify-content: center;
`;
const StarRatingsStyle = styled(StarRatings)`
  &.CustomStarRating .fa-star:before {
    border-radius: 50%;
  }
`;
