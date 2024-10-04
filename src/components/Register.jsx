import React, { useEffect, useState } from "react";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import AuthService from "../services/auth";
import { ValidationError } from "../components";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading, loggedIn } = useSelector((state) => state?.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) navigate("/");
  }, [loggedIn]);
  const hanlerSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { username: name, email, password };
    try {
      const response = await AuthService.userRegister(user);
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
            {/* <img className="mb-2" src={icon} alt="" width="72" height="60" /> */}
            <h1 className="h3 mb-3 fw-normal">Please register</h1>
            <ValidationError />
            <Input
              type={"text"}
              placeholder={"username"}
              label={"Username"}
              state={name}
              setState={setName}
            />
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
              className="w-100 btn btn-lg btn-primary mt-2"
              disabled={isLoading}
              type="submit"
              onClick={hanlerSubmit}
            >
              {isLoading ? "loading..." : "Register"}
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Register;
