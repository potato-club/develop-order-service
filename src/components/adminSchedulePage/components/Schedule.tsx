import React, { useState } from "react";
import styled from "styled-components";
import AddModal from "./AddModal";
import EditModal from "./EditModal";

interface ScheduleType {
  name: string;
  title: string;
  start: string;
  end: string;
}

const Schedule: React.FC = () => {
  const [schedules, setSchedules] = useState<ScheduleType[]>([
    {
      name: "김효성",
      title: "데드리프트 조지기",
      start: "2023-05-08",
      end: "2023-05-09",
    },
    {
      name: "박청조",
      title: "스쿼트 조지기",
      start: "2023-05-10",
      end: "2023-05-11",
    },
    {
      name: "조금주",
      title: "벤치프레스 조지기",
      start: "2023-05-12",
      end: "2023-05-13",
    },
  ]);

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleType | null>(
    null
  );

  // 요일을 단축 형식으로 표시하는 함수
  const getShortWeekday = (date: Date) => {
    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
    const dayIndex = date.getDay();
    return weekdays[dayIndex];
  };

  // 요일에 따라 스케줄을 분류하는 함수
  const groupSchedulesByDay = () => {
    const groupedSchedules: { [key: string]: ScheduleType[] } = {
      월: [],
      화: [],
      수: [],
      목: [],
      금: [],
    };

    const allDays = ["월", "화", "수", "목", "금"];

    allDays.forEach((day) => {
      groupedSchedules[day] = schedules.filter((schedule) => {
        const startDate = new Date(schedule.start);
        const endDate = new Date(schedule.end);
        const currentDay = getShortWeekday(startDate);
        return currentDay === day && startDate <= endDate;
      });
    });

    return groupedSchedules;
  };

  const handleAddSchedule = (schedule: ScheduleType) => {
    setSchedules((prevSchedules) => [...prevSchedules, schedule]);
    setAddModalOpen(false);
  };

  const handleUpdateSchedule = (updatedSchedule: ScheduleType) => {
    setSchedules((prevSchedules) =>
      prevSchedules.map((schedule) =>
        schedule === selectedSchedule ? updatedSchedule : schedule
      )
    );
    setEditModalOpen(false);
    setSelectedSchedule(null);
  };

  const handleDeleteSchedule = (schedule: ScheduleType) => {
    setSchedules((prevSchedules) =>
      prevSchedules.filter((s) => s !== schedule)
    );
  };

  const handleEditSchedule = (schedule: ScheduleType) => {
    setSelectedSchedule(schedule);
    setEditModalOpen(true);
  };

  return (
    <RealWrapper>
      <Button onClick={() => setAddModalOpen(true)}>일정 추가</Button>

      <AddModal
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAddSchedule={handleAddSchedule}
      />

      <EditModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        schedule={selectedSchedule}
        onUpdateSchedule={handleUpdateSchedule}
      />

      <DayWrapper>
        {Object.entries(groupSchedulesByDay()).map(([day, daySchedules]) => (
          <DayColumn key={day}>
            <DayLabel>{day}</DayLabel>
            {daySchedules.length > 0 ? (
              <DaySchedule>
                {daySchedules.map((schedule, index) => (
                  <ScheduleBox key={index}>
                    <ContentBox>
                      <NameBox>{schedule.name}</NameBox>
                      <TitleBox>{schedule.title}</TitleBox>
                      <DateRangeBox>
                        {schedule.start} ~ {schedule.end}
                      </DateRangeBox>
                    </ContentBox>
                    <Button onClick={() => handleEditSchedule(schedule)}>
                      수정
                    </Button>
                    <Button onClick={() => handleDeleteSchedule(schedule)}>
                      삭제
                    </Button>
                  </ScheduleBox>
                ))}
              </DaySchedule>
            ) : (
              <NoScheduleText>일정이 없습니다.</NoScheduleText>
            )}
          </DayColumn>
        ))}
      </DayWrapper>
    </RealWrapper>
  );
};

export default Schedule;

const RealWrapper = styled.div`
  overflow-y: auto;
`;

const Button = styled.button`
  background-color: #ffffff;
  border: none;
  color: #333333;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const DayWrapper = styled.div`
  margin-top: 20px;
  color: black;
  display: flex;
`;

const DayColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  width: 300px;
`;

const DayLabel = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  align-items: flex-start;
  color: aliceblue;
`;

const DaySchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ScheduleBox = styled.div`
  width: 300px;
  height: 100px;
  background-color: white;
  border-radius: 20px;
  align-items: center;
  margin-bottom: 20px;
  display: flex;
`;

const ContentBox = styled.div`
  flex: 1;
`;

const NameBox = styled.div``;
const TitleBox = styled.div``;
const DateRangeBox = styled.div``;

const NoScheduleText = styled.div`
  margin-top: 20px;
  font-weight: bold;
  color: gray;
`;
