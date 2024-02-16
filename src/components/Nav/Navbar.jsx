import NavLinks from "./NavLinks";
import Button from "../Button";
import { Logo } from "../../images";

const Navbar = ({ className }) => {
  return (
    <header
      className={`${className} flex items-center justify-between py-7 px-p-x-xs sm:px-p-x-md lg:px-p-x-lg font-roboto text-primary-blue-9 font-semibold w-full`}
    >
      <img src={Logo} alt="monito logo" />

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
