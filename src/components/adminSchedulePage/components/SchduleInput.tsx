import React, { useState } from "react";
import styled from "styled-components";

interface ScheduleInputProps {
  onScheduleAdd: (startTime: string, endTime: string, content: string) => void;
}
interface ScheduleListProps {
  schedules: any;
}

const ScheduleInput = ({ onScheduleAdd }: ScheduleInputProps , { schedules }: ScheduleListProps) => {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("09:00");
  const [content, setContent] = useState("");

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleStartTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartTime(event.target.value);
  };
  const handleEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndTime(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onScheduleAdd(startTime, endTime, content);
    setStartTime("09:00");
    setEndTime("09:00");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="date-input">날짜:</Label>
      <input
        id="date-input"
        type="date"
        value={date}
        onChange={handleDateChange}
      />
      <Label htmlFor="startTime-input">시작시간:</Label>
      <input
        id="timeInput"
        type="time"
        step="60"
        value={startTime}
        onChange={handleStartTimeChange}
      />
      <Label htmlFor="endTime-input">완료시간:</Label>
      <input
        id="time-input"
        type="time"
        step="60"
        value={endTime}
        onChange={handleEndTimeChange}
      />
      <Label htmlFor="content-input">내용:</Label>
      <input
        id="content-input"
        type="text"
        value={content}
        onChange={handleContentChange}
      />
      <Button type="submit">스케쥴 추가하기</Button>
  
       
        <ul>
          {schedules.map((schedule: any, index: any) => (
            <li key={index}>
              {schedule.time} - {schedule.content}
            </li>
          ))}
        </ul>
        </form>
     
  );
};

export default ScheduleInput;

const Label = styled.label`
  color: white;
`;

const Button = styled.button`
  background-color: aliceblue;
`;
