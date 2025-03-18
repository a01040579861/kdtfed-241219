import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-light-color: #fff;
    --primary-dark-color: #000;
    --border-color: #ccc;
  }
  ${reset}
`;

export default GlobalStyles;
