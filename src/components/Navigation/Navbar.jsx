// import { useRef } from "react";
import NavLinks from "./NavLinks";
import { Button } from "../";
// import JoinCommunityButton from "../Buttons/JoinCommunityButton";
import { Logo } from "../../images";

// className="flex gap-[3.5rem]"
const Navbar = () => {
  // const navRef = useRef();

  // const showNavBar = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // };
  // style={{border: "black", borderStyle: "solid", borderWidth: "1px"}}
  return (
    <header className="primary-nav | flex items-center justify-between py-7 px-p-x-xs sm:px-p-x-md lg:px-p-x-lg font-roboto text-primary-blue-9 font-semibold absolute z-40 w-full">
      <div>
        <img src={Logo} alt="monito logo" />
      </div>
      <nav>
        <NavLinks />
      </nav>
      <div className="hidden md:block">
        <Button primary>Join the community</Button>
      </div>
    </header>
  );
};
export default Navbar;
