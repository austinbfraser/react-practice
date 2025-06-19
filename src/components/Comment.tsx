// import React from 'react';
import type { CommentData } from '../interfaces';
import Reply from './Reply';
import VotingModule from './VotingModule';

interface CommentProps {
  data: CommentData;
}

const Comment = ({ data }: CommentProps) => {
  return (
    <>
    <div className='commentContainer'>
      <div className="comment">
        <VotingModule score={data.score} />
        <div className="comment-main">
          <div className="comment-topRow">
            <img className="avatar" src={data.user.image.png} />
            <p className="username">
              {data.user.username}
              <span className="createdAt">{data.createdAt}</span>
            </p>
            <button className="replyButton">Reply</button>
          </div>
          <p>{data.content}</p>
        </div>
      </div>

      {data.replies.length
        ? data.replies.map((reply) => {
            return (
              <div className="replyContainer">
                <Reply key={reply.id} data={reply} />
              </div>
            );
          })
        : null}
    </div>
    </>
  );
};

export default Comment;
