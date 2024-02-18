import { useDogData } from "../../../context/DogDataContext";
import { filterOptions } from "../../../constants/data/filterOptions";
import { useFilters } from "../../../context/FiltersContext";

const SizeOptions = () => {
  const { filters, setFilterParams } = useFilters();
  const { filterDogs } = useDogData();

  const handleSizeFilter = (e) => {
    const selectedSize = e.target.value.toLowerCase();

    setFilterParams((prev) => {
      prev.set("size", selectedSize);
      return prev;
    });

    filters.size = selectedSize;
    filterDogs(filters);
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
                checked={
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
