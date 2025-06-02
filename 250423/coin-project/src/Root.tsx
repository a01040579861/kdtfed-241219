import { useState } from "react";
import { Outlet } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider, styled } from "styled-components";
import { darkTheme, lightTheme } from "./theme.ts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms.ts";

const Button = styled.button`
  position: absolute;
  top: 30px;
  left: 30px;
  padding: 8px 14px;
  border: none;
  border-radius: 8ex;
  cursor: pointer;
`;

function Root() {
  const isDark = useRecoilValue(isDarkAtom);
  // const [isDark, setIsDark] = useState(false);
  // const toggleDark = () => setIsDark((current) => !current);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <ReactQueryDevtools
          initialIsOpen={true}
          buttonPosition="bottom-right"
        />
        {/* <Button onClick={toggleDark}>Toggle Mode</Button> */}
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default Root;
