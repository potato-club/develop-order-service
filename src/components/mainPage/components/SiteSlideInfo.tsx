import Image from "next/image";
import styled from "styled-components";
import { customColor } from "../../customColor";
import { AiFillHeart, AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Props {
  rank?: string;
  title: string;
  like?: number;
  star?: number;
  tag?: string[];
}

export const SiteSlideInfo = ({ rank, title, like, star, tag }: Props) => {
  return (
    <Wrapper>
      <WrapperInner>
        <Title>{title}</Title>
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
          <Tags>
            {tag?.map((i) => (
              <Tag key={i}>#{i}</Tag>
            ))}
          </Tags>
          <Rating>
            <Like>
              <AiFillHeart color="#fc4646" size={18} />
              {like}
            </Like>
            <Star>
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiFillStar size={20} />
              <AiOutlineStar size={20} />
              <AiOutlineStar size={20} />
            </Star>
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
  top: -20px;
  left: 16px;
`;
const Title = styled.p`
  display: flex;
  position: absolute;
  top: -16px;
  left: 50%;
  font-size: 18px;
  white-space: nowrap;
  color: white;
  transform: translateX(calc(-50%));
  width: calc(100% - 32px);
  padding: 12px 0 10px 16px;
  background: ${customColor.indigo3 + "99"};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  justify-content: center;
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
  padding: 8px 16px 12px;
`;
const Tags = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: flex-start;
  gap: 0 6px;
`;
const Tag = styled.p`
  font-size: 14px;
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
  font-size: 16px;
  align-items: flex-end;
  gap: 2px;
  justify-content: center;
`;
const Star = styled.p`
  display: flex;
  height: 100%;
  font-size: 16px;
  align-items: flex-end;
  justify-content: center;
  color: #f0f06a;
`;
