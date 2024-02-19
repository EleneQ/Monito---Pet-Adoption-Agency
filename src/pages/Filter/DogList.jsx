import { useState, useEffect } from "react";
import { useFilters } from "../../context/FiltersContext";
import SortDropdown from "./SortDropdown";
import Pagination from "../../components/Pagination";
import DogCardGrid from "./DogCardGrid";
import { useDogData } from "../../context/DogDataContext";

const DogList = () => {
  const { dogList } = useDogData();
  const { filters } = useFilters();

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dogList.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNum) => setCurrentPage(pageNum);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <section className="dog-list | font-roboto capitalize flex flex-col md:block pb-5 relative">
      <div className="flex items-center justify-between mb-3 md:mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-primary-blue-9 text-[1.2rem] sm:text-2xl font-bold">
            {dogList.length <= 1 ? "Dog" : "Dogs"}
          </h2>
          <p className="text-sm text-slate-500">{`${dogList.length} ${
            dogList.length === 1 ? "puppy" : "puppies"
          }`}</p>
        </div>

        <SortDropdown className="hidden md:block" />
      </div>

      <DogCardGrid dogs={currentPosts} />

      {dogList.length <= 0 && (
        <p className="text-lg text-black">No results found</p>
      )}

      <Pagination
        className="absolute bottom-0 left-[50%] -translate-x-[50%]"
        itemsAmount={dogList.length}
        itemsPerPage={postsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section>
  );
};

export default DogList;
