import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    body {
      margin: 0;
      padding: 0;
      position: relative;
      font-size: 14px;
      font-family: Prompt;
      color: #333333;
      background: #FFFFFF;
    }
    a {
      text-decoration: none;
    }
    svg {
      display: block;
    }
    h1, h2, h3, h4, h5, h6, p {
      margin: 0;
      padding: 0;
      font-weight: 400;
    }
    button {
      border: none;
      background: inherit;
      font-family: inherit;
      cursor: pointer; 
      &:focus {
        outline: none;
      }
    }
    input {
      &:focus {
        outline: none;
      }
    }
    textarea {
      font-family: inherit;
      &:focus {
        outline: none;
      }
    }
  }
`;
