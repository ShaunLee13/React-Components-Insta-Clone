//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
import { useState } from 'react'
// import data 
import dummyData from '../../dummy-data'

const PostsPage = () => {
  const [ post, setPost ] = useState(dummyData)
  return (
    <div className="posts-container-wrapper">
      {post.map((set) => {
        return <Post post={set}/>
      })}

    </div>
  );
};

export default PostsPage;
