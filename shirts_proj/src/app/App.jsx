import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToHash from "./ScrollToHash";
import LandingPage from "../pages/Landing/LandingPage";
import ExamplesPage from "../pages/Examples/ExamplesPage";

export default function App() {
  return (
    <HashRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/examples" element={<ExamplesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
