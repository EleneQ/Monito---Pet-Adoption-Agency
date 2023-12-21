import { Button } from "./";
import { RiMessage2Line } from "react-icons/ri";

const DogInfoDetails = () => {
  return (
    <div className="text-[#667479]">
      <p className="text-[15px]">
        Home &gt; Dogs &gt; Large Dog &gt; Shibo Inu Sepia
      </p>
      <p className="text-sm mt-3 mb-1">SKU #1000078</p>
      <h2 className="text-primary-blue-9 text-2xl font-bold mb-5">
        Shibu Inu Sepia
      </h2>
      <div className="flex items-center">
        <Button primary>Contact us</Button>
        <Button className={"flex gap-3 ml-5"} outline>
          <RiMessage2Line />
          Chat with Monito
        </Button>
      </div>
      <table className="dog-info-details | w-full capitalize mt-7 text-left">
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
            <td>
              :{" "}
              <div className="inline-flex flex-col">
                <span>Pure breed Shih Tzu.</span>
                <span>Good body structure.</span>
                <span>MKA cert and Microchip.</span>
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
