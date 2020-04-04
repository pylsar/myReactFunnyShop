import React from "react"
import Comment from '../Comment/Comment'

const CommentList = props => {
  return (
    <div>
      {/* счетчик кол-ва сообщений */}
      <span>Количество комментариев: {props.comments.length}</span>
      {/* выводим сообщения циклом */}

      {props.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList
