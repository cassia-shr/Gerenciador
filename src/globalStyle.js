// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: #3a3b49;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: white;
  }
`;

export default GlobalStyle;