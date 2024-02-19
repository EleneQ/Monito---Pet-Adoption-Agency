import { createContext, useContext, useState } from "react";
import { dogsInfo as allDogs } from "../constants/data/dogs";

const DogDataContext = createContext();

export const useDogData = () => {
  return useContext(DogDataContext);
};

export const DogDataProvider = ({ children }) => {
  const [dogList, setDogList] = useState(allDogs);

  const filterDogs = (filters) => {
    let filteredDogs = [...allDogs];

    //gender filter
    if (filters.gender) {
      filteredDogs = filteredDogs.filter(
        (dog) => dog.gender.toLowerCase() === filters.gender.toLowerCase()
      );
    }

    //color filters
    if (filters.colors && filters.colors.length > 0) {
      filteredDogs = filteredDogs.filter((dog) =>
        filters.colors.every((color) =>
          dog.colors.includes(color.toLowerCase())
        )
      );
    }

    //size filter
    if (filters.size) {
      filteredDogs = filteredDogs.filter(
        (dog) => dog.size.toLowerCase() === filters.size.toLowerCase()
      );
    }

    return filteredDogs;
  };

  const sortDogs = (optionValue, dogsToSort) => {
    let sortedDogs = [...dogsToSort];

    if (optionValue) {
      switch (optionValue) {
        case "oldest":
          sortedDogs.sort((a, b) => a.birthdate - b.birthdate);
          break;
        case "youngest":
          sortedDogs.sort((a, b) => b.birthdate - a.birthdate);
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
