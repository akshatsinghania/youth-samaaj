import React, { createContext, useContext, useState } from "react";
import { auth } from "../Assets/scripts/firebase";
import { GetUserData } from "../Assets/scripts/auth";
import Login from "../Authentication/Login";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [User, setUser] = useState({
    username: "",
    admin: false,
    email: "",
    logged: false,
  });
  useState(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user && user?.email) {
        GetUserData(user.email).then((rS) => {
          var r = Object.values(rS)[0];

          setUser({
            username: r.username,
            admin: r.admin,
            email: r.email,
            logged: true,
          });
        });
      }
    });
    return(
      setUser({
        username: "",
        admin: false,
        email: "",
        logged: false,
      })
    )
  }, []);
  return (
    <UserContext.Provider value={{ User, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
