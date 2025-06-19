// import React from 'react';
import type { ReplyData, User, CommentData } from '../interfaces';
import VotingModule from './VotingModule';

interface ReplyProps {
  data: ReplyData;
  currentUser: User;
  setComments: (input: CommentData[]) => void;
  comments: CommentData[];
  commentId: number;
}

const Reply = ({
  data,
  currentUser,
  comments,
  setComments,
  commentId,
}: ReplyProps) => {
  const isOwnPost: boolean = data.user.username === currentUser.username;

  const handleDelete = () => {
    const id: number = data.id;
    setComments(
      comments.map((comment) => {
        if (commentId === comment.id) {
          return {
            ...comment,
            replies: comment.replies.filter((reply) => reply.id !== id),
          };
        } else return comment;
      })
    );
  };

  return (
    <div className="reply">
      <VotingModule score={data.score} />
      <div className="comment-main">
        <div className="comment-topRow">
          <img className="avatar" src={data.user.image.png} />
          <p className="username">
            {data.user.username}
            {isOwnPost ? <span className="youIcon">you</span> : null}
            <span className="createdAt">{data.createdAt}</span>
          </p>
          {isOwnPost ? (
            <>
              <button className="editButton">Edit</button>
              <button onClick={handleDelete} className="deleteButton">Delete</button>
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
