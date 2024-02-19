import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FiltersProvider } from "../../context/FiltersContext";
import { DogDataProvider } from "../../context/DogDataContext";
import FilterSortDogs from "./FilterSortDogs";

const FilterPage = () => {
  return (
    <DogDataProvider>
      <FiltersProvider>
        <Navbar />

        <FilterSortDogs />

        <Footer />
      </FiltersProvider>
    </DogDataProvider>
  );
};

export default FilterPage;
