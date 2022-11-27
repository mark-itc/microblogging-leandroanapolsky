import './input.css';
import Button from './button'
import Error from './error'
import {useState} from 'react'


function Input() {

const [tweetValue, setTweetValue] = useState('What you have in mind...')

const writeTweet = (e) => {

setTweetValue(e.target.value)

   console.log(tweetValue)
}

  return (
    <div className='input-container'>
        
      <input type="text" value={tweetValue} className="input-field" onChange={writeTweet}/>
      <div className='under-input'>
        {tweetValue.length>140 ? <Error/> : null}
        
        <Button />
        </div>

    </div>
  );
}

export default Input;
