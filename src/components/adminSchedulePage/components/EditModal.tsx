import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SchedulePostType } from "../../../apis/controller/scheduler.api.type";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSchedule: SchedulePostType;
  onUpdate: (updatedSchedule: SchedulePostType) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  initialSchedule,
  onUpdate,
}) => {
  const [editedSchedule, setEditedSchedule] = useState<SchedulePostType>(
    initialSchedule
  );

  useEffect(() => {
    setEditedSchedule(initialSchedule);
  }, [initialSchedule]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedSchedule((prevSchedule) => ({
      ...prevSchedule,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedSchedule((prevSchedule) => ({
      ...prevSchedule,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onUpdate(editedSchedule);
    onClose();
  };


  const employeeOptions = [
    { name: "hyoseong", color: "#328e39" },
    { name: "cheongjo", color: "#ea72c0" },
    { name: "haeyeon", color: "#eae125" },
    { name: "geumju", color: "#00aabb" },
    { name: "junhyung", color: "#adf123" },
  ];

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalContent>
          <h2>일정 수정</h2>
          <form>
          <Label>
              이름:
              <Select
                name="name"
                value={editedSchedule.name}
                onChange={handleSelectChange}
                required
              >
                <option value="">직원을 선택해주세요</option>
                {employeeOptions.map((employee) => (
                  <option key={employee.name} value={employee.name}>
                    {employee.name}
                  </option>
                ))}
              </Select>
            </Label>
            <Label>
              제목:
              <Input
                type="text"
                name="title"
                value={editedSchedule.title}
                onChange={handleInputChange}
                required
              />
            </Label>
            <Label>
              시작일:
              <Input
                type="datetime-local"
                name="start"
                value={editedSchedule.start}
                onChange={handleInputChange}
                required
              />
            </Label>
            <Label>
              종료일:
              <Input
                type="datetime-local"
                name="end"
                value={editedSchedule.end}
                onChange={handleInputChange}
                required
              />
            </Label>
            <ButtonWrapper>
              <Button onClick={handleSubmit}>수정</Button>
              <Button onClick={onClose}>Cancel</Button>
            </ButtonWrapper>
          </form>
        </ModalContent>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default EditModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  align-items: center;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: #ccc;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 5px;
`;
