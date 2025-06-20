import { useState } from 'react';
import type { FormEvent } from 'react';
import type { CommentData, User, ActiveReply } from '../interfaces';
import Reply from './Reply';
import VotingModule from './VotingModule';
import PostReply from './PostReply';

interface CommentProps {
  data: CommentData
  currentUser: User
  setComments: (input: CommentData[]) => void
  comments: CommentData[]
  nextId: number
  setNextId: (input: number) => void
}

const Comment = ({
  data,
  currentUser,
  setComments,
  comments,
  nextId,
  setNextId
}: CommentProps) => {
  const isOwnPost: boolean = data.user.username === currentUser.username;

  const [activeReply, setActiveReply] = useState<ActiveReply>({status: false, replyingTo: ''});
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [text, setText] = useState<string>(data.content);

  const handleDelete = () => {
    const id: number = data.id;
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const handleReply = () => {
    if (!activeReply.status) setActiveReply({status: true, replyingTo: data.user.username});
  };

  const handleEdit = () => {
    if (!isEditing) setIsEditing(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComment: CommentData = {...data, content: text};
    setComments(comments.map(comment => {
      if (data.id === comment.id) return newComment
      else return comment
    }));
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setText(e.target.value);
};

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
                <button onClick={handleReply} className="replyButton">Reply</button>
              )}
            </div>
            {!isEditing 
              ? <p>{data.content}</p> 
              : <form onSubmit={handleSubmit}>
                  <textarea className="editBox" value={text} onChange={handleChange}></textarea>
                  <button type="submit">Submit</button>
                </form>}
          </div>
        </div>

        {data.replies.length > 0 || activeReply
          ? <div className="replyContainer" key={`reply-${Date.now()}`}>
              {data.replies.map((reply) => <Reply 
                                            data={reply} 
                                            currentUser={currentUser} 
                                            setComments={setComments} 
                                            comments={comments} 
                                            commentId={data.id}
                                            activeReply={activeReply}
                                            setActiveReply={setActiveReply}
                                            />)}
              {activeReply.status && 
                <PostReply 
                  currentUser={currentUser} 
                  setComments={setComments} 
                  comments={comments} 
                  nextId={nextId} 
                  setNextId={setNextId}
                  commentId={data.id}
                  activeReply={activeReply}
                  setActiveReply={setActiveReply}
                  />}
            </div>
          : null}

      </div>
    </>
  );
};

export default Comment;
