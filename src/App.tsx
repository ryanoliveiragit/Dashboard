import { ThemeProvider } from "styled-components";
import { Dashboard } from "./components/deashboard/dashboard";
import { Header } from "./components/header";
import { ContainerApp } from "./styles/pages/app";
import { defaultTheme } from "./styles/themes";

export function App() {
  return (
    <ContainerApp>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Dashboard />
      </ThemeProvider>
    </ContainerApp>
  );
}
