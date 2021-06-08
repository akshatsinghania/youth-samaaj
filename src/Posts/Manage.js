import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddPost from "./AddPost";
import AllPosts from "./AllPosts";
import UniquePost from "./UniquePost";
import { UserContext } from "../Context/UserContext";

function Manage() {
  const User = useContext(UserContext);

  return (
    <Router>
      <div>
        <Switch>
          {User.User.logged ? (
            <Route path="/post/addpost">
              <AddPost />
            </Route>
          ) : null}

          <Route path="/posts">
            <UniquePost />
          </Route>

          <Route path="/">
            <AllPosts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Manage;
