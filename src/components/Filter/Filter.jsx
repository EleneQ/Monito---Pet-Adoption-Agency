import FilterOptions from "./FilterOptions";
import DogList from "./DogList";
import "./Filter.css";
import { dogs } from "../../constants/data";
import { useState } from "react";

const Filter = () => {
  const [dogList, setDogList] = useState(dogs);
  const [filter, setFilter] = useState("");

  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  let postsPerPage = 4;

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dogs.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <section className="filter-section | px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto mt-[2rem]">
      <FilterOptions setFilter={setFilter} setDogList={setDogList} />
      <DogList
        postsPerPage={postsPerPage}
        allDogs={dogs}
        dogList={currentPosts}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default Filter;
