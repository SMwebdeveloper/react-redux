import { Link } from "react-router-dom";
import { logo } from "../constants";

const Navbar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link
        to={"/"}
        className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
      >
        Home
      </Link>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link
          to="/login"
          className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover mx-2"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        >
          Register
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
