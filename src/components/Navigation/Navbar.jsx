// import { useRef } from "react";
import NavLinks from "./NavLinks";
import { Button } from "../";
// import JoinCommunityButton from "../Buttons/JoinCommunityButton";
import { Logo } from "../../images";
import classnames from "classnames";

// className="flex gap-[3.5rem]"
const Navbar = (props) => {
  const { className } = props;

  const classes = classnames(
    className,
    "flex items-center justify-between py-7 px-p-x-xs sm:px-p-x-md lg:px-p-x-lg font-roboto text-primary-blue-9 font-semibold w-full"
  );
  // const navRef = useRef();

  // const showNavBar = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // };
  // style={{border: "black", borderStyle: "solid", borderWidth: "1px"}}
  return (
    <header className={classes}>
      <div>
        <img src={Logo} alt="monito logo" />
      </div>
      <nav>
        <NavLinks />
      </nav>
      <Button className={"hidden md:block"} primary>
        Join the community
      </Button>
    </header>
  );
};

export default Navbar;
