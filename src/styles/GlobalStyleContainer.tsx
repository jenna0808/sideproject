import { PropsWithChildren } from "react";
import { Global, ThemeProvider } from "@emotion/react";

import { GlobalStyle } from "./GlobalStyle";
import StyleTheme from "./theme";

/**
 *
 * @description emotion 글로벌 스타일 정의
 * @external https://www.howdy-mj.me/css/emotionjs-intro
 */
const GlobalStyleContainer = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={StyleTheme}>
      <Global styles={GlobalStyle} />
      {children}
    </ThemeProvider>
  );
};

export default GlobalStyleContainer;
