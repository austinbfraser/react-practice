import { useState } from 'react';
import type { ReplyData, User, CommentData, ActiveReply } from '../interfaces';
import VotingModule from './VotingModule';

interface ReplyProps {
  data: ReplyData;
  currentUser: User;
  setComments: (input: CommentData[]) => void;
  comments: CommentData[];
  commentId: number;
  activeReply: ActiveReply;
  setActiveReply: (input: ActiveReply) => void;
}

const Reply = ({
  data,
  currentUser,
  comments,
  setComments,
  commentId,
  activeReply,
  setActiveReply,
}: ReplyProps) => {
  const isOwnPost: boolean = data.user.username === currentUser.username;

  const [isEditing, setIsEditing] = useState<boolean>(false);

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

  const handleReply = () => {
    if (!activeReply.status)
      setActiveReply({ status: true, replyingTo: data.user.username });
  };

  const handleEdit = () => {
    if (!isEditing) setIsEditing(true);
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
              <button onClick={handleEdit} className="editButton">Edit</button>
              <button onClick={handleDelete} className="deleteButton">
                Delete
              </button>
            </>
          ) : (
            <button onClick={handleReply} className="replyButton">
              Reply
            </button>
          )}
        </div>
        {!isEditing 
          ? <p>@{data.replyingTo} {data.content}</p>
          : <textarea className="editBox" value={`@${data.replyingTo} ${data.content}`}></textarea>}
      </div>
    </div>
  );
};

export default Reply;
