import React, { useState } from 'react';
import styled from 'styled-components';
import { useQueryGetSchedules } from "../../../hooks/query/scheduler/useGetSchedules";
import AddModal from './AddModal';
import { useDeleteSchedule } from '../../../hooks/query/scheduler/useDeleteSchedule';
import { useUpdateSchedule } from '../../../hooks/query/scheduler/useUpdateSchedule';
import { ScheduleType } from '../../../hooks/query/scheduler/useGetSchedules';
import EditModal from './EditModal';

const Schedule: React.FC = () => {
  const { isLoading, error, data, refetch } = useQueryGetSchedules();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleType | null>(null);
  const deleteSchedule = useDeleteSchedule();


  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => { 
    setIsAddModalOpen(false);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleDeleteSchedule = async (id: string) => {
    await deleteSchedule(id);
    refetch();
  };

  const handleUpdateSchedule = (schedule: ScheduleType) => {
    setSelectedSchedule(schedule);
    setIsEditModalOpen(true);
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
        <Button onClick={handleOpenAddModal}>일정 추가</Button>
      </ButtonWrapper>
      <ScheduleList>
        {data &&
          data.map((schedule) => (
            <ScheduleItem key={schedule.id}>
              <ScheduleText>{schedule.name}</ScheduleText>
              <ScheduleText>{schedule.start}</ScheduleText>
              <ScheduleText>{schedule.end}</ScheduleText>
              <ScheduleText>{schedule.title}</ScheduleText>
              <Button onClick={() => handleDeleteSchedule(schedule.id)}>삭제</Button>
              <Button onClick={() => handleUpdateSchedule(schedule)}>수정</Button>
            </ScheduleItem>
          ))}
      </ScheduleList>
      <AddModal isOpen={isAddModalOpen} onClose={handleCloseAddModal} />
      <EditModal isOpen={isEditModalOpen} onClose={handleCloseEditModal} schedule={selectedSchedule} />
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
  background-color:#ccc;
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
