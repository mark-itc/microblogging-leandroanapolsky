import Tweet from './tweet'
import './tweetList.css'

const TweetList = ({tweets}) => {

    

return (<div className='tweets-container'>
{tweets.map((item, index)=>{
    return (

    <Tweet key = {index} fullTweet={item}/>
      
    )
  })}
</div>)

}

export default TweetList

