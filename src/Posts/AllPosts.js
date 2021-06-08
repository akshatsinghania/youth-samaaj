import React, { useState, useEffect, useContext } from "react";
import HTMLRenderer from "react-html-renderer";
import Header from "../Universal/Header";
import { Link } from "react-router-dom";
import { GetData } from "../Assets/scripts/database";
import LoadingBar from "../Assets/Components/LoadingBar";
import AddPostButton from "../Assets/Components/Buttoncyberpunk";
import PostPreview from "../Universal/PostPreview";
import { UserContext } from "../Context/UserContext";

function AllPosts() {
  const User = useContext(UserContext);
  const [AllPostData, setAllPostData] = useState([]);
  const [DataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    GetData("allposts").then(
      (v) => {
        if(v){
          setAllPostData(Object.values(v));
        }
        setDataLoaded(true);
      },
      [AllPostData]
    );
  });

  return (
    <div className="allpost">
      {User.User.logged ? (
        <Link to="/post/addpost">
          <AddPostButton text={"ADD POST"} />
        </Link>
      ) : null}
      <Header Title={"Explore"} background={"clouds"} />

      {DataLoaded ? (
        <div>
          <div className="allpost_posts">
            <PostPreview AllPostData={AllPostData} />
          </div>
        </div>
      ) : (
        <LoadingBar />
      )}
    </div>
  );
}

export default AllPosts;
