import { createRoot } from "react-dom/client";
import { App } from "./components/app";
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';

const container = document.getElementById("app");
const root = createRoot(container)
root.render(  <FluentProvider theme={teamsLightTheme}>
    <App />
  </FluentProvider>,);