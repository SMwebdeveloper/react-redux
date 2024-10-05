import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ item, getArticles }) => {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <div className="col" key={item.id}>
      <div className="card h-100 shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
        </svg>

        <div className="card-body">
          <p className="card-text fw-bold m-0">{item.title}</p>
          <p className="card-text">{item.description}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button
              onClick={() => navigate(`/article/${item.slug}`)}
              type="button"
              className="btn btn-sm btn-outline-success"
            >
              View
            </button>
            {loggedIn && user.username === item.author.username && (
              <>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button>
                <button type="button" className="btn btn-sm btn-outline-danger">
                  Delete
                </button>
              </>
            )}
          </div>
          <small className="text-muted fw-bold text-capitalize">
            {item.author.username}
          </small>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
