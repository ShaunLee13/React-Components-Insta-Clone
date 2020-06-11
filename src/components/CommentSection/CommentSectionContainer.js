// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const {comments} = props
  // Add state for the comments
  const [eachComment, setEachComment] = useState(comments)
  return (
    <div class='comment-form'>
      {/* map through the comments data and return the Comment component */}
      {eachComment.map(comment =>{
        return <div key={comments.postId} class='comment'>
          <Comment comment={comment}/>
        </div>
      })}
      <CommentInput class='input'/>
    </div>
  );
};

export default CommentSection;
