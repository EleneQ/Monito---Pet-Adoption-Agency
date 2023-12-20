import { useContext } from "react";
import { FiltersContext } from "../../../context/FiltersContext";
import { DogDataContext } from "../../../context/DogDataContext";
import { filterOptions } from "../../../constants/data";

const GenderOptions = ({ applyFilters }) => {
  const { setFilters } = useContext(FiltersContext);
  const { allDogs, setDogList } = useContext(DogDataContext);

  const handleGenderFilter = (e) => {
    const selectedGender = e.target.value;

    setFilters((prevFilters) => {
      const newFilters = {
        ...prevFilters,
        gender: selectedGender === prevFilters.gender ? null : selectedGender,
      };

      e.target.checked =
        e.target.value.toLowerCase() === newFilters.gender?.toLowerCase();

      applyFilters(newFilters, setDogList, allDogs);
      return newFilters;
    });
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   gender: selectedGender === prevFilters.gender ? null : selectedGender,
    // }));
  };

  return (
    <div>
      <h3>Gender</h3>
      <ul>
        {filterOptions.genders.map((gender) => (
          <li className="capitalize" key={gender}>
            <label htmlFor={gender}>
              <input
                id={gender}
                type="radio"
                name="gender"
                value={gender}
                onClick={handleGenderFilter}
              />
              {gender}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenderOptions;
