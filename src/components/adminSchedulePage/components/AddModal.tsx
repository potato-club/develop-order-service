import React, { useState } from "react";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSchedule: (schedule: ScheduleType) => void;
}

interface ScheduleType {
  name: string;
  title: string;
  start: string;
  end: string;
}

const AddModal: React.FC<ModalProps> = ({ isOpen, onClose, onAddSchedule }) => {
  const [newSchedule, setNewSchedule] = useState<ScheduleType>({
    name: "",
    title: "",
    start: "",
    end: "",
  });

  const employeeOptions = ["김효성", "박청조", "박해연", "조금주", "최준형"];

  const handleNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.value;
    setNewSchedule((prevSchedule) => ({
      ...prevSchedule,
      name: selectedName,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewSchedule((prevSchedule) => ({
      ...prevSchedule,
      [name]: value,
    }));
  };

  const handleAddSchedule = () => {
    onAddSchedule(newSchedule);
    setNewSchedule({
      name: "",
      title: "",
      start: "",
      end: "",
    });
  };

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalContent>
          <h2>새로운 일정 추가</h2>
          <form>
            <Label>
              이름:
              <Select
                name="name"
                value={newSchedule.name}
                onChange={handleNameChange}
                required = {true}
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
                value={newSchedule.title}
                onChange={handleInputChange}
                required={true}
              />
            </Label>
            <Label>
              시작일:
              <Input
                 type="datetime-local"
                name="start"
                value={newSchedule.start}
                onChange={handleInputChange}
                required={true}
              />
            </Label>
            <Label>
              종료일:
              <Input
                type="datetime-local"
                name="end"
                value={newSchedule.end}
                onChange={handleInputChange}
                required={true}
              />
            </Label>

            <ButtonWrapper>
              <Button onClick={handleAddSchedule}>Add</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </ButtonWrapper>
          </form>
        </ModalContent>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default AddModal;

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
