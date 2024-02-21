import { useFilters } from "../../../hooks/useFilters";
import { filterOptions } from "../../../constants/data/filterOptions";

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
                onChange={(e) => {
                  const newParams = new URLSearchParams(filterParams);

                  newParams.set("size", e.target.value.toLowerCase());
                  setFilterParams(newParams);
                }}
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
