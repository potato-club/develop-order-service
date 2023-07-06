import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useQueryGetSchedules } from "../../../hooks/query/scheduler/useGetSchedules";
import AddModal from './AddModal';
import { useDeleteSchedule } from '../../../hooks/query/scheduler/useDeleteSchedule';

const Schedule: React.FC = () => {
  const { isLoading, error, data } = useQueryGetSchedules();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const deleteSchedule = useDeleteSchedule();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteSchedule = (id: string) => {
    deleteSchedule(id);
    // 삭제 후 필요한 로직 추가
  };

  if (isLoading) {
    return <LoadingText>Loading...</LoadingText>;
  }

  if (error) {
    return <ErrorText>Error</ErrorText>;
  }

  return (
    <RealWrapper>
      <ButtonWrapper>
        <Button onClick={handleOpenModal}>일정 추가</Button>
      </ButtonWrapper>
      <ScheduleList>
        {data &&
          data.map((schedule) => (
            <ScheduleItem key={schedule.id}>
              <ScheduleText>{schedule.name}</ScheduleText>
              <ScheduleText>{schedule.start}</ScheduleText>
              <ScheduleText>{schedule.end}</ScheduleText>
              <ScheduleText>{schedule.title}</ScheduleText>
              <ScheduleText>{schedule.color}</ScheduleText>
              <Button onClick={() => handleDeleteSchedule(schedule.id)}>삭제</Button>
            </ScheduleItem>
          ))}
      </ScheduleList>
      <AddModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </RealWrapper>
  );
};

export default Schedule;

const RealWrapper = styled.div`
  overflow-y: auto;
`;

const ScheduleList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ScheduleItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f1f1f1;
  margin-bottom: 10px;
`;

const ScheduleText = styled.span`
  font-weight: bold;
`;

const LoadingText = styled.div`
  font-weight: bold;
`;

const ErrorText = styled.div`
  color: red;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #ccc;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: white;
  background-color: #007bff;
  margin-left: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;
