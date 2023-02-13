import moment from "moment";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { EventContentArg } from "@fullcalendar/core";
import styled from "styled-components";
import { customColor } from "../../customColor";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";

export const FormCalendar = () => {
  const renderEvent = (info: EventContentArg) => {
    return <Item>{info.event.title}</Item>;
  };
  const handleClickDay = (info: DateClickArg) => {
    let today = moment().format("YYYY-MM-DD");
    let date = info.dateStr;
    let events = info.view.calendar
      .getEventSources()[0]
      .internalEventSource.meta.filter(
        (i: { date: string; title: string }) => i.date === date
      );
    let event = events;
    console.log(event, today);
    (today > date || moment(date).day() === 0 || moment(date).day() === 6) &&
      console.log("앙");
  };
  return (
    <Wrapper>
      <FullCalendar
        plugins={[dayGridPlugin, interaction]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "title",
          center: "",
          end: "prev,next",
        }}
        titleFormat={{ year: "numeric", month: "narrow" }}
        locale="ko"
        height={530}
        eventColor={customColor.blue}
        eventTextColor={customColor.black}
        events={[
          { title: "10:00 조**", date: "2023-02-11" },
          { title: "10:00 조**", date: "2023-02-11" },
          { title: "10:00 조**", date: "2023-02-11" },
          { title: "add", date: "2023-02-18" },
          { title: "add", date: "2023-02-18" },
          { title: "add", date: "2023-02-18" },
          { title: "add", date: "2023-02-04" },
          { title: "add", date: "2023-02-04" },
          { title: "add", date: "2023-02-04" },
          { title: "add", date: "2023-02-25" },
          { title: "add", date: "2023-02-25" },
          { title: "add", date: "2023-02-25" },
          { title: "add", date: "2023-03-04" },
          { title: "add", date: "2023-03-04" },
          { title: "add", date: "2023-03-04" },
          { title: "add", date: "2023-03-11" },
          { title: "add", date: "2023-03-11" },
          { title: "add", date: "2023-03-11" },
          { title: "18:00 김**", date: "2023-02-14" },
        ]}
        eventContent={renderEvent}
        dateClick={handleClickDay}
      />
      <PrevIcon />
      <NextIcon />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 530px;
  padding: 20px;
  padding-left: 0;
`;
const Item = styled.div`
  height: 14px;
  width: 100%;
  /* margin-bottom: 6px; */
  font-size: 12px;
  color: ${customColor.black};
  padding: 0 2px;
  overflow: hidden;
`;
const PrevIcon = styled(BsFillCaretLeftFill)`
  position: absolute;
  top: 28px;
  color: ${customColor.white};
  right: 60px;
  font-size: 12px;
  z-index: 2;
  pointer-events: none;
`;
const NextIcon = styled(BsFillCaretRightFill)`
  position: absolute;
  top: 28px;
  color: ${customColor.white};
  right: 32px;
  font-size: 12px;
  z-index: 2;
  cursor: pointer;
  pointer-events: none;
`;
