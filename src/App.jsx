import { HomePage, FilterPage, DogPage } from "./pages";
import { Routes, Route } from "react-router-dom";

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
