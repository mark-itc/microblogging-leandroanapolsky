import Tweet from "./tweet";
import "./tweetList.css";
import { useContext } from "react";
import { testContext } from "./testContext";

const TweetList = ({ tweets }) => {
  const {contextValue} = useContext(testContext);
  console.log("context valyue", contextValue);
  return (
    <div className="tweets-container">
      {tweets.map((item, index) => {
        return <Tweet key={index} fullTweet={item} />;
      })}
    </div>
  );
};

export default TweetList;
