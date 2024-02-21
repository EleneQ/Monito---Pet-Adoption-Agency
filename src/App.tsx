import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import FilterPage from "./pages/Filter/FilterPage";
import DogPage from "./pages/Dog/DogPage";
import ProuctPage from "./pages/Product/ProductPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/filters/*" element={<FilterPage />} />
      <Route path="/dogs/:dogId" element={<DogPage />} />
      <Route path="/products/:productId" element={<ProuctPage />} />
    </Routes>
  );
};
export default App;
