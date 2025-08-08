import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { ThemeProvider } from "styled-components";
import {
  ThemeProviderCustom,
  useTheme,
  themes,
} from "./styles/theme/themeContext";
import GlobalStyle from "./styles/GlobalStyle";
import Toast from "./components/ui/Toast";

function ThemedApp() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Toast />
      <Router />
    </ThemeProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProviderCustom>
        <ThemedApp />
      </ThemeProviderCustom>
    </BrowserRouter>
  );
}

export default App;
