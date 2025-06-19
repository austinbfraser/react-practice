import { useState } from 'react';
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

  const handleDelete = () => {
    const id: number = data.id;
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const handleReply = () => {
    if (!activeReply.status) setActiveReply({status: true, replyingTo: data.user.username});
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
                  <button className="editButton">Edit</button>
                  <button onClick={handleDelete} className="deleteButton">
                    Delete
                  </button>
                </>
              ) : (
                <button onClick={handleReply} className="replyButton">Reply</button>
              )}
            </div>
            <p>{data.content}</p>
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
