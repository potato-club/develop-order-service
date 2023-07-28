import React, { useState } from "react";
import styled from "styled-components";
import { SchedulePostType } from "../../../apis/controller/scheduler.api.type";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  schedule: SchedulePostType; 
  onSubmit: (editedSchedule: SchedulePostType) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  schedule,
  onSubmit,
}) => {
  const [editedSchedule, setEditedSchedule] = useState<SchedulePostType>({
    name: schedule.name,
    start: schedule.start,
    end: schedule.end,
    title: schedule.title,
    color : schedule.color
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditedSchedule((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(editedSchedule);
    onClose();
  };

  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>
          <h2>Edit Schedule</h2>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={editedSchedule.name}
            onChange={handleChange}
          />
          <Label>Start</Label>
          <Input
            type="text"
            name="start"
            value={editedSchedule.start}
            onChange={handleChange}
          />
          <Label>End</Label>
          <Input
            type="text"
            name="end"
            value={editedSchedule.end}
            onChange={handleChange}
          />
          <Label>Title</Label>
          <Input
            type="text"
            name="title"
            value={editedSchedule.title}
            onChange={handleChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  );
};

export default EditModal;

const ModalWrapper = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 300px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

const ModalBody = styled.div`
  margin-top: 16px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 8px;

  &:first-child {
    background-color: #007bff;
    color: white;
  }

  &:last-child {
    background-color: #ccc;
  }

  &:hover {
    background-color: #0056b3;
  }
`;
