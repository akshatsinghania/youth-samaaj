import React, { useState } from "react";
import { PushData, SetData } from "../Assets/scripts/database";
import { Redirect } from "react-router-dom";

function AddTopic() {
  const [Topic, setTopic] = useState("");
  const [Description, setDescription] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [StartRedirect, setStartRedirect] = useState(false);

  const AddTopicToDataBase = () => {
    PushData("alldiscussion", {
      Topic: Topic,
      Description: Description,
      Image: ImageUrl,
      Link: "",
      Comments: {
        0: {
          from: "",
          message: "Discuss here",
        },
      },
    }).then((r) => {
      SetData(`alldiscussion/${r.key}/Link`, r.key).then((r1) => {
        setStartRedirect(true);
      });
    });
  };

  return (
    <div className="addtopic">
      <h1 className="addtopic_title">Add Topic</h1>
      <input
        placeholder="Topic"
        type="text"
        value={Topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <input
        placeholder="Description"
        type="text"
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        placeholder="ImageUrl"
        type="text"
        value={ImageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button onClick={AddTopicToDataBase}>Add Topic</button>
      {StartRedirect ? <Redirect to="/discussion" /> : null}
    </div>
  );
}

export default AddTopic;
