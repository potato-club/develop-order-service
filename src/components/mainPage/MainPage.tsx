import styled, { keyframes } from "styled-components";
import { BsChevronCompactDown } from "react-icons/bs";
import { Events, Link, scroller } from "react-scroll";
import ScrollWheelHandler from "react-scroll-wheel-handler";
import { useEffect, useState } from "react";
import { Title } from "./components/Title";
import { SiteRanking } from "./components/SiteRanking";
import { DesignMeeting } from "./components/DesignMeeting";
import { Publishing } from "./components/Publishing";
import { Feating } from "./components/Feating";
import { FinalEdit } from "./components/FinalEdit";
import { Finish } from "./components/Finish";

export const MainPage = () => {
  const scrollIDArray = [
    "head",
    "design_meeting",
    "publishing",
    "feating",
    "final_edit",
    "finish",
    "end",
  ];
  const [scrollID, setScrollID] = useState<string>(scrollIDArray[0]);
  const scrollUp = (e: WheelEvent) => {
    let index = scrollIDArray.indexOf(scrollID);
    if (index !== 0 && index !== -1) {
      scroller.scrollTo(scrollIDArray[index - 1], { smooth: "easeInOutQuart" });
      setScrollID(scrollIDArray[index - 1]);
    }
  };
  const scrollDown = (e: WheelEvent) => {
    let index = scrollIDArray.indexOf(scrollID);
    if (index !== scrollIDArray.length - 1 && index !== -1) {
      index !== scrollIDArray.length - 2 &&
        scroller.scrollTo(scrollIDArray[index + 1], {
          smooth: "easeInOutQuart",
        });
      setScrollID(scrollIDArray[index + 1]);
    }
  };

  useEffect(() => {
    window.addEventListener(
      "wheel",
      function (e) {
        e.preventDefault();
      },
      { passive: false }
    );
  }, []);

  return (
    <ScrollWheelHandler
      upHandler={(e) => scrollUp(e)}
      downHandler={(e) => scrollDown(e)}
    >
      <Container>
        <ContainerInner>
          <Head id="head">
            <Title />
            <SiteRanking />
            <Link to="design_meeting" smooth spy>
              <ScrollContent>
                웹 페이지가 만들어지는 과정이 궁금하신가요?
              </ScrollContent>
              <ScrollButton onClick={() => setScrollID("design_meeting")}>
                스크롤하세요
                <BsChevronCompactDown size={18} />
              </ScrollButton>
            </Link>
          </Head>
          <Body>
            <DesignMeeting />
            <Publishing />
            <Feating />
            <FinalEdit />
            <Finish />
          </Body>
        </ContainerInner>
      </Container>
    </ScrollWheelHandler>
  );
};

const moveText = keyframes`
  0%{
    bottom:10px;
  }
  50%{
    bottom:6px;
  }
  100%{
    bottom:10px;
  }
`;
const Container = styled.section`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;
const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  width: 100%;
`;
const Head = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: calc(100vh - 80px);
`;
const ScrollContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 54px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.5px;
`;
const ScrollButton = styled.button`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  letter-spacing: -0.5px;
  animation: ${moveText} 1s infinite;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
