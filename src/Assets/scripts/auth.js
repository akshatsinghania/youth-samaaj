import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { auth, DB } from "./firebase";
import { GetData, QueryEqaulTo } from "./database";

export const Login = async (email, password) => {
  var returner;
  await auth
    .signInWithEmailAndPassword(email, password)
    .then(async (user) => {
      returner = {
        User: await QueryEqaulTo("User", email, "email").then((r) => {
          return r;
        }),
        firebasedata: user,
      };
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      returner = error;
    });
  return returner;
};
export const GetUserData = async (email) => {
  var returner;

  returner = await QueryEqaulTo("User", email, "email").then((r) => {
    if(r){
      return r;
    }
    return {
      username: "",
      admin: false,
      email: "",
      logged: false,
    }
  });
  return returner;
};
export const SignUp = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      return true;
    })
    .catch((error) => {
      return error.message;
      // ..
    });
};

//handleRefresh()
//auth.signOut()
//Login("singhaniaakshat1@gmail.com","password").then(e => console.log(e))
