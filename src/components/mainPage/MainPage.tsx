import styled, { keyframes } from "styled-components";
import { BsChevronCompactDown } from "react-icons/bs";
import { Link, scroller, animateScroll } from "react-scroll";
import ScrollWheelHandler from "react-scroll-wheel-handler";
import { useEffect, useState } from "react";
import { SiteRanking } from "./components/SiteRanking";
import { Title } from "./components/Title";
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
  //observer
  return (
    <ScrollWheelHandler
      upHandler={(e) => scrollUp(e)}
      downHandler={(e) => scrollDown(e)}
    >
      <Container>
        <Head id="head">
          <Title />
          <SiteRanking />
          <Link to="design_meeting" smooth spy>
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
  flex-direction: column;
`;
const Head = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: calc(100vh - 80px);
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
  animation: ${moveText} 1s infinite;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
