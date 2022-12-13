import { useState, useEffect, useContext } from "react";
import TweetList from "../tweetList";
import Input from "../input";
import { getTweetsFromApi } from "../../APIs/apis";
import { tweetContext } from "../tweetsContext";

function Home() {
  const { tweets, setTweets, twitear } = useContext(tweetContext);

  const [loading, setLoading] = useState(true);

  const callTweetStorage = async () => {
    const results = await getTweetsFromApi();

    setTweets(results.tweets);
    setLoading(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      callTweetStorage();
    }, 8000);
    return () => clearInterval(interval);
  });

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
