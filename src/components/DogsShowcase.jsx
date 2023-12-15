import { dogs } from "../constants/data";
import Card from "./Card";
import { Button } from "./";
import { IoIosArrowForward } from "react-icons/io";

const DogsShowcase = () => {
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

  return (
    <section className="dogs-showcase | font-roboto capitalize px-p-x-xs sm:px-p-x-md lg:px-p-x-lg mt-12 md:mt-[4.5rem] max-w-max-width mx-auto flex flex-col md:block">
      <div className="flex items-center justify-between mb-5 md:mb-8">
        <h2 className="text-primary-blue-10 text-[1.2rem] sm:text-2xl font-bold">
          Take a look at some of our pets
        </h2>
        <Button className={"hidden sm:flex"} outline={true}>
          View More
          <IoIosArrowForward />
        </Button>
      </div>
      <div className="dogs-showcase__cards | grid gap-y-4 md:grid-y-6">
        {dogs.map((dog) => (
          <Card key={dog.id}>
            <div className="mb-4">
              <img className="max-w-full rounded-lg" src={dog.img} alt="" />
            </div>
            <h3 className="font-bold mb-2 text-sm md:text-[17px]">{`${dog.name} - ${dog.breed}`}</h3>
            <p className="text-slate-500 text-[13px] md:text-base flex flex-col sm:block">
              {`Gender: ${dog.gender} \u00B7 `}
              <span>{`Age: ${calculateAge(dog.birthdate)}`}</span>
            </p>
          </Card>
        ))}
      </div>
      <Button
        className={"more-btn-stretch mt-5 flex-1 sm:hidden"}
        outline={true}
      >
        View More
        <IoIosArrowForward />
      </Button>
    </section>
  );
};

export default DogsShowcase;
