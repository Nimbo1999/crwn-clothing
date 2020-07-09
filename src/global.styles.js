import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 40px;
    margin: 0;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    font-size: 23px;
    color: black;
  }

  a:hover {
    color: gray;
    transition-duration: 200ms;
  }

  * {
    box-sizing: border-box;
  }
`;