import { useState } from "react";
import { DogDataContext } from "../../context/DogDataContext";
import { dogs as allDogs } from "../../constants/data/dogInfo";
import FilterOptions from "./FilterOptions/FilterOptions";
import DogList from "./DogList";

const Filter = () => {
  const [dogList, setDogList] = useState(allDogs);

  return (
    <section className="filter-section | px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto mt-[2rem]">
      <DogDataContext.Provider value={{ allDogs, dogList, setDogList }}>
        <FilterOptions />
        <DogList />
      </DogDataContext.Provider>
    </section>
  );
};

export default Filter;
