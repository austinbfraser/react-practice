import { useState } from 'react';
import type { FormEvent } from 'react';
import type { User, CommentData } from "../interfaces";

interface PostCommentProps {
  currentUser: User
  setComments: (input: CommentData[]) => void
  comments: CommentData[]
  nextId: number
  setNextId: (input: number) => void
}

const PostComment = ({ currentUser, setComments, comments, nextId, setNextId }: PostCommentProps) => {
  const [text, setText] = useState<string>('');

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const newComment: CommentData = {
    id: nextId,
    content: text,
    createdAt: 'Just now',
    score: 0,
    user: currentUser,
    replies: []
  };
  setComments([...comments, newComment]);
  setText('');
  setNextId(nextId + 1);
};

const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setText(e.target.value);
};

  return (
    <div className='postComment'>
      <img className='avatar-post' src={currentUser.image.png} />
      <form onSubmit={handleSubmit} className='postCommentContainer'>
        <textarea value={text} onChange={handleChange} className='postCommentInput' placeholder='Add a comment...'></textarea>
        <button className='postCommentButton'  type='submit'>SEND</button>
      </form>
    </div>
  )
}

export default PostComment