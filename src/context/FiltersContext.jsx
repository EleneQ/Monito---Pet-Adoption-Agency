import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";

const FiltersContext = createContext();

export const useFilters = () => {
  return useContext(FiltersContext);
};

export const FiltersProvider = ({ children }) => {
  const [filterParams, setFilterParams] = useSearchParams();
  const filters = {
    gender: filterParams.get("gender") || "",
    colors: filterParams.get("colors")
      ? filterParams.get("colors").split(",")
      : [],
    size: filterParams.get("size") || "",
    sort: filterParams.get("sort") || "",
  };

  const filterValues = Object.values(filters).filter(
    (value) => value !== null && value.length !== 0
  );

  return (
    <FiltersContext.Provider
      value={{ filters, filterParams, setFilterParams, filterValues }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
