import { useContext } from "react";
import { FiltersContext } from "../../../context/FiltersContext";
import { DogDataContext } from "../../../context/DogDataContext";
import { filterOptions } from "../../../constants/data";

const SizeOptions = ({ applyFilters }) => {
  const { setFilters } = useContext(FiltersContext);
  const { allDogs, setDogList } = useContext(DogDataContext);

  const handleSizeFilter = (e) => {
    const selectedSize = e.target.value;

    setFilters((prevFilters) => {
      const newFilters = {
        ...prevFilters,
        size: selectedSize === prevFilters.size ? null : selectedSize,
      };

      e.target.checked =
        e.target.value.toLowerCase() === newFilters.size?.toLowerCase();

      applyFilters(newFilters, setDogList, allDogs);
      return newFilters;
    });
  };

  return (
    <div>
      <h3>Size</h3>
      <ul>
        {filterOptions.sizes.map((size) => (
          <li className="capitalize" key={size}>
            <label htmlFor={size}>
              <input
                id={size}
                type="radio"
                name="size"
                value={size}
                onClick={handleSizeFilter}
              />
              {size}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SizeOptions;
