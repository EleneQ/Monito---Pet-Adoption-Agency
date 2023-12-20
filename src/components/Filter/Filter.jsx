import { useState } from "react";
import { dogs as allDogs } from "../../constants/data";
import FilterOptions from "./FilterOptions";
import DogList from "./DogList";
import "./Filter.css";

const Filter = () => {
  const [dogList, setDogList] = useState(allDogs);
  const [filters, setFilters] = useState({
    gender: null,
    colors: [],
    size: null,
  });

  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  let postsPerPage = 4;

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dogList.slice(indexOfFirstPost, indexOfLastPost); //a new array

  return (
    <section className="filter-section | px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto mt-[2rem]">
      <FilterOptions
        setFilters={setFilters}
        filters={filters}
        setDogList={setDogList}
        allDogs={allDogs}
        setCurrentPage={setCurrentPage}
      />
      <DogList
        postsPerPage={postsPerPage}
        currentPosts={currentPosts}
        dogList={dogList}
        setCurrentPage={setCurrentPage}
        setDogList={setDogList}
        allDogs={allDogs}
        currentPage={currentPage}
        filters={filters}
      />
    </section>
  );
};

export default Filter;
