import { Link } from "react-router-dom";
import { logo } from "../constants";

const Navbar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link to={"/"}>React project</Link>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link to="/login">Login</Link>
        <Link to="/login">Register</Link>
      </nav>
    </div>
  );
};

export default Navbar;
