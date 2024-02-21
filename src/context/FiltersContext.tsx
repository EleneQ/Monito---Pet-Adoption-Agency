import { createContext, ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { Filters } from "../types/entities/Filters";

interface FiltersContextType {
  filters: Filters;
  filterParams: URLSearchParams;
  setFilterParams: (params: URLSearchParams) => void;
}

export const FiltersContext = createContext<FiltersContextType>({
  filters: {
    gender: "",
    colors: [],
    size: "",
    sort: "",
  },
  filterParams: new URLSearchParams(),
  setFilterParams: () => {},
});

interface FiltersProviderProps {
  children: ReactNode;
}

export const FiltersProvider = ({ children }: FiltersProviderProps) => {
  const [filterParams, setFilterParams] = useSearchParams();
  const filters: Filters = {
    gender: filterParams.get("gender") || "",
    colors: filterParams.get("colors")?.split(",") || [],
    size: filterParams.get("size") || "",
    sort: filterParams.get("sort") || "",
  };

  return (
    <FiltersContext.Provider value={{ filters, filterParams, setFilterParams }}>
      {children}
    </FiltersContext.Provider>
  );
};
