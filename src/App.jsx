import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  ArticleDetail,
  CreateArticle,
  Login,
  Main,
  Navbar,
  Register,
} from "./components";

const App = () => {
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
        </Routes>
      </div>
    </div>
  );
};

export default App;
