import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { isTauri } from "@tauri-apps/api/core";
import { BrowserSite } from "./components/BrowserSite";

const desktop = isTauri();
if (!desktop) document.documentElement.classList.add("browser-document");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {desktop ? <App /> : <BrowserSite><App /></BrowserSite>}
  </React.StrictMode>,
);