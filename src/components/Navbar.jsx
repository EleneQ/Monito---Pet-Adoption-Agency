import Button from "./Button";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { navLinks } from "../constants/navLinks";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Logo } from "../images";
import { motion } from "framer-motion";

const NavbarLink = ({ link, title }) => (
  <li className="cursor-pointer border-b-[2.5px] border-transparent hover:border-primary-blue-9">
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive ? "text-pink-5-accent" : "text-primary-blue-9"
      }
    >
      {title}
    </NavLink>
  </li>
);

const Navbar = ({ className }) => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  //remove mobile navbar effects above tw md screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.body.style.overflowY = "auto";
        setMobileNavIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileNavbar = () => {
    if (mobileNavIsOpen) {
      document.body.style.overflowY = "auto";
      setMobileNavIsOpen(false);
    } else {
      document.body.style.overflowY = "hidden";
      setMobileNavIsOpen(true);
    }
  };

  return (
    <header
      className={`${className} flex items-center justify-between py-7 px-p-x-xs sm:px-p-x-md lg:px-p-x-lg font-roboto text-primary-blue-9 font-semibold w-full  z-30`}
    >
      <Link to="/">
        <img src={Logo} alt="monito logo" />
      </Link>

      <nav>
        {/* Desktop navbar */}
        <ul
          className="hidden md:flex gap-[1.5rem] lg:gap-[3rem] justify-end items-center"
          id="primary-navigation"
        >
          {navLinks.map((nav, index) => (
            <NavbarLink key={index} {...nav} />
          ))}
        </ul>

        {/* Mobile navbar */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <MdOutlineMenuOpen
            className="w-[2rem] h-[2rem] cursor-pointer"
            onClick={() => toggleMobileNavbar()}
          />
          <motion.ul
            id="primary-navigation"
            className={`mobile-nav | bg-white flex gap-4 flex-col items-center fixed top-[8rem] px-[3.5rem] pt-[3rem] pb-[2.5rem] min-w-[300px] rounded-xl left-1/2 ${
              mobileNavIsOpen ? "flex" : "hidden"
            }`}
            animate={{
              scale: mobileNavIsOpen ? 1 : 0.5,
              x: "-50%",
            }}
            transition={{ type: "spring", stiffness: 360, damping: 20 }}
          >
            {navLinks.map((nav, index) => (
              <NavbarLink key={index} {...nav} />
            ))}

            <div className="mt-3">
              <Button variant="outline">Join the community</Button>
            </div>
          </motion.ul>
        </div>
      </nav>

      <Button className={"hidden md:block"} variant="primary">
        Join the community
      </Button>
    </header>
  );
};

export default Navbar;
