import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllTopics from "./AllTopics";
import TopicComments from "./TopicComments";
import AddTopic from "./AddTopic";
import { UserContext } from "../Context/UserContext";

function Manage() {
  const User = useContext(UserContext);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/discussion/topic/">
            <TopicComments />
          </Route>

          {User.User.admin ? 
            <Route path="/discussion/addtopic">
              <AddTopic />
            </Route>
           : null}

          <Route path="/discussion/">
            <AllTopics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Manage;
