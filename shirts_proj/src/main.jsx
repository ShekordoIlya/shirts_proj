import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainSection from "./Components/MainSection/MainSection";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainSection />
  </StrictMode>,
);
