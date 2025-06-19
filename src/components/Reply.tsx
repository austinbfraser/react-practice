// import React from 'react';
import type { ReplyData, User } from '../interfaces';
import VotingModule from './VotingModule';

interface ReplyProps {
  data: ReplyData;
  currentUser: User;
}

const Reply = ({ data, currentUser }: ReplyProps) => {
  const isOwnPost: boolean = data.user.username === currentUser.username;

  return (
    <div className="reply">
      <VotingModule score={data.score} />
      <div className="comment-main">
        <div className="comment-topRow">
          <img className="avatar" src={data.user.image.png} />
          <p className="username">
            {data.user.username}
            {isOwnPost ? <span className='youIcon'>you</span> : null}
            <span className="createdAt">{data.createdAt}</span>
          </p>
          {isOwnPost ? (
            <>
              <button className="editButton">Edit</button>
              <button className="deleteButton">Delete</button>
            </>
          ) : (
            <button className="replyButton">Reply</button>
          )}
        </div>
        <p>
          @{data.replyingTo} {data.content}
        </p>
      </div>
    </div>
  );
};

export default Reply;
