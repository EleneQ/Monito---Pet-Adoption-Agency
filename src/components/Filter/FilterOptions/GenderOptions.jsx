import { useContext } from "react";
import { FiltersContext } from "../../../context/FiltersContext";
import { DogDataContext } from "../../../context/DogDataContext";
import { filterOptions } from "../../../constants/data";

const GenderOptions = ({ applyFilters }) => {
  const { filters, setSearchParams } = useContext(FiltersContext);
  const { allDogs, setDogList } = useContext(DogDataContext);

  // const handleGenderFilter = (e) => {
  //   const selectedGender = e.target.value.toLowerCase();

  //   setSearchParams((prevParams) => {
  //     const newParams = {
  //       ...prevParams,
  //       gender:
  //         selectedGender === prevParams.get("gender") ? null : selectedGender,
  //     };

  //     e.target.checked =
  //       selectedGender.toLowerCase() === newParams.gender?.toLowerCase();

  //     applyFilters(newParams, setDogList, allDogs);
  //     return newParams;
  //   });
  // };

  const handleGenderFilter = (e) => {
    const selectedGender = e.target.value.toLowerCase();

    setSearchParams((prevParams) => {
      const newGender =
        selectedGender === prevParams.get("gender") ? null : selectedGender;

      const newParams = new URLSearchParams(prevParams);
      if (newGender !== null) {
        newParams.set("gender", newGender);
      } else {
        newParams.delete("gender");
      }

      filters.gender = newGender;
      applyFilters(filters, setDogList, allDogs);

      e.target.checked = selectedGender === newGender;
      return newParams;
    });
  };

  return (
    <div>
      <h3 className="font-bold">Gender</h3>
      <ul>
        {filterOptions.genders.map((gender) => {
          return (
            <li className="capitalize" key={gender}>
              <label htmlFor={gender}>
                <input
                  id={gender}
                  type="radio"
                  name="gender"
                  value={gender}
                  onClick={handleGenderFilter}
                  defaultChecked={
                    filters.gender?.toLowerCase() === gender?.toLowerCase()
                  }
                />
                {gender}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GenderOptions;
