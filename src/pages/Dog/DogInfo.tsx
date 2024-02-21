import { useParams } from "react-router-dom";
import { useMemo } from "react";
import Button from "../../components/Button";
import { dogsInfo } from "../../constants/data/dogs";
import { format } from "date-fns";
import { RiMessage2Line } from "react-icons/ri";
import { calcAge } from "../../utils/calcAge";

const DogInfoComponent = () => {
  const { dogId } = useParams();

  const cachedAge = useMemo(() => calcAge, []);

  const currentDog = dogsInfo.find((dog) => dog.id === dogId);
  if (!currentDog) {
    return <p>Dog not found</p>;
  }

  return (
    <div className="text-[#667479] px-4 md:px-0 rounded-ss-3xl rounded-se-3xl shadow-dark-shadow bg-white md:bg-transparent pt-3 md:pt-0 md:shadow-none md:rounded-none">
      <div className="md:hidden w-[2.5rem] h-[0.35rem] mb-4 mx-auto rounded-xl bg-[#CCD1D2]"></div>
      <p className="text-[15px] mb-2 md:mb-0 capitalize">
        {`Home & Dogs & ${currentDog.breed}`}
      </p>
      <p className="hidden md:block text-sm mt-3 mb-1">SKU {currentDog.sku}</p>
      <h2 className="text-[#00171F] text-2xl font-bold mb-5 capitalize">
        {currentDog.breed}
      </h2>
      <div className="flex items-center">
        <Button variant="primary">Contact us</Button>
        <Button className={"ml-2 md:ml-5"} variant="outline">
          <RiMessage2Line />
          Chat with Monito
        </Button>
      </div>
      <table className="item-info-table | w-full capitalize mt-7 text-left text-sm md:text-base">
        <tbody>
          <tr>
            <th>SKU</th>
            <td>: {currentDog.sku}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>: {currentDog.gender}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>: {cachedAge(currentDog.birthdate)}</td>
          </tr>
          <tr>
            <th>Size</th>
            <td>: {currentDog.size}</td>
          </tr>
          <tr>
            <th>Color</th>
            <td>
              :{" "}
              {currentDog.colors.map((color, index) => {
                if (color === "tricolor") return null;

                return index !== currentDog.colors.length - 1
                  ? `${color} & `
                  : color;
              })}
            </td>
          </tr>
          <tr>
            <th>Vaccinated</th>
            <td>: Yes</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>: {currentDog.location}</td>
          </tr>
          <tr>
            <th>Published Date</th>
            <td>: {format(currentDog.birthdate, "dd/MM/yyyy")}</td>
          </tr>
          <tr>
            <th>Additional Information</th>
            <td className="flex gap-1">
              :
              <div className="inline-flex flex-col">
                <span>MKA cert.</span>
                <span>{`Pure breed ${currentDog.breed}.`}</span>
                <span>Good body structure.</span>
                <span>With Father from champion lineage.</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DogInfoComponent;
