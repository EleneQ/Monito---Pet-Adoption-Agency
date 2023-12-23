import { useContext } from "react";
import { FiltersContext } from "../../../context/FiltersContext";
import { DogDataContext } from "../../../context/DogDataContext";
import { filterOptions } from "../../../constants/data";

const CheckboxCircle = ({ style }) => (
  <span className="checkbox-circle" style={style}></span>
);

const ColorOptions = ({ applyFilters }) => {
  // const handleColorFilter = (e) => {
  //   const selectedColor = e.target.value;

  //   setFilters((prevFilters) => {
  //     const updatedColors = prevFilters.colors.includes(selectedColor)
  //       ? prevFilters.colors.filter((color) => color !== selectedColor)
  //       : [...prevFilters.colors, selectedColor];

  //     const newFilters = {
  //       ...prevFilters,
  //       colors: updatedColors,
  //     };

  //     applyFilters(newFilters, setDogList, allDogs);
  //     return newFilters;
  //   });
  // };

  const { filters, setSearchParams } = useContext(FiltersContext);
  const { allDogs, setDogList } = useContext(DogDataContext);

  const handleColorFilter = (e) => {
    const selectedColor = e.target.value.toLowerCase();

    setSearchParams((prevParams) => {
      const newColors = prevParams.getAll("colors");

      if (newColors.includes(selectedColor)) {
        const updatedColors = newColors.filter(
          (color) => color !== selectedColor
        );
        filters.colors = updatedColors;
      } else {
        const updatedColors = [...newColors, selectedColor];
        filters.colors = updatedColors;
      }

      const newParams = new URLSearchParams(prevParams);

      // Remove existing "colors" parameter
      newParams.delete("colors");
      // Append updated "colors" parameter
      filters.colors.forEach((color) => newParams.append("colors", color));

      applyFilters(filters, setDogList, allDogs);
      return newParams;
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
                defaultChecked={filters.colors?.includes(color)}
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
