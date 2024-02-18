import { Link } from "react-router-dom";
import { productsInfo } from "../../constants/data/products";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { IoIosArrowForward } from "react-icons/io";
import { GiftBox } from "../../images";

const ProductDisplay = () => {
  return (
    <section className="dogs-showcase | font-roboto capitalize px-p-x-xs sm:px-p-x-md lg:px-p-x-lg mt-12 md:mt-[4.5rem] max-w-max-width mx-auto flex flex-col md:block">
      <p className="normal-case">
        Hard to choose right products for your pets?
      </p>
      <div className="flex items-center justify-between mb-5 md:mb-8">
        <h2 className="text-primary-blue-10 text-[1.2rem] sm:text-2xl font-bold">
          Our Products
        </h2>
        <Button className={"hidden sm:flex"} outline={true}>
          View More
          <IoIosArrowForward />
        </Button>
      </div>
      <div className="item-card-grid | grid gap-y-4 md:grid-y-6">
        {productsInfo.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <Card>
              <div className="mb-2">
                <img
                  className="max-w-full rounded-lg"
                  src={product.img}
                  alt=""
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold mb-2 text-sm md:text-[17px]">
                {product.name}
              </h3>
              <p className="text-slate-500 text-[13px] md:text-base flex flex-col sm:block">
                {`Product: ${product.type}`}
                {product.size && <span>{` \u00B7 Size: ${product.size}`}</span>}
              </p>
              <p className="font-bold">{`Price: ${product.cost} USD`}</p>
              <div className="flex gap-2 mt-3 bg-pink-3 py-2 pl-2 text-sm rounded-xl">
                <img src={GiftBox} alt="a gift box" />
                <span>{`\u00B7`}</span>
                <p>Free Toy & Free Shaker</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <Button className={"more-btn-stretch mt-5 flex-1 sm:hidden"} outline>
        View More
        <IoIosArrowForward />
      </Button>
    </section>
  );
};

export default ProductDisplay;
