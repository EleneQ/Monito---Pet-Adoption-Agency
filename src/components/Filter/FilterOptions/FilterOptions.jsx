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
  // useEffect(() => {
  //   applyFilters(filters, setDogList, allDogs);
  //   setCurrentPage(1);
  // }, [filters]);
  return (
    <section>
      <h2>Filter</h2>
      <GenderOptions applyFilters={applyFilters} />
      <hr />
      <ColorOptions applyFilters={applyFilters} />
      <hr />
      <SizeOptions applyFilters={applyFilters} />
      <hr />
    </section>
  );
};

export default FilterOptions;
