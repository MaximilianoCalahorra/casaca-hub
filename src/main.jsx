import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { App } from "./App.jsx";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/casaca-hub">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
