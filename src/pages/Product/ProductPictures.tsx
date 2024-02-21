import { useParams } from "react-router-dom";
import { RiShareLine } from "react-icons/ri";
import { productsInfo, productPictures } from "../../constants/data/products";
import ItemPictures from "../../components/ItemPictures";
import SocialLinks from "../../components/SocialLinks";

const DogPictures = () => {
  const { productId } = useParams();

  return (
    <div>
      <ItemPictures
        itemsInfo={productsInfo}
        itemId={productId}
        itemName="Product"
        itemPictures={productPictures}
      />

      <div className="hidden md:flex mt-4">
        <div className="flex items-center justify-center gap-2 mr-5 text-primary-blue-9 font-semibold">
          <RiShareLine className="text-lg" />
          <p>Share:</p>
        </div>
        
        <SocialLinks className={"gap-5 text-[#99A2A5]"} iconSize={21} />
      </div>
    </div>
  );
};

export default DogPictures;
