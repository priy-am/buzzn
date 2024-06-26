import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'
import { useSelector } from 'react-redux'

const Feed = () => {
  const {tweet} = useSelector(store=>store.tweet)
  return (
    <div>
      <CreatePost/>
      {/* {
        tweet.map((tweet)=>{

         return  <Tweet/>
        })
      } */}
      <Tweet/>
    </div>
  )
}

export default Feed
