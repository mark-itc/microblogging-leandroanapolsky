import { useEffect } from "react";
import "./tweet.css";
import TweetList from "./tweetList";

function Tweet(props) {
  const { fullTweet } = props;

  return (
    <div className="tweet-container">
      <div className="tweet-top">
        <div className="tweet-info">{fullTweet.userName}</div>
        <div className="tweet-info">{fullTweet.date}</div>
      </div>

      <div className="tweet-content">{fullTweet.content}</div>
    </div>
  );
}

export default Tweet;
