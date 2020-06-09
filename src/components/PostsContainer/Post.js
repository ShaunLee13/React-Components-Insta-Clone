// You will add code in this file
import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import {useState} from 'react'

import "./Posts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// pass props in this file to
const Post = props => {
  const { post } = props
  const [likes, setLikes] = useState(post.likes)
  const likeCounter = evt => {
    setLikes(likes+1)
  }
  
  return (
    <div className="post-border">
      <PostHeader
        username={post.username}
        thumbnailUrl={
          post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={post.imageUrl}
        />
      </div>
      <LikeSection likeCount={likes} like={likeCounter}/>
      <CommentSection
        postId={post.imageUrl}
        comments={post.comments}
      />
    </div>
  );
};

export default Post;
