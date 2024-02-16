import { useContext } from "react";
import { FiltersContext } from "../../../context/FiltersContext";
import { DogDataContext } from "../../../context/DogDataContext";
import { filterOptions } from "../../../constants/data/filterOptions";

const SizeOptions = ({ applyFilters }) => {
  const { filters, setSearchParams } = useContext(FiltersContext);
  const { allDogs, setDogList } = useContext(DogDataContext);

  const handleSizeFilter = (e) => {
    const selectedSize = e.target.value.toLowerCase();

    setSearchParams((prevParams) => {
      const newSize =
        selectedSize === prevParams.get("size") ? null : selectedSize;

      const newParams = new URLSearchParams(prevParams);
      if (newSize !== null) {
        newParams.set("size", newSize);
      } else {
        newParams.delete("size");
      }

      filters.size = newSize;
      applyFilters(filters, setDogList, allDogs);

      e.target.checked = selectedSize === newSize;
      return newParams;
    });
  };

  return (
    <div>
      <h3 className="font-bold">Size</h3>
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
                defaultChecked={
                  filters.size?.toLowerCase() === size?.toLowerCase()
                }
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
