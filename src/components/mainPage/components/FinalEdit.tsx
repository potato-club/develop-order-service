import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Image from "next/image";
import { customColor } from "../../customColor";
import dayjs from "dayjs";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { ImBook } from "react-icons/im";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsFillBookmarkFill } from "react-icons/bs";

export const FinalEdit = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  return (
    <Wrapper id="final_edit" ref={ref}>
      <Title className={inView ? "final_edit" : "final_edit1"}>
        #최종수정
        <Explain className={inView ? "final_edit" : "final_edit1"}>
          <DoubleQuotesL />
          완성된 웹페이지를 보며 수정할 부분을 확인합니다
          <DoubleQuotesR />
        </Explain>
      </Title>
      <WrapperInner className={inView ? "final_edit" : "final_edit1"}>
        <Header>
          <ImBook color={customColor.blue} size={16} />
          {dayjs().format("YYYY-MM-DD")}
        </Header>
        <Body>
          <BodyLeft>
            <BodyInner>
              <Image
                src="/img/main/stickers/sticker10.png"
                alt="sticker"
                width={400}
                height={420}
                style={{
                  position: "absolute",
                  bottom: "-40px",
                  left: "-40px",
                  transform: " rotate(-30deg)",
                }}
              />
              <Image
                src="/img/main/stickers/sticker7.png"
                alt="sticker"
                width={80}
                height={100}
                style={{ position: "absolute", bottom: "160px", left: "100px" }}
              />
              <Image
                src="/img/main/stickers/sticker3.png"
                alt="sticker"
                width={100}
                height={100}
                style={{ position: "absolute", bottom: "150px", left: "30px" }}
              />
              <Image
                src="/img/main/stickers/sticker5.png"
                alt="sticker"
                width={160}
                height={180}
                style={{ position: "absolute", bottom: "10px", left: "40px" }}
              />
              <Image
                src="/img/main/stickers/sticker6.png"
                alt="sticker"
                width={180}
                height={310}
                style={{ position: "absolute", bottom: 0, right: 0 }}
              />
              <Image
                src="/img/main/stickers/sticker8.png"
                alt="sticker"
                width={160}
                height={130}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "-16px",
                  transform: "translate(0,calc(-50% - 90px)) rotate(20deg)",
                }}
              />
              <Date>
                {dayjs().subtract(1, "day").format("YYYY년 MM월 DD일")}
              </Date>
              <Date_ className={inView ? "final_edit" : "final_edit2"}>
                0000년 00월 00일
              </Date_>
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
                src="/img/main/stickers/sticker11.png"
                alt="sticker"
                fill
                style={{
                  objectFit: "cover",
                  transform: "rotate(-180deg) translate(-100px,-100px)",
                }}
              />
              <Image
                src="/img/main/stickers/sticker4.png"
                alt="sticker"
                width={160}
                height={160}
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                }}
              />
              <Image
                src="/img/main/stickers/sticker2.png"
                alt="sticker"
                width={100}
                height={110}
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "140px",
                }}
              />
              <Image
                src="/img/main/stickers/sticker1.png"
                alt="sticker"
                width={220}
                height={280}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translate(0,calc(-50% - 60px))",
                }}
              />
              <Image
                src="/img/main/stickers/sticker9.png"
                alt="sticker"
                width={140}
                height={120}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "20px",
                  transform: "rotateY(-180deg) translate(0,-50%)",
                }}
              />
              <Date style={{ right: 20 }}>
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
          <ExplainText_ className={inView ? "final_edit" : "final_edit2"}>
            즐겨찾기 기능을 가진
            <br />
            북마크가 있었으면 좋겠어요!
          </ExplainText_>
        </Body>
        <ExplainText className={inView ? "final_edit" : "final_edit2"}>
          날짜 뿐만 아니라 그날의 기분이나
          <br />
          날씨도 기록할 수 있었으면 좋겠어요!
        </ExplainText>
        <SmileIcons className={inView ? "final_edit" : "final_edit1"} />
        <WeatherIcons className={inView ? "final_edit" : "final_edit1"} />
      </WrapperInner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 80px 0 0;
  .final_edit {
    opacity: 1;
  }
  .final_edit1 {
    opacity: 0;
  }
  .final_edit2 {
    opacity: 0;
    width: 0px;
  }
  .final_edit3 {
    opacity: 0;
    height: 0;
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
  padding: 0 60px;
`;
const Explain = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: normal;
  line-height: 26px;
  letter-spacing: -0.5px;
  white-space: pre-wrap;
  word-break: keep-all;
  text-align: center;
  transition: all 0.6s ease 0.3s;
  padding: 12px 8px;
  margin: 40px 20px 20px auto;
`;
const DoubleQuotesL = styled(RiDoubleQuotesL)`
  display: flex;
  position: absolute;
  top: 0;
  left: -24px;
`;
const DoubleQuotesR = styled(RiDoubleQuotesR)`
  display: flex;
  position: absolute;
  top: 0;
  right: -24px;
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
const Date_ = styled.div`
  display: flex;
  position: absolute;
  width: 126px;
  text-decoration: underline 2px wavy ${customColor.blue};
  text-underline-position: under;
  font-size: 16px;
  font-weight: bold;
  color: transparent;
  white-space: nowrap;
  transition: all 0.8s ease 0.6s;
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
const ExplainText = styled.div`
  display: flex;
  position: absolute;
  left: 36px;
  top: calc(7% - 6px);
  align-items: center;
  overflow: hidden;
  color: ${customColor.darkGray};
  text-shadow: 1px 1px 0px ${customColor.black + "33"};
  font-size: 14px;
  white-space: nowrap;
  background: ${customColor.blue + "66"};
  padding: 6px 8px;
  border-radius: 12px;
  width: 216px;
  z-index: 1;
  transition: all 0.8s ease 0.7s;
`;
const ExplainText_ = styled.div`
  display: flex;
  position: absolute;
  left: calc(50% + 42px);
  top: calc(7% + 22px);
  align-items: center;
  overflow: hidden;
  color: ${customColor.darkGray};
  text-shadow: 1px 1px 0px ${customColor.black + "33"};
  font-size: 14px;
  white-space: nowrap;
  background: ${customColor.blue + "66"};
  padding: 6px 8px;
  border-radius: 12px;
  width: 172px;
  z-index: 1;
  transition: all 0.8s ease 1.3s;
`;
const SmileIcons = styled(HiOutlineFaceSmile)`
  position: absolute;
  left: 224px;
  top: calc(7% - 16px);
  z-index: 1;
  font-size: 24px;
  transform: rotate(-20deg);
  background-color: #e7e791;
  border-radius: 50%;
  transition: all 0.8s ease 0.8s;
`;
const WeatherIcons = styled(TiWeatherPartlySunny)`
  position: absolute;
  left: 240px;
  top: calc(7% - 4px);
  z-index: 1;
  font-size: 24px;
  transform: rotate(20deg);
  transition: all 0.8s ease 0.9s;
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
  transition: all 0.8s ease 1.2s;
`;
const BookMarkIcons = styled(BsFillBookmarkFill)`
  font-size: 24px;
  color: #a44;
  transform: translateY(6px);
`;
