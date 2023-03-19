import { useEffect, useRef, useState } from "react";
import moment from "moment";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { EventClickArg, EventContentArg } from "@fullcalendar/core";
import styled from "styled-components";
import { customColor } from "../../customColor";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { Alert } from "../../modal/alert";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { SelectTime } from "./SelectTime";

interface Props {
  setValue: UseFormSetValue<FieldValues>;
  register: UseFormRegister<FieldValues>;
  value: string;
}

export const FormCalendar = ({ setValue, register, value }: Props) => {
  const { ref, onChange, ...rest } = register(value);
  const wrapper = useRef<HTMLElement>(null);
  const [modal, setModal] = useState(false);
  const [remove, setRemove] = useState<Element>();
  const [content, setContent] = useState("");
  const [xy, setXy] = useState<number[]>([0, 0]);
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

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
    setIsOpen(false);
    remove?.classList.remove("selected");
    if (today >= date || moment(date).day() === 0 || moment(date).day() === 6) {
      setContent("선택할 수 없는 날짜입니다");
      setModal(true);
    } else if (events.length >= 3) {
      setContent("예약이 가득 찼습니다");
      setModal(true);
    } else {
      setDate(date);
      let selectedElement = document.querySelector(
        `.fc-day[data-date="${date}"]`
      );
      // SelectTime Modal 설정
      setTime("");
      setIsOpen(true);
      wrapper.current &&
        setXy([
          info.jsEvent.x - wrapper.current.getBoundingClientRect().x,
          info.jsEvent.y - wrapper.current.getBoundingClientRect().y,
        ]);
      // 'selected' class 설정
      selectedElement?.classList.add("selected");
      selectedElement && setRemove(selectedElement);
    }
  };
  const handleEventClick = (info: EventClickArg) => {
    const dateClickArg: DateClickArg = {
      dateStr: info.event.startStr,
      view: info.view,
    };
    info.view.calendar.trigger("dateClick", dateClickArg);
  };

  useEffect(() => {
    setValue(value, date + " " + time);
  }, [time, date]);

  return (
    <Wrapper ref={wrapper}>
      <Alert
        isOpen={modal}
        closeModal={() => {
          setModal(false);
        }}
        content={content}
      />
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
        height={524}
        eventColor={customColor.blue}
        eventTextColor={customColor.black}
        events={[
          { title: "10:00 조**", date: "2023-02-10" },
          { title: "10:00 조**", date: "2023-02-10" },
          { title: "10:00 조**", date: "2023-02-10" },
          { title: "add", date: "2023-02-17" },
          { title: "add", date: "2023-02-17" },
          { title: "add", date: "2023-02-17" },
          { title: "add", date: "2023-02-03" },
          { title: "add", date: "2023-02-03" },
          { title: "add", date: "2023-02-03" },
          { title: "add", date: "2023-02-24" },
          { title: "add", date: "2023-02-24" },
          { title: "add", date: "2023-02-24" },
          { title: "add", date: "2023-03-03" },
          { title: "add", date: "2023-03-03" },
          { title: "add", date: "2023-03-03" },
          { title: "add", date: "2023-03-10" },
          { title: "add", date: "2023-03-10" },
          { title: "add", date: "2023-03-10" },
          { title: "18:00 김**", date: "2023-02-14" },
          { title: "18:00 김**", date: "2023-02-14" },
          { title: "18:00 김**", date: "2023-02-14" },
        ]}
        eventContent={renderEvent}
        dateClick={handleClickDay}
        eventClick={handleEventClick}
      />
      <PrevIcon />
      <NextIcon />
      <SelectTime
        isOpen={isOpen}
        xy={xy}
        time={time}
        setTime={(time) => {
          setTime(time);
        }}
      />
      <input type="hidden" {...register(value, { required: true })} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 520px;
  padding: 20px;
  padding-left: 0;
`;
const Item = styled.div`
  height: 14px;
  width: 100%;
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
