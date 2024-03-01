import { Link } from "react-router-dom";
import { productsInfo } from "../../constants/data/products";
import Button from "../../components/Button";
import { IoIosArrowForward } from "react-icons/io";
import { GiftBox } from "../../images";

const ProductDisplay = () => {
  return (
    <section className="dogs-showcase | max-width-center padding-x font-roboto capitalize mt-12 md:mt-[4.5rem] flex flex-col md:block">
      <p className="normal-case">
        Hard to choose right products for your pets?
      </p>
      <div className="flex items-center justify-between mb-5 md:mb-8">
        <h2 className="text-primary-blue-10 text-[1.2rem] sm:text-2xl font-bold">
          Our Products
        </h2>
        <Button className={"hidden sm:flex"} variant="outline">
          View More
          <IoIosArrowForward />
        </Button>
      </div>
      <div className="item-card-grid | grid gap-y-4 md:grid-y-6">
        {productsInfo.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <div className="p-2 rounded-xl shadow-card-shadow text-black h-full relative pb-[5rem]">
              <div className="mb-2">
                <img
                  className="w-full h-[210px] sm:h-[190px] object-cover rounded-lg"
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold mb-2 text-sm md:text-[17px]">
                {product.name}
              </h3>
              <p className="text-slate-500">
                {`Product: ${product.categories}`}
                {product.size && <span>{` \u00B7 Size: ${product.size}`}</span>}
              </p>
              <p className="font-bold">{`Price: ${product.cost} USD`}</p>
              <div className="absolute bottom-4 left-2 right-2 flex items-center gap-2 mt-3 bg-pink-3 py-3 px-2 text-sm rounded-xl">
                <img src={GiftBox} alt="a gift box" />
                <span>{`\u00B7`}</span>
                <p>Free Toy & Free Shaker</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Button
        className={"more-btn-stretch mt-5 flex-1 sm:hidden"}
        variant="outline"
      >
        View More
        <IoIosArrowForward />
      </Button>
    </section>
  );
};

export default ProductDisplay;
