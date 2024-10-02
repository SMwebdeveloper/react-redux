import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Main, Navbar, Register } from "./components";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
