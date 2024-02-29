import { useParams } from "react-router-dom";
import { RiShareLine } from "react-icons/ri";
import { productsInfo } from "../../constants/data/products";
import SocialLinks from "../../components/SocialLinks";

const DogPictures = () => {
  const { productId } = useParams();

  const currentProduct = productsInfo.find(
    (product) => product.id === productId
  );

  if (!currentProduct) {
    return <p>{"Product not fount"}</p>;
  }

  return (
    <div>
      <div className="mx-auto">
        <img
          className="w-[550px] max-h-[500px] mx-auto md:mx-0 aspect-[1/0.9] object-cover"
          src={currentProduct.img}
          alt={currentProduct.name}
        />
      </div>

      <div className="hidden md:flex mt-4">
        <div className="flex items-center justify-center gap-2 mr-5 text-primary-blue-9 font-semibold hover:cursor-pointer">
          <RiShareLine className="text-lg" />
          <p>Share:</p>
        </div>

        <SocialLinks className={"gap-5 text-[#99A2A5]"} iconSize={21} />
      </div>
    </div>
  );
};

export default DogPictures;
