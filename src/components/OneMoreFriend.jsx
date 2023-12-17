import classNames from "classnames";
import { Button } from "./";
import { FaRegCirclePlay } from "react-icons/fa6";

const OneMoreFriend = ({ className }) => {
  const classes = classNames(className, "max-w-[27rem] mx-auto");

  return (
    <div className={classes}>
      <h1 className="font-extrabold flex flex-col sm:gap-[0.9rem] text-[2.15rem] sm:text-5xl text-primary-blue-10 capitalize">
        One more friend
        <span className="text-[1.4rem] sm:text-4xl font-bold">
          Thousands more fun!
        </span>
      </h1>
      <p className="text-sm sm:text-base mt-3 sm:mt-7">
        Having a pet means you have more joy, a new friend, a happy person who
        will always be with you to have fun. We have 200+ different pets that
        can meet your needs!
      </p>
      <div className="mt-5 md:mt-7">
        <Button className={"mr-2 sm:mr-6"} outline>
          View Intro
          <FaRegCirclePlay />
        </Button>
        <Button primary>Explore Now</Button>
      </div>
    </div>
  );
};
export default OneMoreFriend;
