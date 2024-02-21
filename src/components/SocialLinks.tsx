import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

interface SocialLinksProps {
  className?: string;
  iconSize?: string | number;
}

const SocialLinks = ({ className, iconSize }: SocialLinksProps) => {
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
