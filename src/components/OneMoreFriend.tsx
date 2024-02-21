import Button from "./Button";
import { Link } from "react-router-dom";
import { FaRegCirclePlay } from "react-icons/fa6";
import { ButtonVariant } from "../types/types";

interface OneMoreFriendProps {
  className: string;
  exploreBtnVariant: ButtonVariant;
  introBtnVariant: ButtonVariant;
}

const OneMoreFriend = ({
  className,
  exploreBtnVariant,
  introBtnVariant,
}: OneMoreFriendProps) => {
  return (
    <div className={`max-w-[27rem] ${className}`}>
      <h1 className="title-big | font-extrabold flex flex-col capitalize">
        One more friend
        <span className="font-bold">Thousands more fun!</span>
      </h1>
      <p className="text-sm md:text-sm mt-2 md:mt-3 md:max-w-[25rem]">
        Having a pet means you have more joy, a new friend, a happy person who
        will always be with you to have fun. We have 200+ different pets that
        can meet your needs!
      </p>
      <div className="mt-5 md:mt-7">
        <Button className={"mr-1 md:mr-6"} variant={`${introBtnVariant}`}>
          View Intro
          <FaRegCirclePlay />
        </Button>

        <Link to="/filters">
          <Button variant={`${exploreBtnVariant}`}>Explore Now</Button>
        </Link>
      </div>
    </div>
  );
};
export default OneMoreFriend;
