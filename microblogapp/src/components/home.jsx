import { useState, useEffect } from "react";
import TweetList from "./tweetList";
import Input from "./input";
import { getTweetsFromApi } from "../APIs/apis";

function Home() {
  const [loading, setLoading] = useState(true);
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

  const sendTweet = async (data) => {
    try {
      const response = await fetch(
        "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
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

  const callTweetStorage = async () => {
    // const response = await fetch(
    //   "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet"
    // );
    // const results = await response.json();

    const results = await getTweetsFromApi();

    console.log(results);

    setTweets(results.tweets);
    setLoading(false);
  };

  useEffect(() => {
    callTweetStorage();
  }, []);

  if (loading) return <div>loading...</div>;

  return (
    <>
      <Input twitear={twitear} />
      <TweetList tweets={tweets} />
    </>
  );
}

export default Home;
