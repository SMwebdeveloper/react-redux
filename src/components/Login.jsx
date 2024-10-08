import React, { useEffect, useState } from "react";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import { ValidationError } from "../components";
import AuthService from "../services/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, loggedIn } = useSelector((state) => state?.auth);

  useEffect(() => {
    if (loggedIn) navigate("/");
  }, [loggedIn]);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { email, password };
    try {
      const response = await AuthService.userLogin(user);
      dispatch(signUserSuccess(response.user));
      navigate("/");
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
  };
  return (
    <div>
      <div className="text-center mt-5">
        <main className="form-signin w-25 m-auto">
          <form>
            <h1 className="h3 mb-3 fw-normal">Please login</h1>
            <ValidationError />
            <Input
              type={"email"}
              placeholder={"name@example.com"}
              label={"Email address"}
              state={email}
              setState={setEmail}
            />
            <Input
              type={"password"}
              placeholder={"password"}
              label={"Password"}
              state={password}
              setState={setPassword}
            />
            <button
              disabled={isLoading}
              className="w-100 btn btn-lg btn-primary mt-2"
              type="submit"
              onClick={handlerSubmit}
            >
              {isLoading ? "loading..." : "Login"}
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
