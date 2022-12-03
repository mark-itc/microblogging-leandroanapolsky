import { useEffect } from "react";
import "./tweet.css";

function Tweet(props) {
  const { x } = props;

  return (
    <div className="tweet-container">
      <div className="tweet-top">
        <div className="tweet-info">yonatan</div>
        <div className="tweet-info">la fecha</div>
      </div>

      <div className="tweet-content">
        {x}
      </div>
    </div>
  );
}

export default Tweet;
