import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TechSpecs from "./pages/TechSpecs";
import Compare from "./pages/Compare";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TechSpecs" element={<TechSpecs />} />
      <Route path="/Compare" element={<Compare />} />
    </Routes>
  );
}
