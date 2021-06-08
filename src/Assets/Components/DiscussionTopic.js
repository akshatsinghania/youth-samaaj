import React from "react";
import JsxParser from "react-jsx-parser";
import { Link } from "react-router-dom";

function DiscussionTopic({ Title, Body, Picture, Linkto }) {
  return (
    <div>
      <div className="discussiontopic">
        <div className="mobile-layout">
          <div className="notification-header"></div>
          <div className="actions">
            <i className="fas fa-chevron-left" />
            <i className="fas fa-bookmark" />
          </div>

          <div className="book-cover">
            <Link to={Linkto}>
              <img className="book-top" src={Picture} />
              <img className="book-side" src="" />
            </Link>
          </div>

          <div className="preface">
            <div className="content">
              <div className="header">
                <div className="title">{Title}</div>
                <div className="icon">
                  <i className="fas fa-chevron-down" />
                </div>
              </div>

              <div className="body">
                <JsxParser jsx={Body} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscussionTopic;
