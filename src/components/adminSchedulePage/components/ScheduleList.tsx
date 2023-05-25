import React, { useState } from "react";
import styled from "styled-components";

interface ScheduleListProps {
  schedules: any;
}

const ScheduleList = ({ schedules }: ScheduleListProps) => {
  return (
    <div>
      <ul>
        {schedules.map((schedule: any, index: any) => (
          <li key={index}>
            {schedule.time} - {schedule.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList;
