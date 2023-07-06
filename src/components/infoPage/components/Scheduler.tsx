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
import { useQueryGetSchedules } from "../../../hooks/query/scheduler/useGetSchedules";

setOptions({
  locale: localeKo,
  theme: "windows",
  themeVariant: "light",
});

type MyEventType = {
  name: string;
  start: string;
  end: string;
  title: string;
  color: string;
};

const Scheduler = () => {
  const { isLoading, data, error } = useQueryGetSchedules();

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

  const mapDataToEvent = (data: MyEventType[] | undefined) => {
    if (!data) {
      return []; // 데이터가 없는 경우 빈 배열을 반환하거나 다른 처리를 수행할 수 있습니다.
    }
    return data.map((item) => {
      const { name, start, end, title, color } = item;
      return {
        name,
        start,
        end,
        title,
        color,
        cssClass: state[name] ? "" : "active",
      };
    });
  };

  return (
    <Wrapper>
      <Eventcalendar
        renderHeader={customWithNavButtons}
        view={calView}
        data={mapDataToEvent(data)}
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
