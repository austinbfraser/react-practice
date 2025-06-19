// import React from 'react';
import type { ReplyData } from '../interfaces';
import VotingModule from './VotingModule';

interface ReplyProps {
  data: ReplyData;
}

const Reply = ({ data }: ReplyProps) => {
  return (
    <div className='reply'>
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
  );
};

export default Reply;
