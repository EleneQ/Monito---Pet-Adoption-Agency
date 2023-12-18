import { useState } from "react";
import { dogs } from "../../constants/data";
import FilterOptions from "./FilterOptions";
import DogList from "./DogList";
import "./Filter.css";

const Filter = () => {
  const [genderFilter, setGenderFilter] = useState(null);
  const [colorFilters, setColorFilters] = useState([]);
  const [sizeFilter, setSizeFilter] = useState(null);

  const [dogList, setDogList] = useState(dogs);

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
        setGenderFilter={setGenderFilter}
        setColorFilters={setColorFilters}
        setSizeFilter={setSizeFilter}
        setDogList={setDogList}
        dogs={dogs}
        setCurrentPage={setCurrentPage}
      />
      <DogList
        postsPerPage={postsPerPage}
        currentPosts={currentPosts}
        dogList={dogList}
        setCurrentPage={setCurrentPage}
        setDogList={setDogList}
      />
    </section>
  );
};

export default Filter;
