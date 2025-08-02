import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Toast from "./components/common/toast/toast";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Toast />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
