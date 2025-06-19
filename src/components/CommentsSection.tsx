// import React from 'react';
import Comment from './Comment';
import { useState, useEffect } from 'react';
import commentData from '../../data.json';
import type { CommentData, DataJSON } from '../interfaces';
import PostComment from './PostComment';

const CommentsSection = () => {
  const data: DataJSON = commentData;
  const { currentUser } = data;
  // const { username } = currentUser;

  const [comments, setComments] = useState<CommentData[]>([]);
  const [nextId, setNextId] = useState<number>(5);

  useEffect(() => {
    setComments(data.comments);
  }, []);

  return (
    <>
      <div className="commentsSection">
        {comments?.map((comment) => (
          <Comment key={`comment-${comment.id}`} data={comment} currentUser={currentUser} setComments={setComments} comments={comments} nextId={nextId} setNextId={setNextId}/>
        ))}
        <PostComment currentUser={currentUser} setComments={setComments} comments={comments} nextId={nextId} setNextId={setNextId}/>
      </div>
    </>
  );
};

export default CommentsSection;
