import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  ArticleDetail,
  CreateArticle,
  EditArticle,
  Login,
  Main,
  Navbar,
  Register,
} from "./components";
import AuthService from "./services/auth";
import { useDispatch } from "react-redux";
import { signUserSuccess } from "./slice/auth";
import { getItem } from "./helpers/persistence-store";
const App = () => {
  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // get user in token
    const token = getItem("token");
    if (token) getUser();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/article/:slug" element={<ArticleDetail />} />
          <Route path="/create-article" element={<CreateArticle />} />
          <Route path="/edit-article/:slug" element={<EditArticle />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
