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
import character from "../../assets/img/information/character.png";
import Image from "next/image";

setOptions({
  locale: localeKo,
  theme: "windows",
  themeVariant: "light",
});

const Scheduler: React.FC = () => {
  const [hyoseong, setHyoseong] = React.useState(true);
  const [geumju, setGeumju] = React.useState(true);
  const [haeyeon, setHaeyeon] = React.useState(true);
  const [cheongjo, setCheongjo] = React.useState(true);
  const [junhyung, setJunhyung] = React.useState(true);

  function hyoseongClick() {
    setHyoseong(!hyoseong);
  }
  function geumjuClick() {
    setGeumju(!geumju);
  }

  function haeyeonClick() {
    setHaeyeon(!haeyeon);
  }

  function cheongjoClick() {
    setCheongjo(!cheongjo);
  }

  function junhyungClick() {
    setJunhyung(!junhyung);
  }
  

  const [selected, setSelected] = React.useState<any>(1);

  const [calView, setCalView] = React.useState<MbscEventcalendarView>({
    schedule: {
      type: "week",
      startDay: 1,
      endDay: 5,
      startTime: "09:00",
      endTime: "22:00",
    },
  });

  const filter = (ev: any, value: number) => {
    setSelected(value);
  };

  const customWithNavButtons = () => {
    return (
      <React.Fragment>
        <CalendarNav />
        <div>
          <SegmentedGroup select="single">
            <SegmentedItem
              value={1}
              checked={selected === 1}
              onChange={(ev: any) => {
                filter(ev, 1);
                hyoseongClick();
              }}
            >
              <Image src={character} alt={""} width={25} />
              <span>김효성</span>
            </SegmentedItem>
            <SegmentedItem
              value={2}
              checked={selected === 2}
              onChange={(ev: any) => {
                filter(ev, 2);
                geumjuClick();
              }}
            >
              <Image src={character} alt={""} width={25} />
              <span>조금주</span>
            </SegmentedItem>
            <SegmentedItem
              value={3}
              checked={selected === 3}
              onChange={(ev: any) => {
                filter(ev, 3);
                cheongjoClick();
              }}
            >
              <Image src={character} alt={""} width={25} />
              <span>박청조</span>
            </SegmentedItem>
            <SegmentedItem
              value={4}
              checked={selected === 4}
              onChange={(ev: any) => {
                filter(ev, 4);
                haeyeonClick();
              }}
            >
              <Image src={character} alt={""} width={25} />
              <span>박해연</span>
            </SegmentedItem>
            <SegmentedItem
              value={5}
              checked={selected === 5}
              onChange={(ev: any) => {
                filter(ev, 5);
                junhyungClick();
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
            id: "hyoseong",
            start: "2023-03-24T08:00:00.000Z",
            end: "2023-03-24T17:00:00.000Z",
            title: "이것저것 합니다..",
            color: "#328e39",
            cssClass: selected === 1 ? "" : "active",
          },
          {
            id: "hyoseong",
            start: "2023-03-20T08:00:00.000Z",
            end: "2023-03-20T13:00:00.000Z",
            title: "이것저것 합니다..",
            color: "#328e39",
            cssClass: selected === 1 ? "" : "active",
          },
          {
            id: "geumju",
            start: "2023-03-20T08:00:00.000Z",
            end: "2023-03-20T17:00:00.000Z",
            title: "이것저것 합니다..",
            color: "#00aabb",
            cssClass: selected === 2 ? "" : "active",
          },
          {
            id: "geumju",
            start: "2023-03-21T08:00:00.000Z",
            end: "2023-03-21T13:00:00.000Z",
            title: "이것저것 합니다..",
            color: "#00aabb",
            cssClass: selected === 2 ? "" : "active",
          },
          {
            id: "cheongjo",
            start: "2023-03-21T08:00:00.000Z",
            end: "2023-03-21T17:00:00.000Z",
            title: "이것저것 합니다..",
            color: " #ea72c0",
            cssClass: selected === 3 ? "" : "active",
          },
          {
            id: "cheongjo",
            start: "2023-03-22T17:00:00.000Z",
            end: "2023-03-22T22:00:00.000Z",
            title: "이것저것 합니다..",
            color: " #ea72c0",
            cssClass: selected === 3 ? "" : "active",
          },
          {
            id: "cheongjo",
            start: "2023-03-22T08:00:00.000Z",
            end: "2023-03-22T17:00:00.000Z",
            title: "이것저것 합니다..",
            color: " #eae125",
            cssClass: selected === 4 ? "" : "active",
          },
          {
            id: "cheongjo",
            start: "2023-03-23T08:00:00.000Z",
            end: "2023-03-23T17:00:00.000Z",
            title: "이것저것 합니다..",
            color: " #adf123",
            cssClass: selected === 5 ? "" : "active",
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
