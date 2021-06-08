import React, { useState, useEffect, useContext } from "react";
import {
  GetDataWhileListeningToChange,
  GetData,
  PushData,
} from "../Assets/scripts/database";
import DiscussionTopic from "../Assets/Components/DiscussionTopic";
import Comment from "../Assets/Components/TopicUniqueComment";
import { Redirect } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import Loading from "../Assets/Components/LoadingBar";

function TopicComments() {
  const User = useContext(UserContext);

  const [CurrentTopic, setCurrentTopic] = useState([]);
  const [TopicsCommentsData, setTopicsCommentsData] = useState([]);
  const [DataLoaded, setDataLoaded] = useState(false);
  const [StartRedirect, setStartRedirect] = useState(false);
  const [NewCommentMessage, setNewCommentMessage] = useState("");
  const [PostLink, setPostLink] = useState();
  const [fromComment, setfromComment] = useState();

  const urlparams = window.location.pathname.replace("/discussion/topic/", "");

  const SubmitNewComment = (e) => {
    setNewCommentMessage("");
    e.preventDefault();

    PushData("alldiscussion/" + PostLink + "/Comments", {
      from: fromComment,
      message: NewCommentMessage,
    });
  };
  useEffect(() => {
    if (User.User.logged) {
      setfromComment(User.User.username);
    } else {
      setfromComment("User");
    }
    GetData("alldiscussion").then((v) => {
      Object.values(v).map((val, i) => {
        if (val.Link.toLocaleLowerCase() === urlparams.toLocaleLowerCase()) {
          setDataLoaded(true);

          setTopicsCommentsData(Object.values(val.Comments));

          var PusherArray = [];
          PusherArray.push(val);
          setPostLink(val.Link);
          setCurrentTopic(PusherArray);
        } else if (i - 1 === v.length) {
          setStartRedirect(true);
        }
      });
    });
    //Keep Listening for changes
    GetDataWhileListeningToChange(`alldiscussion/${PostLink}}/Comments`).then(
      (res) => {
        setTopicsCommentsData(res);
      }
    );
  }, [TopicsCommentsData, User]);

  return (
    <div className="topiccomments">
      {DataLoaded ? (
        <div>
          {CurrentTopic.map((v, i) => {
            return (
              <DiscussionTopic
                key={i}
                Title={v.Topic}
                Body={v.Description}
                Picture={v.Image}
                Linkto={"/discussion/topic/" + v.Link}
              />
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
      {DataLoaded ? (
        <div className="topiccomments_comments">
          <div className="comments-container">
            <h1>Discussion</h1>
            <ul id="comments-list" className="comments-list">
              <div className="comment-main-level">
                {TopicsCommentsData.map((v, i) => {
                  return <Comment key={i} from={v.from} message={v.message} />;
                })}
                <div className="comment-box">
                  <div className="comment-head">
                    <h6 className="comment-name">{fromComment}</h6>
                  </div>
                  <div className="comment-content">
                    <div className="comment_add">
                      <input
                        value={NewCommentMessage}
                        onChange={(e) => setNewCommentMessage(e.target.value)}
                        type="text"
                        placeholder={"add comment"}
                      />
                      <button onClick={SubmitNewComment}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      {StartRedirect ? <Redirect to="/discussion" /> : null}
    </div>
  );
}

export default TopicComments;
