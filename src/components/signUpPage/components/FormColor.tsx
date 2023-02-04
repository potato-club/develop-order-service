import styled from "styled-components";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormUnregister,
  UseFormWatch,
} from "react-hook-form";
import { customColor } from "../../customColor";
import { Error } from "./Error";
import { BsPlusLg } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

interface Props {
  value: string;
  register: UseFormRegister<FieldValues>;
  unregister: UseFormUnregister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}
interface StyleProps {
  isHover: boolean;
}

export const FormColor = (props: Props) => {
  const [isHover, setIsHover] = useState<boolean[]>([]);
  const [colorList, setColorList] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);

  const handlePlusBtn = () => {
    setColorList((prev) => [...prev, `${count}`]);
    setIsHover((prev) => [...prev, false]);
    event.preventDefault();
    setCount(count + 1);
  };
  const handleDeleteBtn = (i: string, id: number) => {
    setColorList(colorList.filter((i, idx) => id !== idx));
    setIsHover(isHover.filter((i, idx) => id !== idx));
    event.preventDefault();
    props.unregister(props.value + `-${i}`);
  };
  const onMouseEnter = (id: number) => {
    setIsHover(isHover.map((i, idx) => (idx === id ? true : false)));
  };
  const onMouseLeave = (id: number) => {
    setIsHover(isHover.map((i) => false));
  };

  return (
    <Wrapper>
      <Box>
        <ColorList>
          {colorList.map((i, id) => {
            return (
              <ColorBox
                key={i}
                onMouseEnter={() => {
                  onMouseEnter(id);
                }}
                onMouseLeave={() => {
                  onMouseLeave(id);
                }}
              >
                {props.watch(props.value + `-${i}`)}
                <ColorInput
                  type="color"
                  {...props.register(props.value + `-${i}`)}
                />
                <ColorDelete
                  isHover={isHover[id]}
                  onClick={() => {
                    handleDeleteBtn(i, id);
                  }}
                >
                  <IoCloseSharp size={14} />
                </ColorDelete>
              </ColorBox>
            );
          })}
        </ColorList>
        <ColorPlus onClick={handlePlusBtn}>
          <BsPlusLg />
        </ColorPlus>
      </Box>
      {props.errors[props.value] && <Error />}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 0 4px;
  overflow-x: auto;
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const ColorList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ColorPlus = styled.button`
  display: flex;
  width: 26px;
  height: 26px;
  color: ${customColor.darkGray};
  font-size: 14px;
  border: 2px solid ${customColor.darkGray};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;
const ColorBox = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-right: 26px;
  width: 94px;
  height: 26px;
  border: 2px solid ${customColor.darkGray};
  border-radius: 4px;
  padding-right: 28px;
  padding-left: 4px;
  font-size: 14px;
  align-items: center;
`;
const ColorInput = styled.input`
  position: absolute;
  padding: 0;
  border: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: none;
  cursor: pointer;
  height: 26px;
  padding: 0;
  width: 24px;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  border-left: 2px solid ${customColor.darkGray};
`;
const ColorDelete = styled.button<StyleProps>`
  display: flex;
  position: absolute;
  width: ${(props) => (props.isHover ? "14px" : "0px")};
  height: 14px;
  background: ${customColor.darkGray};
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  color: ${customColor.white};
  transform: translate(100%, 0);
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  transition: width 0.3s ease;
  overflow: hidden;
`;
