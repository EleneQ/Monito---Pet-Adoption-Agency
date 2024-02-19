import { filterOptions } from "../../../constants/data/filterOptions";
import { useFilters } from "../../../context/FiltersContext";

const SizeOptions = () => {
  const { filterParams, setFilterParams } = useFilters();

  return (
    <div>
      <h3 className="font-bold">Size</h3>
      <ul>
        {filterOptions.sizes.map((size) => (
          <li className="capitalize" key={size}>
            <label className="radio-label" htmlFor={size}>
              <input
                type="radio"
                className="radio-input"
                id={size}
                name="size"
                value={size}
                checked={
                  filterParams.get("size")?.toLowerCase() === size.toLowerCase()
                }
                onChange={(e) =>
                  setFilterParams((prev) => {
                    prev.set("size", e.target.value.toLowerCase());
                    return prev;
                  })
                }
              />
              <div className="radio-design" />
              <div className="capitalize">{size}</div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SizeOptions;
