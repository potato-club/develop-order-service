import { EventContentArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import styled from "styled-components";
import { customColor } from "../../customColor";

export const FormCalendar = () => {
  const renderEvent = (info: EventContentArg) => {
    return <Item>{info.event.title}</Item>;
  };
  const handleClickDay = (info: DateClickArg) => {
    // let today = new Date();
    let date = info.dateStr;
    let calendar = info.view.calendar;
    let events = calendar
      .getEventSources()[0]
      .internalEventSource.meta.filter(
        (i: { date: string; title: string }) => i.date === date
      );
    let event = events;
    console.log(event, today);
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
    </Wrapper>
  );
};

const Wrapper = styled.article`
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
function moment() {
  throw new Error("Function not implemented.");
}
