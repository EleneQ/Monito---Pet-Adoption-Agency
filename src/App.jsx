import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import FilterPage from "./pages/Filter/FilterPage";
import DogPage from "./pages/Dog/DogPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/filters/*" element={<FilterPage />} />
      <Route path="/dogs/:dogId" element={<DogPage />} />
    </Routes>
  );
};
export default App;
