import React, { useState } from "react";
import styled from "styled-components";
import { SchedulerApi } from "../../../apis/controller/scheduler.api";
import { ScheduleType } from "../../../apis/controller/scheduler.api.type";
import {
  useQueryGetSchedules,
} from "../../../hooks/query/scheduler/useGetSchedules";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [newSchedule, setNewSchedule] = useState<ScheduleType>({
    id: 0,
    name: "",
    title: "",
    start: "",
    end: "",
    color: "",
  });

  const employeeOptions = [
    { name: "hyoseong", color: "#328e39" },
    { name: "cheongjo", color: "#ea72c0" },
    { name: "haeyeon", color: "#eae125" },
    { name: "geumju", color: "#00aabb" },
    { name: "junhyung", color: "#adf123" },
  ];

  const { refetch } = useQueryGetSchedules();

  const handleNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.value;
    const selectedEmployee = employeeOptions.find(
      (employee) => employee.name === selectedName
    );
    if (selectedEmployee) {
      setNewSchedule((prevSchedule) => ({
        ...prevSchedule,
        name: selectedEmployee.name,
        color: selectedEmployee.color,
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewSchedule((prevSchedule) => ({
      ...prevSchedule,
      [name]: value,
    }));
  };

  const handleAddSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await SchedulerApi.createSchedule(newSchedule);
      setNewSchedule({
        id: 0,
        name: "",
        title: "",
        start: "",
        end: "",
        color: "",
      });
      refetch();
      onClose();
    } catch (error) {
      console.log("Failed to create schedule:", error);
    }
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
                value={newSchedule.title}
                onChange={handleInputChange}
                required
              />
            </Label>
            <Label>
              시작일:
              <Input
                type="datetime-local"
                name="start"
                value={newSchedule.start}
                onChange={handleInputChange}
                required
              />
            </Label>
            <Label>
              종료일:
              <Input
                type="datetime-local"
                name="end"
                value={newSchedule.end}
                onChange={handleInputChange}
                required
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
