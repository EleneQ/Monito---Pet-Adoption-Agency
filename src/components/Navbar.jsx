import { Logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between">
      <div>
        <img src={Logo} alt="monito logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <a href="#">Join the community</a>
    </header>
  );
};
export default Navbar;
