import { useEffect } from "react";
import { useDogData } from "../../context/DogDataContext";
import { useFilters } from "../../context/FiltersContext";
import GenderOptions from "./Options/GenderOptions";
import ColorOptions from "./Options/ColorOptions";
import SizeOptions from "./Options/SizeOptions";
import CTADogs from "./CTADogs";
import DogList from "./DogList";

const FilterSortDogs = () => {
  const { filterDogs, sortDogs, setDogList } = useDogData();
  const { filters } = useFilters();

  useEffect(() => {
    const filteredDogs = filterDogs(filters);
    const sortedDogs = sortDogs(filters.sort, filteredDogs);

    setDogList(sortedDogs);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <main>
      <CTADogs />

      <section className="filter-section | md:min-h-[600px] px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto mt-[2rem]">
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
  );
};

export default FilterSortDogs;
