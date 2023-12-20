import SortDogs from "./SortDogs";
import Pagination from "./Pagination";
import DogCardGrid from "../DogCardGrid";

const DogList = ({
  postsPerPage,
  currentPosts,
  setCurrentPage,
  dogList,
  setDogList,
  allDogs,
  currentPage,
  filters,
}) => {
  const paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <section className="dog-list | font-roboto capitalize flex flex-col md:block pb-5">
      <div className="flex items-center justify-between mb-2 md:mb-3">
        <div className="flex items-center gap-3">
          <h2 className="text-primary-blue-9 text-[1.2rem] sm:text-2xl font-bold">
            {dogList.length <= 1 ? "Dog" : "Dogs"}
          </h2>
          <p className="text-sm text-slate-500">{`${dogList.length} ${
            dogList.length === 1 ? "puppy" : "puppies"
          }`}</p>
        </div>
        <SortDogs
          dogList={dogList}
          setDogList={setDogList}
          allDogs={allDogs}
          filters={filters}
        />
      </div>
      <DogCardGrid dogs={currentPosts} className={"dog-list__card-grid"} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={dogList.length}
        dogList={dogList}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section>
  );
};

export default DogList;
