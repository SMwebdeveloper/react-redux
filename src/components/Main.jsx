import React from "react";
import { useSelector } from "react-redux";
import { ArticleCard } from "../components";
const Main = () => {
  const { articles } = useSelector((state) => state.article);
  return (
    <div className="album py-5 container">
      <div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {articles.map((item, index) => (
            <ArticleCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
