import React from "react"
import PropTypes from 'prop-types'

import Like from '../../containers/Like/Like'
import CurrentDate from '../CurrentDate/CurrentDate'


import "./Comment.scss"

import commentIcon from '../../assets/img/commentIcon.jpg'

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment__box">
        <div className="comment__box__img">
          <img
            src={commentIcon}
            alt="icon"
          />
        </div>
        <div className="comment__box__text">
          <p>{comment}</p>
        </div>
      </div>
      <div className="comment__box__bottom">
        <Like />
        <CurrentDate />
      </div>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired
}

export default Comment
