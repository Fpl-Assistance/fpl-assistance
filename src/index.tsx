import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";

const rootDiv = document.getElementById("root") as HTMLElement;
const root = createRoot(rootDiv);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
