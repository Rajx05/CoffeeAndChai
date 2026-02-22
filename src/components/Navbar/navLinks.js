import { Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <ul className="hidden md:flex md:gap-6">
      <li>
        <Link
          to="/"
          className="text-cream tracking-widest hover:text-caramel hover:underline transition-all duration-300"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/menu"
          className="text-cream tracking-widest hover:text-caramel hover:underline transition-all duration-300"
        >
          Menu
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="text-cream tracking-widest hover:text-caramel hover:underline transition-all duration-300"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="text-cream tracking-widest hover:text-caramel hover:underline transition-all duration-300"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
