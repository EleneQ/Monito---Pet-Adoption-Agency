import { useEffect, useRef, useState } from "react";
import { useDogData } from "../../hooks/useDogData";
import { useFilters } from "../../hooks/useFilters";
import GenderOptions from "./Options/GenderOptions";
import ColorOptions from "./Options/ColorOptions";
import SizeOptions from "./Options/SizeOptions";
import CTADogs from "./CTADogs.js";
import DogList from "./DogList.js";
import SortDropdown from "./SortDropdown.tsx";
import { TbFilter } from "react-icons/tb";
import useOutsideClickHandler from "../../hooks/useOutsideClickHandler";
import { motion } from "framer-motion";
import useWindowWidth from "../../hooks/useWindowWidth";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

const FilterSortDogs = () => {
  const filtersRef = useRef<HTMLDivElement>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const { filterDogs, sortDogs, setDogList } = useDogData();
  const { filters } = useFilters();

  const windowWidth = useWindowWidth();
  const { theme: twTheme } = resolveConfig(tailwindConfig);

  const isSmallScreen = windowWidth < parseInt(twTheme.screens.md);

  useOutsideClickHandler(filtersRef, () => {
    setFiltersOpen(false);
  });

  useEffect(() => {
    const filteredDogs = filterDogs(filters);
    const sortedDogs = sortDogs(filters.sort || "", filteredDogs); //could utilize pass by reference

    setDogList(sortedDogs);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <main>
      <CTADogs />

      <section className="filter-section max-width-center padding-x | md:min-h-[600px] mt-[2rem]">
        {/* Small Screen Filters */}
        {isSmallScreen && (
          <div className="flex justify-between items-end mb-[3rem]">
            <SortDropdown />

            <div className="relative" ref={filtersRef}>
              <p
                className="text-xl text-primary-blue-9 font-bold inline-flex gap-3 items-center cursor-pointer"
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
        )}

        {/* Big Screen Filters */}
        {!isSmallScreen && (
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
        )}

        <DogList />
      </section>
    </main>
  );
};

export default FilterSortDogs;
