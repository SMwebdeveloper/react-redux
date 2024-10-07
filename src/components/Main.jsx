import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArticleCard } from "../components";
import { Loader } from "../ui";
import AuthService from "../services/auth";
import { signUserSuccess } from "../slice/auth";
import { getItem } from "../helpers/persistence-store";
import {
  getAritclesFailure,
  getArticlesStart,
  getArticlesSuccess,
} from "../slice/article";
import ArticleService from "../services/article";

const Main = () => {
  const { articles, isLoading } = useSelector((state) => state.article);

  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      console.log(error);
    }
  };
  const getArticles = async () => {
    dispatch(getArticlesStart());
    ArticleService.getArticles()
      .then((data) => {
        dispatch(getArticlesSuccess(data.articles));
      })
      .catch((error) => dispatch(getAritclesFailure()));
  };

  useEffect(() => {
    // get articles
    getArticles();
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <div className="album py-5">
        <div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {articles.map((item, index) => (
              <ArticleCard item={item} key={index} getArticles={getArticles} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
