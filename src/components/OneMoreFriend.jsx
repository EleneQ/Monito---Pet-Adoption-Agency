import Button from "./Button";
import { Link } from "react-router-dom";
import { FaRegCirclePlay } from "react-icons/fa6";

const OneMoreFriend = ({ className }) => {
  return (
    <div className={`${className} max-w-[27rem] mx-auto`}>
      <h1 className="font-extrabold flex flex-col text capitalize">
        One more friend
        <span className="text-sms font-bold">Thousands more fun!</span>
      </h1>
      <p className="text-sm md:text-sm mt-2 md:mt-3 md:max-w-[25rem]">
        Having a pet means you have more joy, a new friend, a happy person who
        will always be with you to have fun. We have 200+ different pets that
        can meet your needs!
      </p>
      <div className="mt-5 md:mt-7">
        <Link to={"/filters"}>
          <Button className={"mr-2 md:mr-6"} outline primary>
            View Intro
            <FaRegCirclePlay />
          </Button>
        </Link>

        <Link to={"/filters"}>
          <Button tertiary>Explore Now</Button>
        </Link>
      </div>
    </div>
  );
};
export default OneMoreFriend;
