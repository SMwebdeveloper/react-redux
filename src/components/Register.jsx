import React, { useState } from "react";
import { Input } from "../ui";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="text-center mt-5">
        <main className="form-signin w-25 m-auto">
          <form>
            {/* <img className="mb-2" src={icon} alt="" width="72" height="60" /> */}
            <h1 className="h3 mb-3 fw-normal">Please register</h1>
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
            <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">
              {/* {isLoading ? "loading..." : "Register"} */}
              Register
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Register;
