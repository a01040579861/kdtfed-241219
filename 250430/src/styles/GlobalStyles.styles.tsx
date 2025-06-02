import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
      box-sizing: border-box;
    }

    ul, li {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    :root {
      --light-color: #fff;
      --dark-color: #000;
      --accent-color: #dc143c;
      --border-color: #ccc;
      --rate-color: #ffa300;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: "Source Sans 3", sans-serif;
      font-size: 1.6rem;
      height: 100%;
      background: ${({ theme }) => theme.black.darker};
    }
`;

export default GlobalStyles;
