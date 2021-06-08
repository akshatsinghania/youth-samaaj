import React, { useState, useEffect } from "react";
import { GetData } from "../Assets/scripts/database";
import HTMLRenderer from "react-html-renderer";
import LoadingBar from "../Assets/Components/LoadingBar";
import PostPreview from "../Universal/PostPreview";
import Header from "../Universal/Header";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";

const UniquePost = () => {
  const [UrlParam, setUrlParam] = useState(
    window.location.pathname.toLocaleLowerCase().replace("/news/news/", "")
  );
  const [AllPostData, setAllPostData] = useState();

  const [DataLoaded, setDataLoaded] = useState(false);

  const [RenderE, setRenderE] = useState();
  const [ThisPostData, setThisPostData] = useState();

  useEffect(() => {
    GetData("allnews").then((v) => {
      setAllPostData(Object.values(v));

      Object.values(v).map((v, i) => {
        if (v.Link.toLowerCase() === UrlParam) {
          setThisPostData(v);
          setRenderE(v.Data);
          setDataLoaded(true);
        }
      });
    });
  }, []);

  return (
    <div className="post">
      <div className="post_contentwrap">
        <Link to="/">
          <ArrowBackIosIcon />
        </Link>
        {DataLoaded ? (
          <div className="post_content">
            <img className="post_contentTitleImage" src={ThisPostData.image} />
            <h1 className="post_contentTitle">{ThisPostData.Title}</h1>
            <HTMLRenderer html={RenderE} />
          </div>
        ) : (
          <LoadingBar />
        )}
        <div className="mobile mobile_rotate">
          <strong>Rotate your phone to get a better view</strong>
        </div>
        {DataLoaded ? (
          <div className="pc">
            <PostPreview
              className={"allpost_post4"}
              AllPostData={AllPostData}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UniquePost;
