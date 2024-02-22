import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

interface SocialLinksProps {
  className?: string;
  iconSize?: string | number;
}

const SocialLinks = ({ className, iconSize }: SocialLinksProps) => {
  const socialLinks =
    "cursor-pointer hover:text-primary-blue-9 transition-all duration-200";

  return (
    <ul className={`flex ${className}`}>
      <li className={`${socialLinks}`}>
        <FaFacebook size={iconSize} />
      </li>
      <li className={`${socialLinks}`}>
        <FaSquareXTwitter size={iconSize} />
      </li>
      <li className={`${socialLinks}`}>
        <FaInstagram size={iconSize} />
      </li>
      <li className={`${socialLinks}`}>
        <FaYoutube size={iconSize} />
      </li>
    </ul>
  );
};

export default SocialLinks;
