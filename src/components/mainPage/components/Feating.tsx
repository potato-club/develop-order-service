import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { ImBook } from "react-icons/im";
import Image from "next/image";
import { customColor } from "../../customColor";
import dayjs from "dayjs";

export const Feating = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  return (
    <Wrapper id="feating" ref={ref}>
      <Title className={inView ? "feating" : "feating1"}>
        #기능구현
        <Explain className={inView ? "feating" : "feating1"}>
          <DoubleQuotesL />
          페이지 운영과 이용에 필요한 기능들을 구현합니다
          <DoubleQuotesR />
        </Explain>
      </Title>
      <WrapperInner className={inView ? "feating" : "feating1"}>
        <Header>
          <ImBook color={customColor.blue} size={16} />
          XXXX-XX-XX
        </Header>
        <Header_ className={inView ? "feating" : "feating2"}>
          <HeaderText>{dayjs().format("YYYY-MM-DD")}</HeaderText>
        </Header_>
        <ExplainText className={inView ? "feating" : "feating2"}>
          현재 날짜 가져오기
        </ExplainText>
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
              <Date>XXXX년 XX월 XX일</Date>
              <Date_ className={inView ? "feating" : "feating2"}>
                {dayjs().subtract(1, "day").format("YYYY년 MM월 DD일")}
              </Date_>
              <Content className={inView ? "feating" : "feating2"}>
                가방이랑 옷을 샀다! <br />
                빨리왔으면 좋 ! 겠 ! 다 !
              </Content>
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
              <Date style={{ right: 20 }}>XXXX년 XX월 XX일</Date>
              <Date_
                style={{ right: 20 }}
                className={inView ? "feating" : "feating2"}
              >
                {dayjs().format("YYYY년 MM월 DD일")}
              </Date_>
              <Content_ className={inView ? "feating" : "feating2"}>
                외계인 영화를 봤다...
                <br />
                외계인처럼 보이는 선글라스....
                <br />
                탐난다..!
              </Content_>
            </BodyInner>
          </BodyRight>
        </Body>
        <ExplainText_ className={inView ? "feating" : "feating2"}>
          다이어리 작성날짜와 작성내용 가져오기
        </ExplainText_>
      </WrapperInner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .feating {
    opacity: 1;
  }
  .feating1 {
    opacity: 0;
  }
  .feating2 {
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
  transition: all 0.6s ease 0.6s;
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
const Header_ = styled.div`
  display: flex;
  position: absolute;
  background: #eee;
  right: 20px;
  top: 0;
  height: 7%;
  z-index: 1;
  align-items: center;
  justify-content: flex-end;
  width: 78px;
  overflow: hidden;
  transition: all 0.8s ease 0.8s;
`;
const HeaderText = styled.div`
  display: flex;
  color: ${customColor.darkGray};
  font-size: 14px;
  text-decoration: underline 2px wavy ${customColor.blue};
  text-shadow: 1px 1px 0px ${customColor.black + "33"};
  text-underline-position: under;
  white-space: nowrap;
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
  font-size: 16px;
  font-weight: bold;
  width: 128px;
  background: #eee;
  white-space: nowrap;
  text-decoration: underline 2px wavy ${customColor.blue};
  text-shadow: 1px 1px 0px ${customColor.black + "33"};
  text-underline-position: under;
  transition: all 0.8s ease 1.4s;
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
  text-decoration: underline 2px wavy ${customColor.blue};
  text-shadow: 1px 1px 0px ${customColor.black + "33"};
  text-underline-position: under;
  transition: all 0.8s ease 1.6s;
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
  text-decoration: underline 2px wavy ${customColor.blue};
  text-shadow: 1px 1px 0px ${customColor.black + "33"};
  text-underline-position: under;
  transition: all 0.8s ease 1.6s;
  width: 215px;
  overflow: hidden;
`;
const ExplainText = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  top: calc(7% - 2px);
  z-index: 1;
  align-items: center;
  justify-content: flex-end;
  width: 120px;
  overflow: hidden;
  transition: all 0.8s ease 0.8s;
  color: ${customColor.darkGray};
  text-shadow: 1px 1px 0px ${customColor.black + "33"};
  font-size: 14px;
  white-space: nowrap;
  transition: all 0.8s ease 1s;
  background: ${customColor.blue + "66"};
  padding: 6px 8px;
  border-radius: 12px;
`;
const ExplainText_ = styled.div`
  display: flex;
  position: absolute;
  left: 36px;
  top: calc(7% + 10px);
  z-index: 1;
  align-items: center;
  width: 233px;
  overflow: hidden;
  transition: all 0.8s ease 0.8s;
  color: ${customColor.darkGray};
  text-shadow: 1px 1px 0px ${customColor.black + "33"};
  font-size: 14px;
  white-space: nowrap;
  transition: all 0.8s ease 1.8s;
  background: ${customColor.blue + "66"};
  padding: 6px 8px;
  border-radius: 12px;
`;
