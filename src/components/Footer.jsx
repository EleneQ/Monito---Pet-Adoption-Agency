import { useState } from "react";
import { navLinks } from "../constants/data";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from "../images/Logo.svg";

const NavLink = ({ link, title }) => (
  <li className="cursor-pointer hover:text-primary-blue-9">
    <a href={link}>{title}</a>
  </li>
);

const SocialLinks = () => {
  return (
    <ul className="flex gap-12">
      <li className="cursor-pointer hover:text-primary-blue-9">
        <FaFacebook size={23} />
      </li>
      <li className="cursor-pointer hover:text-primary-blue-9">
        <FaSquareXTwitter size={23} />
      </li>
      <li className="cursor-pointer hover:text-primary-blue-9">
        <FaInstagram size={23} />
      </li>
      <li className="cursor-pointer hover:text-primary-blue-9">
        <FaYoutube size={23} />
      </li>
    </ul>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <footer className="pt-[5rem] pb-11 px-p-x-xs sm:px-p-x-md lg:px-p-x-lg bg-primary-beige-gradient rounded-se-[40px] rounded-ss-[40px] mt-[3rem]">
      <div className="bg-primary-blue-9 text-white py-8 px-8 rounded-2xl capitalize flex flex-col lg:flex-row gap-10 mb-10">
        <h2 className="text-2xl max-w-[24rem] font-semibold">
          Register now so you don't miss our programs
        </h2>
        <div className="flex flex-col lg:flex-row gap-3 bg-white flex-1 px-3 py-3 rounded-xl">
          <input
            className="flex-1 border-[#667479] border-[1px] pl-5 py-3 lg:py-0 rounded-lg text-black"
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <button className="bg-primary-blue-9 px-5 py-3 lg:py-2 rounded-lg">
            Subcribe Now
          </button>
        </div>
      </div>
      <div className="text-base font-medium flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
        <nav>
          <ul className="flex gap-12">
            {navLinks.map((nav, index) => (
              <NavLink key={index} {...nav} />
            ))}
          </ul>
        </nav>
        <SocialLinks />
      </div>
      <hr className="bg-[#d5dbde] my-[2rem] h-[1px]" />
      <div className="text-[#667479] flex flex-col md:flex-row items-center justify-between">
        <p className="mb-2 md:mb-0">© 2022 Monito. All rights reserved.</p>
        <img
          className="order-first md:order-none mb-7 md:mb-0"
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
