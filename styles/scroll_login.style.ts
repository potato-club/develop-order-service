import { createGlobalStyle } from "styled-components";
import { customColor } from "../src/components/customColor";

export const ScrollLogin = createGlobalStyle`
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
    height: 130px;
    }
  }
  `;
