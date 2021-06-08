import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import AddUser from "./AddUser";
import { UserContext } from "../Context/UserContext";

function Manage() {
  const User = useContext(UserContext);

  return (
    <Router>
      <div>
        <Switch>
          

          {User.User.admin ? (
            <Route path="/auth/adduser">
              <AddUser />
            </Route>
          ) : null}
          
          <Route path="/auth">
            <Login />
          </Route>

          {
            /*
            <Route path="/auth/login">
              <Login />
            </Route>
            <Route path="/auth/">
              <Signup />
            </Route>
            */
          }

        </Switch>
      </div>
    </Router>
  );
}

export default Manage;
