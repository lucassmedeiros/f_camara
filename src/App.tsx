import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./context/AuthContext";
import Routes from "./routes/index";
import { ToastContainer } from "react-toastify";
import * as themeConfig from "./styles/themes";
import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={themeConfig.theme}>
        <>
          <Routes />
          <GlobalStyle />
          <ToastContainer />
        </>
      </ThemeProvider>
    </AuthProvider>
  );
}
