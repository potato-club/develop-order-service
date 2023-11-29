import React, { useState } from "react";
import styled from "styled-components";
import { useQueryGetSchedules } from "../../../hooks/query/scheduler/useGetSchedules";
import AddModal from "./AddModal";
import { useDeleteSchedule } from "../../../hooks/query/scheduler/useDeleteSchedule";
import EditModal from "./EditModal";
import { SchedulePostType } from "../../../apis/controller/scheduler.api.type";
import axios from "axios";
import { tokenService } from "../../../libs/tokenService";

const Schedule: React.FC = () => {
  const { isLoading, error, data, refetch } = useQueryGetSchedules();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<SchedulePostType>({
    id : 0,
    name: "",
    title: "",
    start: "",
    end: "",
    color: "",
  });
  const token = tokenService.getToken();

  const handleOpenEditModal = (schedule: any) => {
    setSelectedSchedule(schedule);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedSchedule({
      id :0,
      name: "",
      title: "",
      start: "",
      end: "",
      color: "",
    });
    setIsEditModalOpen(false);
  };

  const handleUpdateSchedule = async (id: number, updatedSchedule: SchedulePostType) => {
    console.log(token);
    try {
      const response = await axios.put(
        `https://www.developorderservice.store/admin/schedule?AdminScheduleId=${id}`,
        updatedSchedule,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("Schedule updated successfully");
        refetch(); // 스케줄 목록 다시 불러오기
        handleCloseEditModal();
      } else {
        console.log("이건 다른 오류");
      }
    } catch (error) {
      console.error("실패:", error);
    }
  };
  

  const deleteSchedule = useDeleteSchedule();

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleDeleteSchedule = async (id: number) => {
    await deleteSchedule(id);
    refetch();
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
              <Button onClick={() => handleDeleteSchedule(schedule.id)}>
                삭제
              </Button>
              <Button onClick={() => handleOpenEditModal(schedule)}>
                수정
              </Button>
            </ScheduleItem>
          ))}
      </ScheduleList>

      <AddModal isOpen={isAddModalOpen} onClose={handleCloseAddModal} />
      <EditModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        initialSchedule={selectedSchedule}
        onUpdate={(updatedSchedule) => handleUpdateSchedule(selectedSchedule.id, updatedSchedule)}
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
