import { useContext, useEffect } from "react";
import { FiltersContext } from "../../../context/FiltersContext";
import { DogDataContext } from "../../../context/DogDataContext";
import GenderOptions from "./GenderOptions";
import ColorOptions from "./ColorOptions";
import SizeOptions from "./SizeOptions";

const applyFilters = (filters, setDogList, allDogs) => {
  let filteredDogs = [...allDogs];

  // Apply gender filter
  if (filters.gender) {
    filteredDogs = filteredDogs.filter(
      (dog) => dog.gender.toLowerCase() === filters.gender.toLowerCase()
    );
  }

  //Apply color filters
  if (filters.colors && filters.colors.length > 0) {
    filteredDogs = filteredDogs.filter((dog) =>
      filters.colors.every((color) => dog.colors.includes(color.toLowerCase()))
    );
  }

  // Apply size filter
  if (filters.size) {
    filteredDogs = filteredDogs.filter(
      (dog) => dog.size.toLowerCase() === filters.size.toLowerCase()
    );
  }

  setDogList(filteredDogs);
};

const FilterOptions = () => {
  const { filters } = useContext(FiltersContext);
  const { allDogs, setDogList } = useContext(DogDataContext);

  applyFiltersOnMount(filters, setDogList, allDogs);

  return (
    <section>
      <h2 className="text-2xl text-primary-blue-9 font-bold mb-3">Filters</h2>
      <GenderOptions applyFilters={applyFilters} />
      <hr className="my-3" />
      <ColorOptions applyFilters={applyFilters} />
      <hr className="my-3" />
      <SizeOptions applyFilters={applyFilters} />
      <hr className="my-3" />
    </section>
  );
};

function applyFiltersOnMount(filters, setDogList, allDogs) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      applyFilters(filters, setDogList, allDogs);
    }, 10);

    return () => clearTimeout(timeoutId);
  }, []);
}

export default FilterOptions;
