import { NavLink } from "react-router-dom";
import { useState } from "react";
import { navLinks } from "../constants/navLinks";
import SocialLinks from "./SocialLinks";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "../images";

const NavLinkElement = ({ link, title }) => (
  <li className="cursor-pointer border-b-[3px] border-transparent hover:border-primary-blue-9">
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

const Footer = () => {
  const [email, setEmail] = useState("");
  const [animateSubscribed, setAnimateSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    setAnimateSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setAnimateSubscribed(false);
    }, 2000); //2 seconds
  };

  return (
    <footer className="pt-[3.5rem] md:pt-[5rem] pb-11 px-p-x-xs sm:px-p-x-md lg:px-p-x-lg bg-primary-beige-gradient rounded-se-[40px] rounded-ss-[40px] mt-[3rem] relative">
      <AnimatePresence>
        {animateSubscribed && (
          <motion.p
            className={
              "absolute top-4 md:top-7 text-red-600 text-lg font-semibold"
            }
            initial={{ opacity: 0, translateX: -80 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: -80 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Your Subscription Was Successful
          </motion.p>
        )}
      </AnimatePresence>
      <div className="bg-primary-blue-9 text-white py-8 px-8 rounded-2xl capitalize flex flex-col lg:flex-row gap-7 md:gap-10 mb-10">
        <h2 className="text-[1.33rem] md:text-2xl max-w-[24rem] font-semibold">
          Register now so you don&apos;t miss our programs
        </h2>
        <form
          className="flex flex-col lg:flex-row gap-3 bg-white flex-1 px-3 py-3 rounded-xl"
          action="#"
          onSubmit={formSubmit}
        >
          <input
            className="flex-1 border-[#667479] border-[1px] pl-5 py-3 lg:py-0 rounded-lg text-black"
            name="email"
            type="email"
            value={email}
            required
            onChange={handleEmailChange}
          />
          <button className="bg-primary-blue-9 px-5 py-3 lg:py-2 rounded-lg">
            Subcribe Now
          </button>
        </form>
      </div>
      <div className="text-base font-medium flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
        <nav>
          <ul className="flex gap-12">
            {navLinks.map((nav, index) => (
              <NavLinkElement key={index} {...nav} />
            ))}
          </ul>
        </nav>
        <SocialLinks className={"gap-12"} iconSize={25} />
      </div>
      <hr className="bg-[#d5dbde] my-[1.5rem] md:my-[2rem] h-[1px]" />
      <div className="text-[#667479] flex flex-col md:flex-row items-center justify-between">
        <p className="mb-1 md:mb-0">© 2022 Monito. All rights reserved.</p>
        <img
          className="order-first md:order-none mb-6 md:mb-0"
          src={Logo}
          alt=""
        />
        <div className="flex gap-[2rem]">
          {/* should be links */}
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
