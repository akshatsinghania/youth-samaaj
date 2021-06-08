import React, { useState } from "react";
import Header from "../Universal/Header";
import { Link, Redirect } from "react-router-dom";
import { PushData, SetData } from "../Assets/scripts/database";

function AddPodcast() {
  const [Title, setTitle] = useState("");
  const [SpotifyLink, setSpotifyLink] = useState("");
  const [RedirectBool, setRedirectBool] = useState(false);
  const AddPodcast = (e) => {
    e.preventDefault();
    var SenderObj = {
      Link: SpotifyLink,
      Title: Title,
    };
    PushData("allpodcasts", SenderObj).then((r) => {
      setRedirectBool(true);
    });
  };

  return (
    <div className="addpodcast">
      <form className="addpodcast_form">
        <input
          placeholder={"Title"}
          type="text"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder={"Spotify Links"}
          type="text"
          value={SpotifyLink}
          onChange={(e) => setSpotifyLink(e.target.value)}
        />
        <button onClick={AddPodcast} type="submit">
          Add Podcast
        </button>
      </form>
      {RedirectBool ? <Redirect to="/podcast" /> : null}
    </div>
  );
}

export default AddPodcast;
