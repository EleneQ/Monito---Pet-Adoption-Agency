import { useEffect, useRef, useState } from "react";
import { useDogData } from "../../context/DogDataContext";
import { useFilters } from "../../context/FiltersContext";
import GenderOptions from "./Options/GenderOptions";
import ColorOptions from "./Options/ColorOptions";
import SizeOptions from "./Options/SizeOptions";
import CTADogs from "./CTADogs";
import DogList from "./DogList";
import SortDropdown from "./SortDropdown";
import { TbFilter } from "react-icons/tb";
import useOutsideClickHandler from "../../hooks/useOutsideClickHandler";
import { motion } from "framer-motion";

const FilterSortDogs = () => {
  const filtersRef = useRef();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const { filterDogs, sortDogs, setDogList } = useDogData();
  const { filters } = useFilters();

  useOutsideClickHandler(filtersRef, () => {
    setFiltersOpen(false);
  });

  useEffect(() => {
    const filteredDogs = filterDogs(filters);
    const sortedDogs = sortDogs(filters.sort, filteredDogs);

    setDogList(sortedDogs);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <main>
      <CTADogs />

      <section className="filter-section max-width-center padding-x | md:min-h-[600px] mt-[2rem]">
        {/* Small Screen Filters */}
        <div className="flex md:hidden justify-between items-center mb-[3rem]">
          <SortDropdown />

          <div className="relative" ref={filtersRef}>
            <p
              className="text-xl text-primary-blue-9 font-bold mb-3 inline-flex gap-3 items-center cursor-pointer"
              onClick={() => setFiltersOpen((prev) => !prev)}
            >
              <TbFilter className="text-2xl" /> Filter
            </p>

            <motion.div
              className={`p-[2rem] shadow-2xl rounded-lg absolute z-30 bg-white right-[-10px] min-w-[160px] md:min-w-[180px] ${
                filtersOpen ? "block" : "hidden"
              }`}
              initial={{ opacity: 0, y: -25 }}
              animate={{
                opacity: filtersOpen ? 1 : 0,
                y: filtersOpen ? 0 : -25,
              }}
            >
              <GenderOptions />
              <hr className="my-3" />
              <ColorOptions />
              <hr className="my-3" />
              <SizeOptions />
            </motion.div>
          </div>
        </div>

        {/* Big Screen Filters */}
        <div className="hidden md:block">
          <div className="">
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
        </div>

        <DogList />
      </section>
    </main>
  );
};

export default FilterSortDogs;
