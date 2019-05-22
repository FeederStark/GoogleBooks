import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root{
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothiing: antialiased !important;
    background: #ffe207;
    font-family: sans-serif;
    color: #000;
  }
`;
