import { useFilters } from "../../../context/FiltersContext";
import { filterOptions } from "../../../constants/data/filterOptions";
import { useDogData } from "../../../context/DogDataContext";

const GenderOptions = () => {
  const { filters, setFilterParams } = useFilters();
  const { filterDogs } = useDogData();

  const handleGenderFilter = (e) => {
    const selectedGender = e.target.value.toLowerCase();

    setFilterParams((prev) => {
      prev.set("gender", selectedGender);
      return prev;
    });

    filters.gender = selectedGender;
    filterDogs(filters);
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
                  checked={
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
