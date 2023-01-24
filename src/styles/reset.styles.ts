// import * as React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  html,
    body {
      height: 100%;
    }
    html {
      font-size: 10px;
    }
    body {
      font-size: 1.6rem;
      font-family:sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      /* background: papayawhip; */
     
      background: linear-gradient(
        to bottom,
        #f5f5dc 0%,
        #d2b48c 100%
      ); 
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    li {
      list-style-type: none;
    }
`;
