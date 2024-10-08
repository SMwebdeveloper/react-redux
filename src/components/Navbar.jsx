import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeItem } from "../helpers/persistence-store";
import { logOutUser } from "../slice/auth";

const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    removeItem("token");
    dispatch(logOutUser());
    navigate("/register");
  };
  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link
        to={"/"}
        className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
      >
        Home
      </Link>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
            <p className="m-0 me-2 py-2 text-dark text-decaretion-none">
              {user?.username}
            </p>
            <Link
              to="/create-article"
              className="link-offset-2 link-offset-3-hover my-2 link-underline link-underline-opacity-0 link-underline-opacity-75-hover mx-2"
            >
              Create
            </Link>
            <button className="btn btn-outline-danger" onClick={logOutHandler}>
              Logout
            </button>
          </>
        ) : (
          <>
            {" "}
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
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
