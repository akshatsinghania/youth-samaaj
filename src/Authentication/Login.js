import React, { useState, useContext } from "react";
import { Login as loginuser } from "../Assets/scripts/auth";
import { UserContext } from "../Context/UserContext";
import { Redirect } from "react-router-dom";
const Login = () => {
  const User = useContext(UserContext);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [startRedirect, setstartRedirect] = useState(false);
  const [passwordvisible, setpasswordvisible] = useState(false);
  const[message,setmessage] = useState("")
  const togglepasswordvisible = () => {
    setpasswordvisible(!passwordvisible);
  };
  const loginuserauth = () => {
    loginuser(email, password).then((r) => {
      if(r.message){
        setmessage(r.message)
      }
      else{
      setstartRedirect(true);
      window.location.reload();
      }
      
    });
  };
  return (
    <div className="login">
      <h1 className="login_title">Login</h1>
      <input
        type="text"
        placeholder={"email"}
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type={passwordvisible ? "text" : "password"}
        placeholder={"password"}
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <div className="checkbox">
        <label>Show Password</label>
        <input type="checkbox" onClick={togglepasswordvisible} />
      </div>
      <label className="login_message">{message}</label>
      <button type="submit" onClick={loginuserauth}>
        Submit
      </button>

      {startRedirect ? <Redirect to="/" /> : null}
    </div>
  );
};

export default Login;
