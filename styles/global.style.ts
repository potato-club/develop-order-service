import { createGlobalStyle } from "styled-components";

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

html::-webkit-scrollbar {
  width: 14px;
}
html::-webkit-scrollbar-thumb {
  background-color: #17181d;
  border-radius: 10px;
  background-clip: padding-box;
  border: 4px solid transparent;
}
html::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 10px;
}
html::-webkit-scrollbar-button:start:decrement {
  background-color: transparent;
  height: 80px;
}
html::-webkit-scrollbar-button:end:increment {
  background-color: transparent;
  height: 188px;
}
html {
  overflow: overlay;
  scroll-behavior: smooth;
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
.modal-enter{
  opacity: 0;
  transform: translate(-50%,12px);
}
.modal-enter-active {
  opacity: 1;
  transform: translate(-50%,0);
  transition: all 0.3s ease;
}
`;
