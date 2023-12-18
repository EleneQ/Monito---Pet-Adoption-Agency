import Card from "../Card";
import { Button } from "../";
import { IoIosArrowForward } from "react-icons/io";
import Pagination from "./Pagination";

const DogList = ({ postsPerPage, allDogs, dogList, setCurrentPage }) => {
  //calculate age by birthdate
  const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();

    // Adjust age if the birthday hasn't occurred yet this year
    if (currentDate.getMonth() > birthDate.getMonth()) {
      const ageInMonths = currentDate.getMonth() - birthDate.getMonth();
      return `${ageInMonths} month${ageInMonths > 1 ? "s" : ""}`;
    }
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    return `${age} years`;
  };

  //change page
  const paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <section className="dog-list | font-roboto capitalize flex flex-col md:block pb-5">
      <div className="flex items-center justify-between mb-2 md:mb-3">
        <h2 className="text-primary-blue-10 text-[1.2rem] sm:text-2xl font-bold">
          Small Dog
        </h2>
        <Button className={"hidden sm:flex"} outline={true}>
          Sort by
          <IoIosArrowForward />
        </Button>
      </div>
      <div className="dog-list__card-grid | grid gap-y-4 md:grid-y-6">
        {dogList.map((dog) => (
          <Card key={dog.id}>
            <div className="mb-4">
              <img className="max-w-full" src={dog.img} alt="" loading="lazy" />
            </div>
            <h3 className="font-bold mb-2 text-sm md:text-[17px]">{`${dog.name} - ${dog.breed}`}</h3>
            <p className="text-slate-500 text-[13px] md:text-base flex flex-col sm:block">
              {`Gender: ${dog.gender} \u00B7 `}
              <span>{`Age: ${calculateAge(dog.birthdate)}`}</span>
            </p>
          </Card>
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={allDogs.length}
        paginate={paginate}
      />
    </section>
  );
};

export default DogList;
