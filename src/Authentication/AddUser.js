import React, { useState } from "react";
import { Csvtojson } from "../Assets/scripts/functions";
import { PushData } from "../Assets/scripts/database";
import { SignUp } from "../Assets/scripts/auth";
function AddUser() {
  const [csv, setcsv] = useState(``);
  const [Json, setJson] = useState({});
  const Convert = () => {
    setJson(Csvtojson(csv));
    console.log(Csvtojson(csv));
    Csvtojson(csv).map((v, i) => {
      var admin1 = v.admin.toLowerCase();
      var admin;
      if ((admin1 = "true")) {
        admin = true;
      } else {
        admin = false;
      }
      PushData("User", {
        username: v.username,
        email: v.email,
        admin: admin,
      });
      SignUp(v.email, v.password);
    });

    //PushData("User",)
  };
  /*
    admin,username,email,password    TRUE,Username1,email1@email.com,password    TRUE,Username2,email1@email.com,password    TRUE,Username3,email1@email.com,password    TRUE,Username4,email1@email.com,password    TRUE,Username5,email1@email.com,password    TRUE,Username6,email1@email.com,password    TRUE,Username7,email1@email.com,password    TRUE,Username8,email1@email.com,password    TRUE,Username9,email1@email.com,password    TRUE,Username10,email1@email.com,password    TRUE,Username11,email1@email.com,password
    */
  /*
   admin,username,email,password
    TRUE,Username1,email1@email.com,password
    TRUE,Username2,email1@email.com,password
    TRUE,Username3,email1@email.com,password
    TRUE,Username4,email1@email.com,password
    TRUE,Username5,email1@email.com,password
    TRUE,Username6,email1@email.com,password
    TRUE,Username7,email1@email.com,password
    TRUE,Username8,email1@email.com,password
    TRUE,Username9,email1@email.com,password
    TRUE,Username10,email1@email.com,password
    TRUE,Username11,email1@email.com,password
   */
  return (
    <div className="adduser">
      <textarea
        placeholder="paste csv"
        value={csv}
        onChange={(e) => setcsv(e.target.value)}
      />
      <button onClick={Convert}>Add All Users</button>
      
    </div>
  );
}

export default AddUser;
