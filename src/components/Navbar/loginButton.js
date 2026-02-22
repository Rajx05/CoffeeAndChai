import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <li className="block text-white">
      <Link to={"/login"}>Login</Link>
    </li>
  );
}
