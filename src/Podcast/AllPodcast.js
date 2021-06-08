import React, { useState, useContext } from "react";
import HTMLRenderer from "react-html-renderer";
import JsxParser from "react-jsx-parser";
import Header from "../Universal/Header";
import { Impress, Step } from "react-impressjs";
import { GetData } from "../Assets/scripts/database";
import Loading from "../Assets/Components/LoadingBar";
import Button from "../Assets/Components/Buttoncyberpunk";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function AllPodcast() {
  const User = useContext(UserContext);

  const [AllPodcastData, setAllPodcastData] = useState([]);
  const [DataLoaded, setDataLoaded] = useState(false);

  useState(() => {
    GetData("allpodcasts").then((r) => {
      setAllPodcastData(Object.values(r));

      setDataLoaded(true);
    });
  }, [AllPodcastData]);

  return (
    <div className="allpodcast">
      {User.User.admin ? (
        <Link to="/podcast/addpodcast">
          <Button text={"ADD PODCAST"} />
        </Link>
      ) : null}

      {DataLoaded ? (
        <div>
          <Impress className="allpodcast" progress={true}>
            <Step
              data={{
                x: -10,
                y: 500,
                rotate: Math.floor((Math.random() - 1) * 100),
              }}
            >
              <h1>Welcome To मनोविज्ञान dial</h1>
              <p>Use Arrow Keys or Spacebar to Navigate</p>
              <p className="mobile">
                Rotate your phone or wider the website window for best
                experience
              </p>
            </Step>
            {AllPodcastData.map((v, i) => {
              return (
                <Step
                  data={{
                    x: i * 1000,
                    y: 1000,
                    rotate: Math.floor((Math.random() - 1) * 100),
                  }}
                >
                  <p>{v.Title}</p>
                  <iframe className="allpodcast_song" src={v.Link} />
                </Step>
              );
            })}
          </Impress>
        </div>
      ) : (
        <Loading />
      )}
      {/*
                
                <Step
                        data={
                            {
                                x:-1000,
                                y:-1500,
                                
                            }}
                        >
                            <q>Aren’t you just <b>bored</b> with all those slides-based presentations?</q>
            </Step>
            <Step
                        data={
                            {
                                x:0,
                                y:-1500,
                                
                            }}
                        >
                            <q>Don’t you think that presentations given <strong>in modern browsers</strong> shouldn’t <strong>copy the limits</strong> of ‘classic’ slide decks?</q>
            </Step>
            <Step
                        data={
                            {
                                x:3500,
                                y:-850,
                                rotate:270,
                                scale:6
                            }}
                        >
                            <q>Don’t you think that presentations given <strong>in modern browsers</strong> shouldn’t <strong>copy the limits</strong> of ‘classic’ slide decks?</q>
            </Step>

            <Step
                        data={
                            {
                                x:6200,
                                y:4300,
                                z:-100,
                                rotatex:-40,
                                rotatey:10,
                                scale:6
                            }}
                        >
                            <q>Don’t you think that presentations given <strong>in modern browsers</strong> shouldn’t <strong>copy the limits</strong> of ‘classic’ slide decks?</q>
            </Step>
                
                */}
    </div>
  );
}

export default AllPodcast;
