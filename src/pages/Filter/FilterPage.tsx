import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FiltersProvider } from "../../context/FiltersContext";
import { DogDataProvider } from "../../context/DogDataContext";
import FilterSortDogs from "./FilterSortDogs";
import CustomerSlider from "../../components/CustomerSlider";

const FilterPage = () => {
  return (
    <DogDataProvider>
      <FiltersProvider>
        <Navbar />

        <FilterSortDogs />
        <CustomerSlider />

        <Footer />
      </FiltersProvider>
    </DogDataProvider>
  );
};

export default FilterPage;
