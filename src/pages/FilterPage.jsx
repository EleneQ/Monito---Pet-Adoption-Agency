import { useState } from "react";
import { FiltersContext } from "../context/FiltersContext";
import { Navbar, CTADogs, Filter, Footer } from "../components";

const FilterPage = () => {
  const [filters, setFilters] = useState({
    gender: null,
    colors: [],
    size: null,
  });

  // Extract values from the filters object
  const filterValues = Object.values(filters).filter(
    (value) => value !== null && value.length !== 0
  );

  return (
    <>
      <FiltersContext.Provider value={{ filters, setFilters }}>
        <Navbar />
        <main>
          <p className="px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto text-gray-500 mb-3">{`Home > ${filterValues.join(
            " > "
          )}`}</p>
          <CTADogs />
          <Filter />
        </main>
        <Footer />
      </FiltersContext.Provider>
    </>
  );
};

export default FilterPage;
