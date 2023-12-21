import { Button } from "./";
import { RiMessage2Line } from "react-icons/ri";

const DogInfoDetails = () => {
  return (
    <div className="text-[#667479] px-4 md:px-0 rounded-ss-3xl rounded-se-3xl shadow-dark-shadow bg-white md:bg-transparent pt-3 md:pt-0 md:shadow-none md:rounded-none">
      <div className="md:hidden w-[2.5rem] h-[0.35rem] mb-4 mx-auto rounded-xl bg-[#CCD1D2]"></div>
      <p className="text-[15px] mb-2 md:mb-0">
        Home &gt; Dogs &gt; Large Dog &gt; Shibo Inu Sepia
      </p>
      <p className="hidden md:block text-sm mt-3 mb-1">SKU #1000078</p>
      <h2 className="text-[#00171F] text-2xl font-bold mb-5">
        Shibu Inu Sepia
      </h2>
      <div className="flex items-center">
        <Button primary>Contact us</Button>
        <Button className={"flex gap-1 md:gap-3 ml-2 md:ml-5"} outline>
          <RiMessage2Line />
          Chat with Monito
        </Button>
      </div>
      <table className="dog-info-details | w-full capitalize mt-7 text-left text-sm md:text-base">
        <tbody>
          <tr>
            <th>SKU</th>
            <td>: #1000078</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>: Female</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>: 2 Months</td>
          </tr>
          <tr>
            <th>Size</th>
            <td>: Small</td>
          </tr>
          <tr>
            <th>Color</th>
            <td>: Apricot &amp; Tan</td>
          </tr>
          <tr>
            <th>Vaccinated</th>
            <td>: Yes</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>: Vietnam</td>
          </tr>
          <tr>
            <th>Published Date</th>
            <td>: 12-Oct-2022</td>
          </tr>
          <tr>
            <th>Additional Information</th>
            <td className="flex gap-1">
              :
              <div className="inline-flex flex-col">
                <span>MKA cert.</span>
                <span>Pure breed Shi Tzu.</span>
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

export default DogInfoDetails;
