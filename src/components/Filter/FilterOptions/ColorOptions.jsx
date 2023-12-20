import { useContext } from "react";
import { FiltersContext } from "../../../context/FiltersContext";
import { DogDataContext } from "../../../context/DogDataContext";
import { filterOptions } from "../../../constants/data";

const CheckboxCircle = ({ style }) => (
  <span className="checkbox-circle" style={style}></span>
);

const ColorOptions = ({ applyFilters }) => {
  const { setFilters } = useContext(FiltersContext);
  const { allDogs, setDogList } = useContext(DogDataContext);

  const handleColorFilter = (e) => {
    const selectedColor = e.target.value;

    setFilters((prevFilters) => {
      const updatedColors = prevFilters.colors.includes(selectedColor)
        ? prevFilters.colors.filter((color) => color !== selectedColor)
        : [...prevFilters.colors, selectedColor];

      const newFilters = {
        ...prevFilters,
        colors: updatedColors,
      };

      applyFilters(newFilters, setDogList, allDogs);
      return newFilters;
    });
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
