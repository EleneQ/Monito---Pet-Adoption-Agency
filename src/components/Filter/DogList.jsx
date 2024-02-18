import { useState, useEffect, useContext } from "react";
import { DogDataContext } from "../../context/DogDataContext";
import { FiltersContext } from "../../context/FiltersContext";
import SortDogs from "./SortDogs";
import Pagination from "./Pagination";
import DogCardGrid from "../../pages/Filter/DogCardGrid";

const DogList = () => {
  const { dogList } = useContext(DogDataContext);
  const { filters } = useContext(FiltersContext);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  let postsPerPage = 15;

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dogList.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNum) => setCurrentPage(pageNum);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <section className="dog-list | font-roboto capitalize flex flex-col md:block pb-5">
      <div className="flex items-center justify-between mb-3 md:mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-primary-blue-9 text-[1.2rem] sm:text-2xl font-bold">
            {dogList.length <= 1 ? "Dog" : "Dogs"}
          </h2>
          <p className="text-sm text-slate-500">{`${dogList.length} ${
            dogList.length === 1 ? "puppy" : "puppies"
          }`}</p>
        </div>
        <SortDogs />
      </div>
      <DogCardGrid dogs={currentPosts} />
      {dogList.length <= 0 && (
        <p className="text-lg text-black">No results found</p>
      )}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={dogList.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section>
  );
};

export default DogList;
