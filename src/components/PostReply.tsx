import { useState } from 'react';
import type { FormEvent } from 'react';
import type { User, CommentData, ReplyData } from '../interfaces';

interface PostReplyProps {
  currentUser: User;
  setComments: (input: CommentData[]) => void;
  comments: CommentData[];
  nextId: number;
  setNextId: (input: number) => void;
  replyingTo: string;
  commentId: number;
  activeReply: boolean;
  setActiveReply: (input: boolean) => void;
}

const PostReply = ({
  currentUser,
  nextId,
  setNextId,
  replyingTo,
  setComments,
  comments,
  commentId,
  activeReply,
  setActiveReply
}: PostReplyProps) => {
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newReply: ReplyData = {
      id: nextId,
      content: text,
      createdAt: 'Just now',
      score: 0,
      user: currentUser,
      replyingTo: replyingTo,
    };
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, replies: [...comment.replies, newReply] };
        } else return comment;
      })
    );
    setText('');
    setNextId(nextId + 1);
    setActiveReply((!activeReply));
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="postReply">
      <img className="avatar-post" src={currentUser.image.png} />
      <form onSubmit={handleSubmit} className="postCommentContainer">
        <textarea
          value={text}
          onChange={handleChange}
          className="postCommentInput"
          placeholder="Add a comment..."
        ></textarea>
        <button className="postCommentButton" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
};

export default PostReply;
