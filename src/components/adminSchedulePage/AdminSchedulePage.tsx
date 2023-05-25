import React, { useState } from "react";
import styled from "styled-components";
import ScheduleInput from "./components/SchduleInput";
import Scheduler from "../infoPage/components/Scheduler";
import ScheduleList from "./components/ScheduleList";

interface Employee {
  id: number;
  name: string;
}

interface Schedule {
  startTime: string;
  endTime: string;
  content: string;
}

const employees: Employee[] = [
  { id: 1, name: "박청조" },
  { id: 2, name: "김효성" },
  { id: 3, name: "박해연" },
  { id: 4, name: "최준형" },
  { id: 5, name: "조금주" },
];

const AdminSchedulePage = () => {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  const handleEmployeeSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const employeeId = Number(event.target.value);
    const selected = employees.find((employee) => employee.id === employeeId);
    setSelectedEmployee(selected || null);
  };

  const handleScheduleAdd: (
    startTime: string,
    endTime: string,
    content: string
  ) => void = (startTime, endTime, content) => {
    const newSchedule = { startTime, endTime, content };
    setSchedules([...schedules, newSchedule]);
  };

  return (
    <div>
      <Title> 직원 스케쥴 조정</Title>
      <TitleLabel htmlFor="employee-select">스케쥴을 조정할 직원:</TitleLabel>
      <select id="employee-select" onChange={handleEmployeeSelect}>
        <option value="">직원을 선택해주세요.</option>
        {employees.map((employee) => (
          <option key={employee.id} value={employee.id}>
            {employee.name}
          </option>
        ))}
      </select>
      {selectedEmployee && (
        <div>
          <SelectedOne>{selectedEmployee.name}s Schedule</SelectedOne>
        </div>
      )}
      <ScheduleInput onScheduleAdd={handleScheduleAdd} />
     
      <Scheduler />
    </div>
  );
};

export default AdminSchedulePage;

const SchedulerWrapper = styled.div`
  width: 800px;
  height: 300px;
  background-color: white;
`;

const Title = styled.h2`
  color: white;
`;

const TitleLabel = styled.label`
  color: white;
`;

const SelectedOne = styled.h3`
  color: white;
`;
