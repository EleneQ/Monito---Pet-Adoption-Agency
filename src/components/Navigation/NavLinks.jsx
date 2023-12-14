import { useState } from "react";
import { navLinks } from "../../constants";
import { Logo } from "../../assets/images";
import JoinCommunityButton from "../JoinCommunityButton";

const NavLink = ({ link, title }) => (
  <li className="cursor-pointer">
    <a href={link}>{title}</a>
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
        <img
          src={Logo}
          alt=""
          className="w-35 h-35 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <ul
          id="primary-navigation"
          className={`flex gap-4 flex-col items-center absolute top-[7rem] left-1/2 -translate-x-[50%] px-[3.5rem] pt-[3rem] pb-[2.5rem] min-w-[300px] rounded-xl shadow-lg ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {navLinks.map((nav, index) => (
            <NavLink key={index} {...nav} />
          ))}
          <div className="mt-3">
            <JoinCommunityButton secondary={true} />
          </div>
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenu;
