import { useEffect } from "react";
import { createContext, useState } from "react";

export const tweetContext = createContext();

export default function TweetContentProvider({ children }) {
  const localTweet = (newLocalTweet) => {
    localStorage.setItem("localTweetStorage", JSON.stringify(newLocalTweet));
  };

  const [tweets, setTweets] = useState([]);

  const twitear = (tweetValue) => {
    const date = new Date();
    console.log(tweetValue);

    const inTweet = {
      content: tweetValue,
      userName: localStorage.getItem("userData"),
      date: date.toISOString(),
    };

    setTweets((prevState) => [inTweet, ...prevState]);
    sendTweet(inTweet);
  };

  const sendTweet = async (tweetToPost) => {
    try {
      const response = await fetch(
        "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tweetToPost),
        }
      );
      console.log(response);

      if (response.status == 404) {
        throw new Error("The tweet update failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tweetContext.Provider value={{ tweets, setTweets, twitear, sendTweet }}>
      {children}
    </tweetContext.Provider>
  );
}
