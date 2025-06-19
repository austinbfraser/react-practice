// import React from 'react';
import Comment from "./Comment";
import { useState, useEffect } from "react";
import commentData from '../../data.json';
import type { CommentData, DataJSON } from "../interfaces";


const CommentsSection = () => {

  const data: DataJSON = commentData;

  const [comments, setComments] = useState<CommentData[] | null>(null);

  useEffect(() => {
    setComments(data.comments);
  }, []);
  
  return (
    <div className='commentsSection'>
      {comments?.map((comment) => <Comment key={comment.id} data={comment} />)}
    </div>
  )
}

export default CommentsSection