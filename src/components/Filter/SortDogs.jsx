import { useState, useRef, useEffect } from "react";
import { useDogData } from "../../context/DogDataContext";
import useOutsideClickHandler from "../../hooks/useOutsideClickHandler";
import { IoIosArrowForward } from "react-icons/io";
import { useFilters } from "../../context/FiltersContext";

const options = [
  { label: "Oldest", value: "oldest" },
  { label: "Youngest", value: "youngest" },
];

function SortDogs() {
  const divEl = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const { filters, setFilterParams } = useFilters();
  const { sortDogs } = useDogData();

  useOutsideClickHandler(divEl, () => {
    setIsOpen(false);
  });

  const handleOptionClick = (option) => {
    setIsOpen(false);

    setFilterParams((prev) => {
      prev.set("sort", option.value);
      return prev;
    });
    filters.sort = option.value;
  };

  useEffect(() => {
    sortDogs(filters.sort);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <div ref={divEl} className="relative cursor-pointer">
      <div
        className="flex justify-between items-center gap-[0.8rem] text-primary-blue-9 border-[1.5px] border-primary-blue-9 rounded-3xl px-4 py-1 shadow-xl hover:shadow-orange-shadow"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className="capitalize">
          {filters.sort ? `Sort by: ${filters.sort}` : "Sort by"}
        </p>
        <IoIosArrowForward />
      </div>
      {isOpen && (
        <ul className="absolute w-full text-white rounded-3xl px-5 py-1 mt-3 bg-primary-blue-9 border-white border-[2px]">
          {options.map((option) => (
            <div
              key={option.label}
              className="hover:bg-white hover:text-primary-blue-9 rounded cursor-pointer p-1"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SortDogs;
