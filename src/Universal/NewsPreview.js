import React from "react";
import { Link } from "react-router-dom";

function NewsPreview({ AllPostData, className = "allpost_post" }) {
  return (
    <div>
      {AllPostData.map((v, i) => {
        return (
          <div key={i} className={className}>
            
            <Link className="allpost_postTitle" to={"/news/news/" + v.Link}>
              <h1 className="allpost_postTitle">{v.Title}</h1>
            </Link>
            <p>{v.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default NewsPreview;
