import { useState } from "react";
import { navLinks } from "../../constants/data";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Button } from "../";
import { Link } from "react-router-dom";

const NavLink = ({ link, title }) => (
  <li className="cursor-pointer hover:border-b-[3px] hover:border-primary-blue-9">
    <Link to={link}>{title}</Link>
  </li>
);

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop navbar */}
      <ul
        className="hidden md:flex gap-[1.5rem] lg:gap-[3rem] justify-end items-center"
        id="primary-navigation"
      >
        {navLinks.map((nav, index) => (
          <NavLink key={index} {...nav} />
        ))}
      </ul>

      {/* Mobile navbar */}
      <div className="md:hidden flex flex-1 justify-end items-center">
        <MdOutlineMenuOpen
          className="w-[2rem] h-[2rem]"
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <ul
          id="primary-navigation"
          className={`bg-white flex gap-4 flex-col items-center absolute top-[8rem] left-1/2 -translate-x-[50%] px-[3.5rem] pt-[3rem] pb-[2.5rem] min-w-[300px] rounded-xl shadow-2xl ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {navLinks.map((nav, index) => (
            <NavLink key={index} {...nav} />
          ))}
          <div className="mt-3">
            <Button outline>Join the community</Button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenu;
