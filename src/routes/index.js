import { Routes, Route } from "react-router-dom";
import Home from "../templates/Home";
import Weather from "../templates/Weather";

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/weather/:city" element={<Weather />} />
    </Routes>
  );
}
