import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddPodcast from "./AddPodcast";
import AllPodcast from "./AllPodcast";
import { UserContext } from "../Context/UserContext";

function Manage() {
  const User = useContext(UserContext);

  return (
    <Router>
      <div>
        <Switch>
          {User.User.admin ? (
            <Route path="/podcast/addpodcast">
              <AddPodcast />
            </Route>
          ) : null}
          <Route path="/podcast/">
            <AllPodcast />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Manage;
