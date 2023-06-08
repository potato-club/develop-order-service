import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface ScheduleType {
  name: string;
  title: string;
  start: string;
  end: string;
}

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  schedule: ScheduleType | null;
  onUpdateSchedule: (updatedSchedule: ScheduleType) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  schedule,
  onUpdateSchedule,
}) => {
  const [updatedSchedule, setUpdatedSchedule] = useState<ScheduleType>({
    name: "",
    title: "",
    start: "",
    end: "",
  });


  const employeeOptions = ["김효성", "박청조", "박해연", "조금주", "최준형"];

  // 선택된 스케줄이 변경될 때마다 폼 데이터 업데이트
  useEffect(() => {
    if (schedule) {
      setUpdatedSchedule({ ...schedule });
    }
  }, [schedule]);

 const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedSchedule((prevSchedule) => ({
      ...prevSchedule,
      [name]: value,
    }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateSchedule(updatedSchedule);
  };

  if (!isOpen || !schedule) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalContent>
        <h2>일정 수정</h2>
        <form onSubmit={handleSubmit}>
        <Label>
            이름:
            <Select
              name="name"
              value={updatedSchedule.name}
              onChange={handleInputChange}
              required={true}
            >
              <option value="">직원을 선택해주세요</option>
              {employeeOptions.map((employee) => (
                <option key={employee} value={employee}>
                  {employee}
                </option>
              ))}
            </Select>
          </Label>

          <Label>
            제목:
            <Input
              type="text"
              name="title"
              value={updatedSchedule.title}
              onChange={handleInputChange}
              required={true}
            />
          </Label>
          <Label>
            시작일:
            <Input
              type="datetime-local"
              name="start"
              value={updatedSchedule.start}
              onChange={handleInputChange}
              required={true}
            />
          </Label>
          <Label>
            종료일:
            <Input
              type="datetime-local"
              name="end"
              value={updatedSchedule.end}
              onChange={handleInputChange}
              required={true}
            />
          </Label>
          <ButtonWrapper>
            <Button type="submit">저장</Button>
            <Button onClick={onClose}>닫기</Button>
          </ButtonWrapper>
        </form>
      </ModalContent>
    </ModalWrapper>
  );
};

export default EditModal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  margin-left: 10px;
  background-color: #ccc;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;`;