import { createGlobalStyle } from "styled-components";
import { customColor } from "../src/components/customColor";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Pretendard-Regular";
}

html {
  overflow: overlay;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
  width: 14px;
  }
  ::-webkit-scrollbar-thumb {
  background-color: ${customColor.indigo1};
  border-radius: 10px;
  background-clip: padding-box;
  border: 4px solid transparent;
  }
  ::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 10px;
  }
  ::-webkit-scrollbar-button:start:decrement {
  background-color: transparent;
  height: 80px;
  }
  ::-webkit-scrollbar-button:end:increment {
  background-color: transparent;
  height: 188px;
  }
}

html,
body {
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  overflow-x: hidden;
}

button {
  border: none;
  background: transparent;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* fullCalendar */
.fc table{
  font-size:14px;
}
.fc .fc-daygrid-day-number{
  padding: 2px 4px;
}
.fc .fc-toolbar-title{
  font-size:18px;
  margin-left:4px;
}
.fc .fc-toolbar.fc-header-toolbar{
  margin-bottom:8px;
}
.fc .fc-button,
.fc .fc-button-primary:not(:disabled):active{
  padding:14px 16px;
  background: ${customColor.indigo3};
  border:none;
  margin:0 !important;
}
.fc .fc-button-primary:hover{
  background: ${customColor.indigo3};
}
.fc .fc-button-primary:not(:disabled).fc-button-active:focus,
.fc .fc-button-primary:not(:disabled):active:focus,.fc .fc-button-primary:focus{
  box-shadow: none;
}
.fc-prev-button .fc-button .fc-button-primary, .fc .fc-button-primary:not(:disabled):active{
width:20px;
height:20px;
}
.fc-icon{
  width:8px;
  height:8px;
  display: none;
}
.fc-day{
  cursor: pointer;
  background: ${customColor.lightGray};
}
.fc .fc-daygrid-event{
  margin-top: 2px;
}
.fc .fc-daygrid-day.fc-day-today{
  background: ${customColor.yellow_};
}
.fc-day-past, .fc-day-sun, .fc-day-sat{
  color:${customColor.gray};
  filter: brightness(94%);
}
.fc-col-header-cell{
  background: ${customColor.lightGray};
  color:${customColor.black};
  filter: brightness(100%);
}
.selected{
  filter:drop-shadow(0px 0px 6px ${customColor.blue});
}
/* react-transition-group */
.modal-enter{
  opacity: 0;
  transform: translate(-50%,12px);
}
.modal-enter-active {
  opacity: 1;
  transform: translate(-50%,0);
  transition: all 0.3s ease;
}
.time_modal-enter {
  width:1px;
  }
  .time_modal-enter-active {
    width:137px;
    transition: all 0.4s ease-out;
  }
`;
