import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { customColor } from "../../customColor";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { ImBook } from "react-icons/im";
import Image from "next/image";

export const Publishing = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  return (
    <Wrapper id="publishing" ref={ref}>
      <Title className={inView ? "publishing" : "publishing1"}>
        #퍼블리싱
        <Explain className={inView ? "publishing" : "publishing1"}>
          <DoubleQuotesL />
          초기 디자인을 토대로 웹페이지의 외적인 요소들을 만듭니다
          <DoubleQuotesR />
        </Explain>
      </Title>
      <WrapperInner className={inView ? "publishing" : "publishing1"}>
        <Header className={inView ? "publishing" : "publishing1"}>
          <ImBook color={customColor.blue} size={16} />
          XXXX-XX-XX
        </Header>
        <Body>
          <BodyLeft className={inView ? "publishing" : "publishing2"}>
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
            </BodyInner>
          </BodyLeft>
          <BodyRight className={inView ? "publishing" : "publishing2"}>
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
            </BodyInner>
          </BodyRight>
        </Body>
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
  .publishing {
    opacity: 1;
  }
  .publishing1 {
    opacity: 0;
  }
  .publishing2 {
    opacity: 0;
    transform: translate(0, 12px);
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
  transition: all 0.6s ease 0.9s;
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
  transition: all 0.6s ease 1.2s;
`;
const BodyRight = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background: #eee;
  padding: 16px;
  padding-left: 10px;
  transition: all 0.6s ease 1.4s;
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
