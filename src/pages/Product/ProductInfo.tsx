import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import { productsInfo } from "../../constants/data/products";
import { RiMessage2Line } from "react-icons/ri";

const ProductInfo = () => {
  const { productId } = useParams();

  const currentProduct = productsInfo.find((dog) => dog.id === productId);
  if (!currentProduct) {
    return <p>Product not found</p>;
  }

  return (
    <div className="text-[#667479] px-4 md:px-0 rounded-ss-3xl rounded-se-3xl shadow-dark-shadow bg-white md:bg-transparent pt-3 md:pt-0 md:shadow-none md:rounded-none">
      <div className="md:hidden w-[2.5rem] h-[0.35rem] mb-4 mx-auto rounded-xl bg-[#CCD1D2]"></div>
      <p className="text-[15px] mb-5 md:mb-0 capitalize">
        {`Home & Products & ${currentProduct.name}`}
      </p>
      <h2 className="text-[#00171F] text-2xl font-bold mb-5 capitalize">
        {currentProduct.name}
      </h2>
      <div className="flex items-center">
        <Button variant="primary">Contact us</Button>
        <Button
          className={"flex gap-1 md:gap-3 ml-2 md:ml-5"}
          variant="outline"
        >
          <RiMessage2Line />
          Chat with Monito
        </Button>
      </div>
      <table className="item-info-table | w-full capitalize mt-7 text-left text-sm md:text-base">
        <tbody>
          <tr>
            <th>Type</th>
            <td>: {currentProduct.type}</td>
          </tr>
          <tr>
            <th>Cost</th>
            <td>: {currentProduct.cost}</td>
          </tr>
          <tr>
            <th>Discounted</th>
            <td>: Yes</td>
          </tr>
          <tr>
            <th>Additional Information</th>
            <td className="flex gap-1">
              :
              <div className="inline-flex flex-col">
                <span>Certified Safety.</span>
                <span>Safe for sensitive skin.</span>
                <span>Improves mood.</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductInfo;
