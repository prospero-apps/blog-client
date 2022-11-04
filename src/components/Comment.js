import React from 'react';
import '../style.css';

const Comment = ({ comment }) => {
  return (
    <div className='comment'>
      <p>{comment.content}</p>
      <p>{comment.user.username}</p>
      <p>{comment.date.slice(0, 10)}</p>
    </div>
  )
}

export default Comment
