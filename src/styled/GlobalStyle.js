import {createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    vertical-align: top;
  }
`;