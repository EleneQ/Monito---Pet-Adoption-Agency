import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTADogs from "./CTADogs";
import DogList from "../../components/Filter/DogList";
import { FiltersProvider } from "../../context/FiltersContext";
import GenderOptions from "../../components/Filter/FilterOptions/GenderOptions";
import ColorOptions from "../../components/Filter/FilterOptions/ColorOptions";
import SizeOptions from "../../components/Filter/FilterOptions/SizeOptions";
import { DogDataProvider } from "../../context/DogDataContext";

const FilterPage = () => {


  return (
    <DogDataProvider>
      <FiltersProvider>
        <Navbar />
   
        <main>
          <CTADogs />

          <section className="filter-section | px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto mt-[2rem]">
            <div>
              <h2 className="text-2xl text-primary-blue-9 font-bold mb-3">
                Filters
              </h2>
              <GenderOptions />
              <hr className="my-3" />
              <ColorOptions />
              <hr className="my-3" />
              <SizeOptions />
              <hr className="my-3" />
            </div>
            <DogList />
          </section>
        </main>
        <Footer />
      </FiltersProvider>
    </DogDataProvider>
  );
};

export default FilterPage;
