import SortDogs from "./SortDogs";
import Pagination from "./Pagination";
import DogCardGrid from "../DogCardGrid";

const DogList = ({
  postsPerPage,
  currentPosts,
  setCurrentPage,
  dogList,
  setDogList,
}) => {
  const paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <section className="dog-list | font-roboto capitalize flex flex-col md:block pb-5">
      <div className="flex items-center justify-between mb-2 md:mb-3">
        <h2 className="text-primary-blue-10 text-[1.2rem] sm:text-2xl font-bold">
          Small Dog
        </h2>
        <SortDogs dogList={dogList} setDogList={setDogList} />
      </div>
      <DogCardGrid dogs={currentPosts} className={"dog-list__card-grid"} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={dogList.length}
        dogList={dogList}
        paginate={paginate}
      />
    </section>
  );
};

export default DogList;
