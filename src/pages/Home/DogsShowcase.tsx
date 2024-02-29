import { Link } from "react-router-dom";
import { useMemo } from "react";
import { dogsInfo } from "../../constants/data/dogs";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { IoIosArrowForward } from "react-icons/io";
import { calcAge } from "../../utils/calcAge";

interface ViewMoreButtonProps {
  className: string;
}

const ViewMoreButton = ({ className }: ViewMoreButtonProps) => {
  return (
    <Link to={"filters"}>
      <Button className={className} variant="outline">
        View More
        <IoIosArrowForward />
      </Button>
    </Link>
  );
};

const DogsShowcase = () => {
  const cachedAge = useMemo(() => calcAge, []);

  return (
    <section className="dogs-showcase | font-roboto capitalize padding-x max-width-center mt-12 md:mt-[4.5rem] flex flex-col md:block">
      <p className="normal-case">Who&apos;s new?</p>
      <div className="flex items-center justify-between mb-5 md:mb-8">
        <h2 className="text-primary-blue-10 text-[1.2rem] sm:text-2xl font-bold">
          Take a look at some of our pets
        </h2>

        <ViewMoreButton className={"hidden sm:flex"} />
      </div>
      <div className="item-card-grid | grid gap-y-4 md:grid-y-6">
        {dogsInfo.slice(0, 8).map((dog) => (
          <Link key={dog.id} to={`/dogs/${dog.id}`}>
            <Card className="h-full">
              <div className="mb-4">
                <img
                  className="w-full object-cover max-h-[250px] rounded-lg"
                  src={dog.images[0].img}
                  alt=""
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold mb-2 text-sm md:text-[17px]">{`${dog.name} - ${dog.breed}`}</h3>
              <p className="text-slate-500 text-base flex flex-col sm:block">
                {`Gender: ${dog.gender} \u00B7 `}
                <span>{`Age: ${cachedAge(dog.birthdate)}`}</span>
              </p>
            </Card>
          </Link>
        ))}
      </div>

      <ViewMoreButton className={"more-btn-stretch mt-5 flex-1 sm:hidden"} />
    </section>
  );
};

export default DogsShowcase;
