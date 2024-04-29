import { BrowserRouter } from "react-router-dom";

import GlobalStyleContainer from "./styles/GlobalStyleContainer";
import Router from "./router";

const App = () => {
  return (
    <GlobalStyleContainer>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GlobalStyleContainer>
  );
};

export default App;
