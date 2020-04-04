import React from "react"

class CommentInput extends React.Component {
  state = {
    comment: ""
  }

  handleSubmit = event => {
    event.preventDefault()
  };
  handleClick = () => {
    //добавляем коммент
    this.props.addComment(this.state.comment)
    // обнуляем инпут после отправки
    this.setState({
      comment: ""
    })
  }

  getComment(e) {
    this.setState({
      // comment: e.target.value
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="text">Комментарий</label>
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
          <button onClick={this.handleClick}>Send</button>
        </form>
      </div>
    )
  }
}

export default CommentInput
