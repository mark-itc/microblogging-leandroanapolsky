import "./App.css";
import { useState } from "react";
import Input from "./components/input";
import Tweet from "./components/tweet";

function App() {
  // const getTweetValue = (tweetValue) => {
  //   console.log(tweetValue);

  //   return {tweetValue};
  // };

  const [tweets, setTweets] = useState([]);

  const twitear = (tweetValue) => {
    console.log(tweetValue);
    
  };

  return (
    <div className="App">
      <Input  twitear={twitear}/>
      {/* <Tweet/>
      <Tweet />
      <Tweet /> */}
    </div>
  );
}

export default App;
