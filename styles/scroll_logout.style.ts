import { createGlobalStyle } from "styled-components";
import { customColor } from "../src/components/customColor";

export const ScrollLogout = createGlobalStyle`
html {
    overflow:auto;
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
    background-color: ${customColor.lightGray};
    }
    ::-webkit-scrollbar-button:start:decrement {
    background-color: ${customColor.lightGray};
    height: 80px;
    }
    ::-webkit-scrollbar-button:end:increment {
    background-color: ${customColor.lightGray};
    height: 190px;
    }
  }
  `;
