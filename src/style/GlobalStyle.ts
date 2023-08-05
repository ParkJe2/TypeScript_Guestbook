import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

* {
  font-family: 'SUITE-Regular';
    outline:none;
}

body {
  background-color: #F5F5F5;
  font-family: 'SUITE-Regular';
  margin: 20px auto;
  width: 50rem;
}



`;
export default GlobalStyle;
