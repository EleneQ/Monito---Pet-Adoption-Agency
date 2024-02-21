import React, { createContext, useState, ReactNode } from "react";
import { dogsInfo as allDogs } from "../constants/data/dogs";
import { DogInfo } from "../types/entities/Dogs";
import { Filters } from "../types/entities/Filters";

interface DogDataContextType {
  dogList: DogInfo[];
  setDogList: React.Dispatch<React.SetStateAction<DogInfo[]>>;
  sortDogs: (optionValue: string, dogsToSort: DogInfo[]) => DogInfo[];
  filterDogs: (filters: Filters) => DogInfo[];
}

interface DogDataProviderProps {
  children: ReactNode;
}

export const DogDataContext = createContext<DogDataContextType>({
  dogList: [],
  setDogList: () => {},
  sortDogs: () => [],
  filterDogs: () => [],
});

export const DogDataProvider = ({ children }: DogDataProviderProps) => {
  const [dogList, setDogList] = useState(allDogs);

  const filterDogs = (filters: Filters) => {
    let filteredDogs = [...allDogs];

    //gender filter
    if (filters.gender) {
      filteredDogs = filteredDogs.filter(
        (dog) => dog.gender.toLowerCase() === filters.gender!.toLowerCase()
      );
    }

    //color filters
    if (filters.colors && filters.colors.length > 0) {
      filteredDogs = filteredDogs.filter((dog) =>
        filters.colors!.every((color) =>
          dog.colors.includes(color.toLowerCase())
        )
      );
    }

    //size filter
    if (filters.size) {
      filteredDogs = filteredDogs.filter(
        (dog) => dog.size.toLowerCase() === filters.size!.toLowerCase()
      );
    }

    return filteredDogs;
  };

  const sortDogs = (optionValue: string, dogsToSort: DogInfo[]) => {
    const sortedDogs = [...dogsToSort];

    if (optionValue) {
      switch (optionValue) {
        case "oldest":
          sortedDogs.sort(
            (a, b) =>
              new Date(a.birthdate).getTime() - new Date(b.birthdate).getTime()
          );
          break;
        case "youngest":
          sortedDogs.sort(
            (a, b) =>
              new Date(b.birthdate).getTime() - new Date(a.birthdate).getTime()
          );
          break;
        default:
          console.error("Invalid dog sorting value!");
      }
    }

    return sortedDogs;
  };

  return (
    <DogDataContext.Provider
      value={{ dogList, setDogList, sortDogs, filterDogs }}
    >
      {children}
    </DogDataContext.Provider>
  );
};
