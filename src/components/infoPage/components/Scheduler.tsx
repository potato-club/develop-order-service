import React from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import {
  Eventcalendar,
  MbscEventcalendarView,
  setOptions,
  CalendarNav,
  SegmentedGroup,
  SegmentedItem,
  CalendarPrev,
  CalendarNext,
  localeKo,
} from "@mobiscroll/react";
import styled from "styled-components";
import character from "../../../../public/img/information/character.png";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { personState, PersonState } from "../../../recoil/infoCard";

setOptions({
  locale: localeKo,
  theme: "windows",
  themeVariant: "light",
});

const Scheduler = () => {
  const [state, setState] = useRecoilState<PersonState>(personState);

  function toggleState(key: keyof PersonState) {
    setState((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  }

  const [calView] = React.useState<MbscEventcalendarView>({
    schedule: {
      type: "week",
      startDay: 1,
      endDay: 5,
      startTime: "09:00",
      endTime: "22:00",
    },
  });

  const customWithNavButtons = () => {
    return (
      <React.Fragment>
        <CalendarNav />
        <div>
          <SegmentedGroup select="multiple">
            <SegmentedItem
              checked={state.hyoseong}
              onChange={() => {
                toggleState("hyoseong");
              }}
            >
              <Image src={character} alt={""} width={25} />
              <span>김효성</span>
            </SegmentedItem>
            <SegmentedItem
              checked={state.geumju}
              onChange={() => {
                toggleState("geumju");
              }}
            >
              <Image src={character} alt={""} width={25} />
              <span>조금주</span>
            </SegmentedItem>
            <SegmentedItem
              checked={state.cheongjo}
              onChange={() => {
                toggleState("cheongjo");
              }}
            >
              <Image src={character} alt={""} width={25} />
              <span>박청조</span>
            </SegmentedItem>
            <SegmentedItem
              checked={state.haeyeon}
              onChange={() => {
                toggleState("haeyeon");
              }}
            >
              <Image src={character} alt={""} width={25} />
              <span>박해연</span>
            </SegmentedItem>
            <SegmentedItem
              checked={state.junhyung}
              onChange={() => {
                toggleState("junhyung");
              }}
            >
              <Image src={character} alt={""} width={25} />
              <span>최준형</span>
            </SegmentedItem>
          </SegmentedGroup>
        </div>
        <CalendarPrev />
        <CalendarNext />
      </React.Fragment>
    );
  };

  return (
    <Wrapper>
      <Eventcalendar
        renderHeader={customWithNavButtons}
        view={calView}
        data={[
          {
            name: "hyoseong",
            start: "2023-04-03T08:00",
            end: "2023-04-03T17:00",
            title: "이것저것 합니다..",
            color: "#328e39",
            cssClass: state.hyoseong ? "" : "active",
          },
          {
            name: "hyoseong",
            start: "2023-04-04T08:00:00.000Z",
            end: "2023-04-04T13:00:00.000Z",
            title: "이것저것 합니다..",
            color: "#328e39",
            cssClass: state.hyoseong ? "" : "active",
          },
          {
            name: "geumju",
            start: "2023-04-04T08:00:00.000Z",
            end: "2023-04-04T17:00:00.000Z",
            title: "이것저것 합니다..",
            color: "#00aabb",
            cssClass: state.geumju ? "" : "active",
          },
          {
            name: "geumju",
            start: "2023-04-05T08:00:00.000Z",
            end: "2023-04-05T13:00:00.000Z",
            title: "이것저것 합니다..",
            color: "#00aabb",
            cssClass: state.geumju ? "" : "active",
          },
          {
            name: "cheongjo",
            start: "2023-04-05T08:00:00.000Z",
            end: "2023-04-05T17:00:00.000Z",
            title: "이것저것 합니다..",
            color: " #ea72c0",
            cssClass: state.cheongjo ? "" : "active",
          },
          {
            name: "cheongjo",
            start: "2023-04-06T17:00:00.000Z",
            end: "2023-04-06T22:00:00.000Z",
            title: "이것저것 합니다..",
            color: " #ea72c0",
            cssClass: state.cheongjo ? "" : "active",
          },
          {
            name: "haeyeon",
            start: "2023-04-06T08:00:00.000Z",
            end: "2023-04-06T17:00:00.000Z",
            title: "이것저것 합니다..",
            color: " #eae125",
            cssClass: state.haeyeon ? "" : "active",
          },
          {
            name: "junhyung",
            start: "2023-04-07T08:00:00.000Z",
            end: "2023-04-07T17:00:00.000Z",
            title: "이것저것 합니다..",
            color: " #adf123",
            cssClass: state.junhyung ? "" : "active",
          },
        ]}
        cssClass="md-custom-header-filtering"
      />
    </Wrapper>
  );
};

export default Scheduler;

const Wrapper = styled.div`
  .md-header-filter-controls {
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    overflow: auto;
  }

  .md-custom-header-filtering .mbsc-segmented {
    max-width: 400px;
    margin: 0 auto;
    flex: 1 0 auto;
  }

  .md-header-filter-img {
    width: 25px;
  }

  .md-header-filter-name {
    margin-left: 10px;
  }

  .md-header-filter-nav {
    width: 200px;
  }

  .md-header-filter-controls .mbsc-segmented-button.mbsc-selected {
    color: #fff;
  }

  .md-custom-header-filtering
    .mbsc-segmented-item:first-child
    .mbsc-selected.mbsc-material,
  .md-custom-header-filtering
    .mbsc-segmented-item:first-child
    .mbsc-selected.mbsc-windows,
  .md-custom-header-filtering
    .mbsc-segmented-item:first-child
    .mbsc-segmented-selectbox-inner {
    background: #328e39;
  }

  .md-custom-header-filtering
    .mbsc-segmented-item:nth-child(2)
    .mbsc-selected.mbsc-material,
  .md-custom-header-filtering
    .mbsc-segmented-item:nth-child(2)
    .mbsc-selected.mbsc-windows,
  .md-custom-header-filtering
    .mbsc-segmented-item:nth-child(2)
    .mbsc-segmented-selectbox-inner {
    background: #00aabb;
  }

  .md-custom-header-filtering
    .mbsc-segmented-item:nth-child(3)
    .mbsc-selected.mbsc-material,
  .md-custom-header-filtering
    .mbsc-segmented-item:nth-child(3)
    .mbsc-selected.mbsc-windows,
  .md-custom-header-filtering
    .mbsc-segmented-item:nth-child(3)
    .mbsc-segmented-selectbox-inner {
    background: #ea72c0;
  }

  .md-custom-header-filtering
    .mbsc-segmented-item:nth-child(4)
    .mbsc-selected.mbsc-material,
  .md-custom-header-filtering
    .mbsc-segmented-item:nth-child(4)
    .mbsc-selected.mbsc-windows,
  .md-custom-header-filtering
    .mbsc-segmented-item:nth-child(4)
    .mbsc-segmented-selectbox-inner {
    background: #eae125;
  }

  .md-custom-header-filtering
    .mbsc-segmented-item:nth-child(5)
    .mbsc-selected.mbsc-material,
  .md-custom-header-filtering
    .mbsc-segmented-item:nth-child(5)
    .mbsc-selected.mbsc-windows,
  .md-custom-header-filtering
    .mbsc-segmented-item:nth-child(5)
    .mbsc-segmented-selectbox-inner {
    background: #adf123;
  }
  .active {
    display: none;
  }
`;
