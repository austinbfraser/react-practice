// import React from 'react';
import type { CommentData } from '../interfaces';

interface CommentProps {
  data: CommentData
}

const Comment = ({ data }: CommentProps) => {
  return (
    <div className='comment'>
      <p>{data.user.username}</p>
      <p>{data.content}</p>
    </div>
  )
}

export default Comment