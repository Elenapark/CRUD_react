import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

	* {     
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', 'Nanum Gothic', 'Malgun Gothic', sans-serif;
  }

  input {
    border-style: none;
  }

  a, a:visited{
    text-decoration: none;
    color:black;
  }

  ol, ul, li {
    list-style: none;
  }

  button {
    border-style: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
