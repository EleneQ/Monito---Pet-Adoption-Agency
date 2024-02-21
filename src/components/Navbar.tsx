import Button from "./Button";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { navLinks } from "../constants/navLinks";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Logo } from "../images";
import { motion } from "framer-motion";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  //remove mobile navbar effects above tw md screen
  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth >= 768 &&
        document.body.style.overflowY === "hidden"
      ) {
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
      className={`padding-x flex items-center justify-between py-7 font-roboto text-primary-blue-9 font-semibold w-full ${className}`}
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
          {navLinks.map((nav) => (
            <li
              key={nav.title}
              className="border-b-[2.5px] border-transparent hover:border-primary-blue-9"
            >
              <NavLink
                to={nav.link}
                className={({ isActive }) =>
                  isActive ? "text-pink-5-accent" : "text-primary-blue-9"
                }
              >
                {nav.title}
              </NavLink>
            </li>
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
            className={`mobile-nav | z-[99999] bg-white flex gap-4 flex-col items-center fixed top-[8rem] px-[3.5rem] pt-[3rem] pb-[2.5rem] min-w-[300px] rounded-xl left-1/2 ${
              mobileNavIsOpen ? "flex" : "hidden"
            }`}
            animate={{
              scale: mobileNavIsOpen ? 1 : 0.5,
              x: "-50%",
            }}
            transition={{ type: "spring", stiffness: 360, damping: 20 }}
          >
            {navLinks.map((nav) => (
              <li
                key={nav.title}
                className="border-b-[2.5px] border-transparent hover:border-primary-blue-9"
              >
                <NavLink
                  to={nav.link}
                  className={({ isActive }) =>
                    isActive ? "text-pink-5-accent" : "text-primary-blue-9"
                  }
                  onClick={() => (document.body.style.overflowY = "auto")}
                >
                  {nav.title}
                </NavLink>
              </li>
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
