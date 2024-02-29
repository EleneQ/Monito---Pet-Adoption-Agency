import { useParams } from "react-router-dom";
import { RiShareLine } from "react-icons/ri";
import { dogsInfo } from "../../constants/data/dogs";
import ItemPictures from "../../components/ItemPictures";
import SocialLinks from "../../components/SocialLinks";
import { DogImg, HeartImg } from "../../images";

const DogPictures = () => {
  const { dogId } = useParams();

  return (
    <div>
      <ItemPictures itemsInfo={dogsInfo} itemId={dogId} itemName="Dog" />

      <div className="hidden md:flex gap-5 justify-between items-center text-[13.5px] font-bold text-primary-blue-9 py-2 px-4 bg-light-pink-gradient rounded-xl mt-4">
        <p className="flex gap-1">
          <img src={DogImg} alt="dog" />
          100% health guarantee for pets
        </p>
        <p className="flex gap-1">
          <img src={HeartImg} alt="dog" />
          100% guarantee of pet identification
        </p>
      </div>

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
