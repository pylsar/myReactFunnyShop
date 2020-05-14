import React from "react"
import PropTypes from 'prop-types'

import Comment from '../Comment/Comment'

const CommentList = ({ comments}) => {
  return (
    <div>
      {/* счетчик кол-ва сообщений */}
      <span>Количество комментариев: {comments.length}</span>

      {/* выводим сообщения циклом */}
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
}

export default CommentList
