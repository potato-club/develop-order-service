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
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleType | null>(null);

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

      {schedules.map((schedule, index) => (
        <Wrapper key={index}>
          <LineWrapper>
            <ScheduleBox>
              <NumberBox>{index + 1}.</NumberBox>
              <ContentBox>
                <NameBox>{schedule.name}</NameBox>
                <TitleBox>{schedule.title}</TitleBox>
                <StartBox>{schedule.start} ~</StartBox>
                <EndBox>{schedule.end}</EndBox>
              </ContentBox>
              <Button onClick={() => handleEditSchedule(schedule)}>수정</Button>
              <Button onClick={() => handleDeleteSchedule(schedule)}>삭제</Button>
            </ScheduleBox>
          </LineWrapper>
        </Wrapper>
      ))}
    </RealWrapper>
  );
};

export default Schedule;

const Wrapper = styled.div``;

const LineWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ScheduleBox = styled.div`
  width: 1240px;
  height: 100px;
  background-color: white;
  border-radius: 20px;
  align-items: center;
  margin: 20px;
  display: flex;
`;

const NumberBox = styled.div`
  font-size: 80px;
  font-weight: 0px;
  color: white;
  margin-left: 50px;
`;

const ContentBox = styled.div`
  flex: 1;
`;

const NameBox = styled.div``;
const TitleBox = styled.div``;
const StartBox = styled.div``;
const EndBox = styled.div``;

const Button = styled.button`
  background-color: white;
`;

const RealWrapper = styled.div`
  overflow-y: auto;
`;
