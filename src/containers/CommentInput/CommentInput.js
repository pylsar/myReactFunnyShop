import React from "react"
import PropTypes from 'prop-types'

import './CommentInput.scss'

class CommentInput extends React.Component {
  state = {
    comment: ""
  }

  handleSubmit = event => {
    event.preventDefault()
  };
  handleClick = () => {
    // пустой коммент не отправляем
    if(!this.state.comment.trim()){
      return null
    }
    //добавляем коммент
    this.props.addComment(this.state.comment)
    // обнуляем инпут после отправки
    this.setState({
      comment: ""
    })
  }

  getComment(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="commentInput">
        <form onSubmit={this.handleSubmit}>
          <div className="commentInput__box">
            <label className="commentInput__box--label" htmlFor="text">Комментарий</label>
            <textarea
              name="comment"
              value={this.state.comment}
              id="text"
              cols="45"
              rows="5"
              placeholder="комментировать"
              onChange={event => this.getComment(event)}
            />
          </div>
          <button className="commentInput__btn" onClick={this.handleClick}>Send</button>
        </form>
      </div>
    )
  }
}

CommentInput.propTypes = {
  comment: PropTypes.string
}

export default CommentInput
