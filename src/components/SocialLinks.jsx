import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialLinks = ({ className, iconSize }) => {
  return (
    <ul className={`${className} flex`}>
      <li className="social-link">
        <FaFacebook size={iconSize} />
      </li>
      <li className="social-link">
        <FaSquareXTwitter size={iconSize} />
      </li>
      <li className="social-link">
        <FaInstagram size={iconSize} />
      </li>
      <li className="social-link">
        <FaYoutube size={iconSize} />
      </li>
    </ul>
  );
};

export default SocialLinks;
