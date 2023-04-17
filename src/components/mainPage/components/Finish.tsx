import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { ImBook } from "react-icons/im";
import dayjs from "dayjs";
import { BsFillBookmarkFill } from "react-icons/bs";
import Image from "next/image";
import { customColor } from "../../customColor";
import Confetti from "react-confetti";

export const Finish = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  return (
    <Wrapper id="finish" ref={ref}>
      {inView && (
        <CustomConfetti
          width={1024}
          height={900}
          numberOfPieces={300}
          recycle={false}
          gravity={0.07}
          tweenDuration={6000}
          colors={[
            customColor.blue,
            customColor.indigo3,
            customColor.lightGray,
            customColor.gray,
            customColor.yellow_,
          ]}
        />
      )}

      <Title className={inView ? "finish" : "finish1"}>#완성</Title>
      <WrapperInner className={inView ? "final_edit" : "final_edit1"}>
        <Header>
          <ImBook color={customColor.blue} size={16} />
          {dayjs().format("YYYY-MM-DD")}
        </Header>
        <Body>
          <BodyLeft>
            <BodyInner>
              <Image
                src="/img/main/publishingLeft.png"
                fill
                style={{ objectFit: "cover" }}
                alt="publishingLeft"
              />
              <Date>
                {dayjs().subtract(1, "day").format("YYYY년 MM월 DD일")}
                😘🌧️
              </Date>
              <Content>
                가방이랑 옷을 샀다! <br />
                빨리왔으면 좋 ! 겠 ! 다 !
              </Content>
              <EditBox></EditBox>
            </BodyInner>
          </BodyLeft>
          <BodyRight>
            <BodyInner>
              <Image
                src="/img/main/publishingRight.png"
                fill
                style={{ objectFit: "cover" }}
                alt="publishingRight"
              />
              <Date style={{ right: 20 }}>
                😎🌤️
                {dayjs().format("YYYY년 MM월 DD일")}
              </Date>
              <Content_>
                외계인 영화를 봤다...
                <br />
                외계인처럼 보이는 선글라스....
                <br />
                탐난다..!
              </Content_>
            </BodyInner>
          </BodyRight>
          <BookMark className={inView ? "final_edit" : "final_edit3"}>
            <BookMarkIcons />
          </BookMark>
        </Body>
      </WrapperInner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 80px 60px 0;
  .finish {
    opacity: 1;
  }
  .finish1 {
    opacity: 0;
  }
  .finish2 {
    opacity: 0;
    width: 0px;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.5px;
  transition: all 0.8s ease;
  white-space: nowrap;
  margin-bottom: 40px;
`;
const WrapperInner = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  aspect-ratio: 16/9;
  background: #eee;
  overflow: hidden;
`;
const Header = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  height: 7%;
  width: 100%;
  background: #eee;
  box-shadow: 0px -1px 8px 2px ${customColor.black + "33"},
    0px 4px 12px 3px ${customColor.white};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  color: ${customColor.darkGray};
  font-size: 14px;
  gap: 6px;
  z-index: 1;
`;
const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding-top: 4%;
`;
const BodyLeft = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background: #eee;
  padding: 16px;
  padding-right: 10px;
`;
const BodyRight = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background: #eee;
  padding: 16px;
  padding-left: 10px;
`;
const BodyInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #eee;
  width: 100%;
  height: 100%;
  box-shadow: -2px 4px 8px 2px ${customColor.black + "33"},
    2px -4px 8px 2px ${customColor.white};
  border-radius: 16px;
  overflow: hidden;
  padding: 24px 20px;
`;
const Date = styled.div`
  display: flex;
  position: absolute;
  font-size: 16px;
  font-weight: bold;
`;
const Content = styled.div`
  display: flex;
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  top: 72px;
  left: 60px;
  line-height: 30px;
  white-space: nowrap;
  text-align: left;
  width: 215px;
  overflow: hidden;
`;
const Content_ = styled.div`
  display: flex;
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  top: 72px;
  right: 40px;
  line-height: 30px;
  white-space: nowrap;
  text-align: right;
  width: 215px;
  overflow: hidden;
`;
const EditBox = styled.div`
  display: flex;
  position: absolute;
  top: 38px;
`;
const BookMark = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 6%;
  left: 50%;
  transform: translate(calc(-50% + 26px), 0);
  width: 18px;
  height: 70%;
  justify-content: end;
  background: #a44;
  align-items: center;
  box-shadow: 2px 2px 4px 1px ${customColor.black + "33"};
`;
const BookMarkIcons = styled(BsFillBookmarkFill)`
  font-size: 24px;
  color: #a44;
  transform: translateY(6px);
`;
const CustomConfetti = styled(Confetti)`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
`;
