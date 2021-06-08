import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddNews from "./AddNews";
import AllNews from "./AllNews";
import UniqueNews from "./UniqueNews";
import { UserContext } from "../Context/UserContext";

function Manage() {
  const User = useContext(UserContext);

  return (
    <Router>
      <div>
        <Switch>
          {User.User.admin ? (
            <Route path="/news/AddNews">
              <AddNews />
            </Route>
          ) : null}

          <Route path="/news/news">
            <UniqueNews />
          </Route>

          <Route path="/news">
            <AllNews />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Manage;
