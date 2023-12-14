// import { useRef } from "react";
import NavLinks from "./NavLinks";
import JoinCommunityButton from "../JoinCommunityButton";
import { Logo } from "../../assets/images";

// className="flex gap-[3.5rem]"
const Navbar = () => {
  // const navRef = useRef();

  // const showNavBar = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // };

  return (
    <header className="flex items-center justify-between py-7 px-p-x-md lg:px-p-x-lg font-roboto text-primary-blue-9 font-semibold">
      <div>
        <img src={Logo} alt="monito logo" />
      </div>
      {/* <HamburgerMenu /> */}
      <nav>
        <NavLinks />
      </nav>
      <div className="hidden md:block">
        <JoinCommunityButton primary={true} />
      </div>
    </header>
  );
};
export default Navbar;
