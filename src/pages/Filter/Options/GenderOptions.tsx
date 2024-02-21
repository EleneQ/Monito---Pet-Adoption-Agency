import { useFilters } from "../../../hooks/useFilters";
import { filterOptions } from "../../../constants/data/filterOptions";

const GenderOptions = () => {
  const { filterParams, setFilterParams } = useFilters();

  return (
    <div>
      <h3 className="font-bold">Gender</h3>
      <ul>
        {filterOptions.genders.map((gender) => {
          return (
            <li className="capitalize" key={gender}>
              <label className="radio-label" htmlFor={gender}>
                <input
                  type="radio"
                  className="radio-input"
                  id={gender}
                  name="gender"
                  value={gender}
                  checked={
                    filterParams.get("gender")?.toLowerCase() ===
                    gender.toLowerCase()
                  }
                  onChange={(e) => {
                    const newParams = new URLSearchParams(filterParams);

                    newParams.set("gender", e.target.value.toLowerCase());
                    setFilterParams(newParams);
                  }}
                />
                <div className="radio-design" />
                <div className="capitalize">{gender}</div>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GenderOptions;
