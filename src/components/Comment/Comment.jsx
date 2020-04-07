import React from "react"

import Like from '../../containers/Like/Like'
import CurrentDate from '../../containers/CurrentDate/CurrentDate'

import "./Comment.scss"

import commentIcon from '../../assets/img/commentIcon.jpg'

const Comment = props => {
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
          <p>{props.comment}</p>
        </div>
      </div>
      <div className="comment__box__bottom">
        <Like />
        <CurrentDate />
      </div>
    </div>
  )
}

export default Comment
