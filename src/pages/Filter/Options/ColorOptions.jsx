import { useFilters } from "../../../context/FiltersContext";
import { filterOptions } from "../../../constants/data/filterOptions";

const CheckboxCircle = ({ style }) => (
  <span className="color-circle" style={style} />
);

const ColorOptions = () => {
  const { filterParams, setFilterParams } = useFilters();

  const handleColorFilter = (e) => {
    const selectedColor = e.target.value.toLowerCase();

    setFilterParams((prev) => {
      const prevFilters = prev.get("colors")
        ? prev.get("colors").split(",")
        : [];

      const updatedFilters = e.target.checked
        ? [...prevFilters, selectedColor]
        : prevFilters.filter((f) => f !== selectedColor);

      prev.set("colors", updatedFilters.join(","));
      return prev;
    });
  };

  const isParamChecked = (filterTitle) => {
    const param = filterParams.get("colors") || "";
    return param.split(",").includes(filterTitle.toLowerCase());
  };

  return (
    <div>
      <h3 className="font-bold">Color</h3>
      <ul>
        {Object.keys(filterOptions.colors).map((color) => (
          <li className="checkbox-container | capitalize" key={color}>
            <label htmlFor={color}>
              <input
                id={color}
                type="checkbox"
                name={color}
                value={color}
                checked={isParamChecked(color)}
                onChange={handleColorFilter}
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
