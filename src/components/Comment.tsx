// import React from 'react';
import type { CommentData } from '../interfaces';
import Reply from './Reply';
import VotingModule from './VotingModule';

interface CommentProps {
  data: CommentData;
  currentUser: string;
}

const Comment = ({ data, currentUser }: CommentProps) => {
  const isOwnPost: boolean = data.user.username === currentUser;

  return (
    <>
      <div className="commentContainer">
        <div className="comment">
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
            <p>{data.content}</p>
          </div>
        </div>

        {data.replies.length
          ? data.replies.map((reply) => {
              return (
                <div className="replyContainer" key={`reply-${reply.id}`}>
                  <Reply
                    data={reply}
                    currentUser={currentUser}
                  />
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Comment;
