import { useFilters } from "../../../hooks/useFilters";
import { filterOptions } from "../../../constants/data/filterOptions";

interface CheckboxCircleProps {
  style: React.CSSProperties;
}

const CheckboxCircle = ({ style }: CheckboxCircleProps) => (
  <span className="color-circle" style={style} />
);

const ColorOptions = () => {
  const { filterParams, setFilterParams } = useFilters();

  const handleColorFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedColor = e.target.value.toLowerCase();
    const prevColors = filterParams.get("colors")?.split(",") || [];

    const updatedColors = e.target.checked
      ? [...prevColors, selectedColor]
      : prevColors.filter((color) => color !== selectedColor);

    const updatedParams = new URLSearchParams(filterParams);
    
    if (updatedColors.length > 0) {
      updatedParams.set("colors", updatedColors.join(","));
    } else {
      updatedParams.delete("colors");
    }

    setFilterParams(updatedParams);
  };

  const isParamChecked = (filterTitle: string) => {
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
                style={{
                  background:
                    filterOptions.colors[
                      color as keyof typeof filterOptions.colors
                    ],
                }}
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
