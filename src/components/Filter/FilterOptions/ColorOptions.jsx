import { useFilters } from "../../../context/FiltersContext";
import { filterOptions } from "../../../constants/data/filterOptions";
import { useDogData } from "../../../context/DogDataContext";

const CheckboxCircle = ({ style }) => (
  <span className="checkbox-circle" style={style} />
);

const ColorOptions = () => {
  const { filters, setFilterParams } = useFilters();
  const { filterDogs } = useDogData();

  const handleColorFilter = (e) => {
    const selectedColor = e.target.value.toLowerCase();

    setFilterParams((prevParams) => {
      const newColors = prevParams.getAll("colors");

      if (newColors.includes(selectedColor)) {
        filters.colors = newColors.filter((color) => color !== selectedColor);
      } else {
        filters.colors = [...newColors, selectedColor];
      }

      const newParams = new URLSearchParams(prevParams);

      newParams.delete("colors");
      filters.colors.forEach((color) => newParams.append("colors", color));
      return newParams;
    });

    filterDogs(filters);
  };

  return (
    <div className="color-options">
      <h3 className="font-bold">Color</h3>
      <ul>
        {Object.keys(filterOptions.colors).map((color) => (
          <li className="capitalize" key={color}>
            <label htmlFor={color}>
              <input
                id={color}
                type="checkbox"
                name={color}
                value={color}
                onClick={handleColorFilter}
                checked={filters.colors?.includes(color)}
              />
              <CheckboxCircle
                style={{ background: filterOptions.colors[color] }}
              />
              {color}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorOptions;
